"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import React from "react";
import { FaUserFriends } from "react-icons/fa";
import AvailabilityModal from "./AvailabilityModal";
import GetAvailability from "./GetAvailability";
import GetBookedData from "./GetBookedData";

const AvalPage = () => {
  const [availabilityData, setAvailabilityData] = useState([]);
  console.log(availabilityData);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/availability/get-availability`
      );
      setAvailabilityData(response.data.availability);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="m-5">
      <div className="h-[50px] flex justify-between items-center   px-5 text-white  bg-[#035635]">
        <div className="items-center flex gap-2">
          <FaUserFriends size={20} />
          <h2 className="text-[15px] font-bold">Alle bestillinger</h2>
        </div>
        <div>
          <div className="">
            <AvailabilityModal fetchData={fetchData} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end  py-2">
        <GetAvailability availabilityData={availabilityData} />
      </div>

      <div>
        <GetBookedData />
      </div>
    </div>
  );
};

export default AvalPage;
