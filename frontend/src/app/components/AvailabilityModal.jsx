"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { SlCalender } from "react-icons/sl";

const AvailabilityModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!startDate || !endDate) {
      toast.error("Please select both start and end dates.");
      return;
    }

    const formData = { startDate, endDate };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/availability/set-data",
        formData
      );

      if (data.success) {
        toast.success("Availability saved successfully!");
        setStartDate("");
        setEndDate("");
        setOpenModal(false);
      } else {
        toast.error("Failed to save availability.");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      toast.error("An error occurred while saving availability.");
    }
  };

  return (
    <div className="mx-auto flex w-full items-center justify-end">
      <button
        onClick={() => setOpenModal(true)}
        className="px-6 py-2 rounded-md font-medium bg-green-700 text-white"
      >
        Set Availability
      </button>

      {/* Modal */}
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-50 flex items-center justify-center inset-0 bg-black/20 backdrop-blur-sm duration-200 ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        }`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full rounded-lg bg-white drop-shadow-2xl sm:w-[400px] ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10"
          >
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-2xl font-semibold">
                Select Start & End Date
              </h1>
              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="text-2xl cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Start Date */}
            <div>
              <label
                htmlFor="startDate"
                className="block mb-2 font-medium text-gray-700"
              >
                Start Date & Time:
              </label>
              <div className="relative">
                <input
                  id="startDate"
                  type="datetime-local"
                  value={startDate}
                  onChange={handleStartDateChange}
                  required
                  className="block w-full text-black rounded-lg p-3 pl-10 outline-none border focus:ring-2 focus:ring-green-500"
                />
                <span className="absolute left-3 top-0 flex items-center h-full text-green-500">
                  <SlCalender />
                </span>
              </div>
            </div>

            {/* End Date */}
            <div>
              <label
                htmlFor="endDate"
                className="block mb-2 font-medium text-gray-700"
              >
                End Date & Time:
              </label>
              <div className="relative">
                <input
                  id="endDate"
                  type="datetime-local"
                  value={endDate}
                  onChange={handleEndDateChange}
                  required
                  className="block w-full text-black rounded-lg p-3 pl-10 outline-none border focus:ring-2 focus:ring-green-500"
                />
                <span className="absolute left-3 top-0 flex items-center h-full text-green-500">
                  <SlCalender />
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-5 py-2.5 rounded-lg text-white font-medium bg-green-700 hover:bg-green-800 transition-all duration-200"
            >
              Confirm Availability
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityModal;
