"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";

const AdminProfile = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className=" h-[100vh] w-[100vw] bg-white flex items-center justify-center ">
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-green-400 border-t-green-700"></div>
      </div>
    );
  }
  return (
    <div className="flex items-center min-h-[80vh]  justify-center">
      <div className="bg-[#035635] space-y-1 py-10  rounded-xl md:w-[70%] mx-auto ">
        <h2 className="font-bold text-2xl text-center text-white">
          {user?.name}
        </h2>
        <h3 className="font-semibold text-xl text-center text-white">
          {user?.email}
        </h3>
        <div className="flex justify-center pt-16">
          <div className="flex  items-center md:gap-5 justify-center">
            <ProfilePasswordChange />
            <EmailChangeModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

export const ProfilePasswordChange = () => {
  const [openModal, setOpenModal] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/send-reset-email`,
        {
          email: formData.email,
        }
      );

      if (data === "Email sent successfully!") {
        toast.success("E-post sendt!");
        setEmailSent(true); // Show success message
        setFormData({ email: "" }); // Clear the form input
      } else {
        toast.error("Failed to send email. Please try again.");
        setEmailSent(false);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
      setEmailSent(false);
    }
  };

  return (
    <div className="">
      <button
        onClick={() => setOpenModal(true)}
        className="px-6 w-40 py-2 mx-2 rounded-md font-medium bg-white text-[#15803D]"
      >
        Endre passord
      </button>

      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute w-full rounded-lg bg-white drop-shadow-2xl sm:w-[500px] ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          {emailSent ? (
            <div className="p-5 text-center space-y-4">
              <h2 className="text-2xl font-bold text-green-600">
                E-post sendt!
              </h2>
              <p className="text-gray-700 text-lg font-medium">
                Vennligst sjekk e-postinnboksen eller søppelpostmappen for
                tilbakestillingskoblingen. Det kan ta noen minutter å komme
                frem.
              </p>
              <button
                onClick={() => {
                  setOpenModal(false);
                  setEmailSent(false); // Reset state
                }}
                className="px-6 py-2 rounded-md font-medium bg-[#15803D] text-white"
              >
                Close
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10"
            >
              <div
                onClick={() => setOpenModal(false)}
                className="flex justify-end text-[1.8rem] cursor-pointer"
              >
                <RxCross2 />
              </div>
              <h2 className="pb-8 text-2xl text-green-600 font-semibold">
                Glem passord
              </h2>
              <div className="space-y-3">
                <div>
                  <label htmlFor="email" className="block mb-2">
                    E-post
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Skriv inn e-postadressen din"
                      className="block w-full rounded-lg p-3 pl-10 outline-none border"
                      required
                    />
                    <span className="absolute left-2 top-0 flex items-center h-full text-green-600">
                      <MdAlternateEmail />
                    </span>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="relative py-2.5 px-10 w-full rounded-lg mt-10 text-white font-medium bg-[#035635]"
              >
                Sende
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export const EmailChangeModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    oldEmail: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passordene stemmer ikke overens");
      return;
    }

    try {
      const { data } = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/change-password`,
        {
          name: formData.name,
          oldEmail: formData.oldEmail,
          newEmail: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }
      );
      console.log(data);

      if (data.modifiedCount > 0) {
        toast.success("E-post endret vellykket");
        const updatedUser = {
          ...user,
          email: formData.email,
          name: formData.name,
        };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setOpenModal(false);
        setFormData({
          name: "",
          oldEmail: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "En feil oppstod");
    }
  };

  return (
    <div className="">
      <button
        onClick={() => setOpenModal(true)}
        className="px-6 w-40 py-2 mx-2 rounded-md font-medium bg-white text-[#15803D]"
      >
        Endre e-post
      </button>

      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute w-full rounded-lg bg-white drop-shadow-2xl sm:w-[500px] ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="px-5 pb-5 pt-3 lg:pb-8 lg:pt-5 lg:px-10"
          >
            <div
              onClick={() => setOpenModal(false)}
              className="flex justify-end text-[1.8rem] cursor-pointer"
            >
              <RxCross2 />
            </div>
            <h2 className="pb-5 text-2xl text-green-600 font-medium">
              Endre e-post
            </h2>
            <div className="space-y-1">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block mb-1">
                  Navn
                </label>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Skriv inn ditt navn"
                    className="block w-full rounded-lg p-3 pl-10 outline-none border"
                  />
                  <span className="absolute left-2 top-0 flex items-center h-full text-green-600">
                    <FaUser />
                  </span>
                </div>
              </div>

              {/* Old Email Field */}
              <div>
                <label htmlFor="oldEmail" className="block mb-1">
                  E-post (nåværende)
                </label>
                <div className="relative">
                  <input
                    id="oldEmail"
                    type="email"
                    value={formData.oldEmail}
                    onChange={handleChange}
                    placeholder="Skriv inn din gamle e-post"
                    className="block w-full rounded-lg p-3 pl-10 outline-none border"
                    required
                  />
                  <span className="absolute left-2 top-0 flex items-center h-full text-green-600">
                    <MdAlternateEmail />
                  </span>
                </div>
              </div>

              {/* New Email Field */}
              <div>
                <label htmlFor="email" className="block mb-1">
                  Ny e-post
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Skriv inn e-postadressen din"
                    className="block w-full rounded-lg p-3 pl-10 outline-none border"
                    required
                  />
                  <span className="absolute left-2 top-0 flex items-center h-full text-green-600">
                    <MdAlternateEmail />
                  </span>
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block mb-1">
                  Passord
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Skriv inn passordet ditt"
                    className="block w-full rounded-lg p-3 pl-10 outline-none border"
                    required
                  />
                  <span className="absolute left-2 top-0 flex items-center h-full text-green-600">
                    <RiLockPasswordLine />
                  </span>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block mb-1">
                  Bekreft passord
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Bekreft passordet ditt"
                    className="block w-full rounded-lg p-3 pl-10 outline-none border"
                    required
                  />
                  <span className="absolute left-2 top-0 flex items-center h-full text-green-600">
                    <RiLockPasswordLine />
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="relative py-2.5 px-10 w-full rounded-lg mt-10 text-white font-medium bg-[#035635]"
            >
              Endre e-post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
