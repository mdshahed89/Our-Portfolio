"use client";
import AdminProfile from "@/app/components/AdminProfile";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import { useContext } from "react";
import { FaUserFriends } from "react-icons/fa";

const Page = () => {
  return (
    <div className=" m-5 ">
      <div className="h-[50px] flex gap-2 px-5 text-white items-center bg-[#035635]">
        <FaUserFriends size={20} />
        <h1 className="text-[15px] font-bold">Profile</h1>
      </div>
      <AdminProfile />
    </div>
  );
};

export default page;
