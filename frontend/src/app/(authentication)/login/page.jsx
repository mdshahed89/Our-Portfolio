"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const page = () => {
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const [show, setShow] = useState(false);
  const togglePasswordVisibility = () => {
    setShow(!show);
  };
  const handleSubmit = async (e) => {
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
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="bg-white w-[90%] md:w-[80%] lg:w-[50%] rounded-xl p-2 md:p-5 mx-auto">
        <h1 className="text-2xl text-center font-bold py-3">Login </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-xl mb-1">
              Email
            </label>
            <input
              type="email"
              id="title"
              name="email"
              className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2  px-4 mt-1"
              required
            />
          </div>
          <div className="flex relative flex-col">
            <label htmlFor="title" className="text-xl mb-1">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              id="title"
              name="password"
              className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2  px-4 mt-1"
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
            <Link href={"#"}>
              <small className="underline text-[#035635]">
                Forget Password
              </small>
            </Link>
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
      </div>
    </div>
  );
};

export default page;
