"use client";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams();
  const togglePasswordVisibility = () => {
    setShow(!show);
  };

  const togglePasswordVisibility1 = () => {
    setShow1(!show1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    console.log({
      token,
      password,
      confirmPassword,
    });
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/reset-password`,
        {
          token,
          password,
          confirmPassword,
        }
      );
      if (response.data.modifiedCount > 0) {
        toast.success("Password Changed");
        router.push("/login");
      }
    } catch (error) {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="flex items-center h-screen bg-[#035635] justify-center">
      <div className="bg-white w-[90%] md:w-[80%] lg:w-[50%] rounded-xl p-2 md:p-5 mx-auto">
        <h2 className="text-2xl text-center font-bold py-3">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* New Password Field */}
          <div className="flex relative flex-col">
            <label htmlFor="password" className="text-lg mb-1">
              New Password
            </label>
            <input
              type={show ? "text" : "password"}
              id="password"
              name="password"
              className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 px-4 mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          {/* Confirm Password Field */}
          <div className="flex relative flex-col">
            <label htmlFor="confirm-password" className="text-lg mb-1">
              Confirm Password
            </label>
            <input
              type={show1 ? "text" : "password"}
              id="confirm-password"
              name="confirm-password"
              className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 px-4 mt-1"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              onClick={togglePasswordVisibility1}
              className="absolute right-[2%] top-[60%] cursor-pointer"
            >
              {show1 ? (
                <IoEye size={20} className="text-[#8E8E93]" />
              ) : (
                <IoEyeOff size={20} className="text-[#8E8E93]" />
              )}
            </span>
          </div>

          <div className="flex items-center justify-center pt-3">
            <button
              type="submit"
              className="bg-[#035635] w-60 text-xl font-semibold text-white rounded-full p-2"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
