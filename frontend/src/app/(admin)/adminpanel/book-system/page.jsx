import AvailabilityModal from "@/app/components/AvailabilityModal";
import GetAvailability from "@/app/components/GetAvailability";
import GetBookedData from "@/app/components/GetBookedData";
import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

const page = () => {
  return (
    <div className="m-5">
      <div className="h-[50px] flex justify-between items-center   px-5 text-white  bg-[#035635]">
        <div className="items-center flex gap-2">
          <FaUserFriends size={20} />
          <h1 className="text-[15px] font-bold">All Bookings</h1>
        </div>
        <div>
          <div className="">
            <AvailabilityModal />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end  py-2">
        <GetAvailability />
      </div>

      <div>
        <GetBookedData />
      </div>
    </div>
  );
};

export default page;
