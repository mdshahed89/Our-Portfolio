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
      console.log(error);
      console.log("Invalid credentials");
    }
  };

  const handleForgetPasswordSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    try {
      const { data } = await axios.post(
        "http://localhost:5000/send-reset-email",
        {
          email,
        }
      );
      console.log(data);
      if (data === "Email sent successfully!") {
        toast.success("Email sent successfully!");
        form.reset();
        setEmailSent(true);
      }
      form.reset();
    } catch (error) {
      console.log(error);
      setEmailSent(false);
    }
  };

  return (
    <div className="flex items-center h-screen justify-center">
      <div className="bg-white w-[90%] md:w-[80%] lg:w-[50%] rounded-xl p-2 md:p-5 mx-auto">
        {emailSent ? (
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-green-600">
              Email Sent Successfully!
            </h1>
            <p className="text-gray-700 text-lg font-medium">
              Please check your email inbox or spam folder for the reset link.
              It may take a few minutes to arrive.
            </p>
          </div>
        ) : (
          <>
            <h1 className="text-2xl text-center font-bold py-3">
              {showForgetPassword ? "Forget Password" : "Login"}
            </h1>
            {!showForgetPassword ? (
              <form onSubmit={handleLoginSubmit} className="space-y-3">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xl mb-1">
                    Email
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
                    Password
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
                      Forget Password
                    </small>
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-[#035635] w-60 text-xl font-semibold text-white rounded-full p-2"
                  >
                    Login
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleForgetPasswordSubmit} className="space-y-3">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xl mb-1">
                    Enter your email to reset your password
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
                    className="bg-[#035635] w-60 text-xl font-semibold text-white rounded-full p-2"
                  >
                    Send Reset Email
                  </button>
                </div>
                <div className="flex items-center justify-center pt-3">
                  <button
                    type="button"
                    onClick={() => setShowForgetPassword(false)}
                    className="underline text-[#035635]"
                  >
                    Back to Login
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
