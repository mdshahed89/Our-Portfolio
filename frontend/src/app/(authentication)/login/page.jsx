"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Page = () => {
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const [emailSent, setEmailSent] = useState(false);
  const [show, setShow] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShow(!show);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await login(email, password);
      router.push("/adminpanel");
    } catch (error) {
      toast.error(error);
      // console.log("Invalid credentials");
    }
  };

  const handleForgetPasswordSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/send-reset-email`,
        {
          email,
        }
      );
      console.log(data);
      if (data === "Email sent successfully!") {
        toast.success("E-post sendt!");
        form.reset();
        setEmailSent(true);
      }
      form.reset();
    } catch (error) {
      // console.log(error);
      setEmailSent(false);
    }
  };

  return (
    <div className="flex items-center relative  h-screen justify-center">
      <Link
        href={"/"}
        className="bg-white absolute top-10 left-4 md:left-[10%] lg:left-[25%] transition-all duration-300 ease-in-out active:scale-95 py-2 px-5 flex justify-center text-xl font-semibold text-green-700 rounded-full p-2"
      >
        Tilbake
      </Link>
      <div className="bg-white w-[90%] md:w-[80%] lg:w-[50%] rounded-xl p-2 md:p-5 mx-auto">
        {emailSent ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-600">E-post sendt!</h2>
            <p className="text-gray-700 text-lg font-medium">
              Vennligst sjekk e-postinnboksen eller søppelpostmappen for
              tilbakestillingskoblingen.Det kan ta noen minutter å komme frem.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl text-center font-bold py-3">
              {showForgetPassword ? "Glem passord" : "Logg inn"}
            </h2>
            {!showForgetPassword ? (
              <form onSubmit={handleLoginSubmit} className="space-y-3">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xl mb-1">
                    E-post
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 px-4 mt-1"
                    required
                  />
                </div>
                <div className="flex relative flex-col">
                  <label htmlFor="password" className="text-xl mb-1">
                    Passord
                  </label>
                  <input
                    type={show ? "text" : "password"}
                    id="password"
                    name="password"
                    className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 px-4 mt-1"
                    required
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-[2%] top-[60%] cursor-pointer"
                  >
                    {show ? (
                      <IoEye size={20} className="text-[#8E8E93]" />
                    ) : (
                      <IoEyeOff size={20} className="text-[#8E8E93]" />
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-end pr-3">
                  <button
                    type="button"
                    onClick={() => setShowForgetPassword(true)}
                  >
                    <small className="underline text-[#035635]">
                      Glem passord
                    </small>
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-[#035635] transition-all duration-300 ease-in-out active:scale-95 w-60 text-xl font-semibold text-white rounded-full p-2"
                  >
                    Logg inn
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleForgetPasswordSubmit} className="space-y-3">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xl mb-1">
                    Skriv inn e-postadressen din for å tilbakestille passordet
                    ditt
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 px-4 mt-1"
                    required
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-[#035635] transition-all duration-300 ease-in-out active:scale-95 w-60 text-xl font-semibold text-white rounded-full p-2"
                  >
                    Send tilbakestilt e-post
                  </button>
                </div>
                <div className="flex items-center justify-center pt-3">
                  <button
                    type="button"
                    onClick={() => setShowForgetPassword(false)}
                    className="underline transition-all duration-300 ease-in-out active:scale-95 text-[#035635]"
                  >
                    Tilbake til pålogging
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
