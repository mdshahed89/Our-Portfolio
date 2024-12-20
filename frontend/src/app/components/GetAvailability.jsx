"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineDateRange } from "react-icons/md";

const GetAvailability = () => {
  const [availabilityData, setAvailabilityData] = useState([]);
  console.log(availabilityData);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/availability/get-availability"
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
    <div className="">
      <div className="flex items-center p-2 rounded-xl gap-2  text-gray-500">
        <h3 className="text-lg uppercase font-medium">
          Unavailable :{" "}
          <span>{new Date(availabilityData?.startDate).toLocaleString()}</span>
          {" - "}
          <span>{new Date(availabilityData?.endDate).toLocaleString()}</span>
        </h3>
      </div>
    </div>
  );
};

export default GetAvailability;
