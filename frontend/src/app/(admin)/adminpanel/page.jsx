"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import { useContext } from "react";
import { FaUserFriends } from "react-icons/fa";

const page = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" m-5 ">
      <div className="h-[50px] flex gap-2 px-5 text-white items-center bg-[#035635]">
        <FaUserFriends size={20} />
        <h1 className="text-[15px] font-bold">Profile</h1>
      </div>
      <div className="flex items-center justify-center  mt-20">
        <div className="bg-[#035635] space-y-4 py-10 text-white rounded-xl w-full  lg:w-[70%] mx-auto">
          <h1 className="font-bold text-2xl text-center">{user?.name}</h1>
          <h3 className="font-semibold text-xl text-center">{user?.email}</h3>
        </div>
      </div>
    </div>
  );
};

export default page;
