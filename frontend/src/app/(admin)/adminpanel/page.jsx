import AdminProfile from "@/components/AdminProfile";

import { FaUserFriends } from "react-icons/fa";

const Page = () => {
  return (
    <div className=" mx-2 mt-5  md:m-5 ">
      <div className="h-[50px] flex gap-2 px-5 text-white items-center bg-[#035635]">
        <FaUserFriends size={20} />
        <h2 className="text-[15px] font-bold">Profil</h2>
      </div>
      <AdminProfile />
    </div>
  );
};

export default Page;
