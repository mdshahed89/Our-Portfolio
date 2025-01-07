"use client";

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdAlternateEmail } from "react-icons/md";
import toast from "react-hot-toast";
import axios from "axios";

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
        className="px-6 w-40 py-2 mx-2 rounded-md font-medium bg-[#15803D] text-white"
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
