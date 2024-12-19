import Link from "next/link";
import { FaUserFriends } from "react-icons/fa";

const page = () => {
  return (
    <div className="m-5">
      <div className="h-[50px] flex justify-between items-center   px-5 text-white  bg-[#035635]">
        <div className="items-center flex gap-2">
          <FaUserFriends size={20} />
          <h1 className="text-[15px] font-bold">All Blogs</h1>
        </div>
        <div>
          <Link
            href={"/adminpanel/createblog"}
            className="border border-white rounded-md p-2"
          >
            Create Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
