"use client";
import { FaUser } from "react-icons/fa";
import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "@/AuthProvider/AuthProvider";

export const EmailChange = () => {
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
        className="px-6 w-40 py-2 mx-2 rounded-md font-medium bg-[#15803D] text-white"
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
