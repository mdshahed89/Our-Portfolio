"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import { useContext } from "react";
import { ProfilePasswordChange } from "./ProfilePasswordChange";
import { EmailChange } from "./emailChangeModal";

const AdminProfile = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex items-center min-h-[80vh]  justify-center">
      <div className="bg-[#035635] space-y-4 py-10  rounded-xl md:w-[70%] mx-auto ">
        <h2 className="font-bold text-2xl text-center text-white">
          {user?.name}
        </h2>
        <h3 className="font-semibold text-xl text-center text-white">
          {user?.email}
        </h3>
        <div className="flex justify-center">
          <div className="flex  items-center md:gap-5 justify-center">
            <ProfilePasswordChange />
            <EmailChange />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
