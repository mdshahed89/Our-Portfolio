"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { CiClock2, CiUser } from "react-icons/ci";
import { MdMarkEmailUnread, MdOutlineDateRange } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";

const GetBookedData = () => {
  const [bookData, setBookData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/book/get-all-data`
      );
      setBookData(response.data.bookings);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(bookData);
  

  return (
    <div className="container mx-auto px-4 mt-5">
      {bookData.length > 0 ? (
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-3">
          {bookData.map((item) => (
            <div
              key={item._id}
              className="bg-white hover:shadow-[0_0_5px_1px_rgba(0,128,0,0.6)] shadow-[0_0_5px_1px_rgba(128,128,128,0.6)] px-3 pt-5 pb-3 rounded-md transition-all duration-300 p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h3>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center text-gray-600">
                  <CiUser className="text-green-500 text-lg mr-2" />
                  <p className="text-lg font-medium">{item.fullName}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MdOutlineDateRange className="text-green-500 text-lg mr-2" />
                <span className="text-sm font-medium">
                  {new Date(item.dateAndTime).toLocaleString()}
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <IoCall className="text-green-500 text-lg mr-2" />
                <span className="text-sm font-medium">{item.phoneNo}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MdMarkEmailUnread className="text-green-500 text-lg mr-2" />
                <span className="text-sm font-medium">{item.email}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[400px]  rounded-xl">
          <FaDatabase size={50} className="text-gray-400 mb-4" />
          <p className="text-2xl font-bold text-gray-600">
            Ingen data tilgjengelig
          </p>
          <p className="text-gray-500 text-center mt-2">
            Det virker som det ikke er noen prosjekter å vise akkurat nå.
          </p>
        </div>
      )}
    </div>
  );
};

export default GetBookedData;
