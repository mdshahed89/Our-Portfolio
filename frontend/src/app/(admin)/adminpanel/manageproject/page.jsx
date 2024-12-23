import Link from "next/link";
import { FaUserFriends } from "react-icons/fa";
import ProjectCard from "@/app/components/ProjectCard";
const page = () => {
  return (
    <div className="m-2 md:m-5">
      <div className="h-[50px] flex justify-between items-center   px-5 text-white  bg-[#035635]">
        <div className="items-center flex gap-2">
          <FaUserFriends size={20} />
          <h2 className="text-[15px] font-bold">Alle Prosjekt</h2>
        </div>
        <div>
          <Link
            href={"/adminpanel/createproject"}
            className="px-2 md:px-10 transition-all duration-300 ease-in-out active:scale-95 py-2 rounded-md font-medium bg-green-700 text-white"
          >
            skape prosjekt
          </Link>
        </div>
      </div>

      <ProjectCard />
    </div>
  );
};

export default page;
