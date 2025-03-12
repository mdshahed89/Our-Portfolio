"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { CiUser } from "react-icons/ci";
import { MdMarkEmailUnread, MdOutlineDateRange } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
const Page = () => {
  const [availabilityData, setAvailabilityData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/availability/get-availability`
      );
      setAvailabilityData(response.data.availability);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" m-2 md:m-5">
      <div className="h-[50px] flex justify-between items-center  px-2 md:px-5 text-white  bg-[#035635]">
        <div className="items-center flex gap-2">
          <FaUserFriends size={20} />
          <h3 className="text-[13px] md:text-[15px] font-medium">
            Alle bestillinger
          </h3>
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

export default Page;

export const GetBookedData = () => {
  const [bookData, setBookData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const fetchBookData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/book/get-all-data`
      );
      setBookData(response.data?.bookings || []);
    } catch (error) {
      toast.error(error);
      // setError("Noe gikk galt under henting av bokdata.");
    }
  };
  useEffect(() => {
    fetchBookData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/book/delete-booking/${id}`
      );

      if (response.data.success) {
        fetchBookData();
        setOpenModal(false);
      } else {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 mt-5">
      {bookData.length > 0 ? (
        <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-3">
          {bookData.map((item) => (
            <div
              key={item._id}
              className="bg-white hover:shadow-[0_0_5px_1px_rgba(0,128,0,0.6)] shadow-[0_0_5px_1px_rgba(128,128,128,0.6)] px-3 pt-5 pb-3 rounded-md transition-all duration-300 p-6 relative"
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

              <div>
                <button
                  onClick={() => {
                    setDeleteId(item._id);
                    setOpenModal(true);
                  }}
                  className="bg-slate-100  text-[#000] transition-all duration-300 ease-in-out active:scale-95 rounded-md top-5 right-5 p-2 absolute"
                >
                  <MdDelete className="text-[1.5rem]" />
                </button>

                {openModal && (
                  <div
                    onClick={() => setOpenModal(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                  >
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="w-80 md:w-96 rounded-lg  bg-white p-12 text-center shadow-lg"
                    >
                      <h6 className="text-lg font-medium py-4 text-gray-800">
                        Er du sikker? Vil du slette den?
                      </h6>
                      <div className="mt-4 flex justify-center gap-4">
                        <button
                          onClick={() => handleDelete(deleteId)}
                          className="rounded-md w-40 bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                        >
                          Ja, Slett
                        </button>
                        <button
                          onClick={() => setOpenModal(false)}
                          className="rounded-md w-40 border border-gray-400 px-4 py-2 text-gray-600 hover:bg-gray-200"
                        >
                          Kansellere
                        </button>
                      </div>
                    </div>
                  </div>
                )}
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

export const GetAvailability = ({ availabilityData }) => {
  return (
    <div className="">
      <div className="flex items-center p-2 rounded-xl gap-2  text-gray-500">
        {availabilityData && (
          <h3 className="text-lg uppercase font-medium">
            Utilgjengelig :{" "}
            <span>
              {new Date(availabilityData?.startDate).toLocaleString()}
            </span>
            {" - "}
            <span>{new Date(availabilityData?.endDate).toLocaleString()}</span>
          </h3>
        )}
      </div>
    </div>
  );
};

export const AvailabilityModal = ({ fetchData }) => {
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
      toast.error("Velg både start- og sluttdato.");
      return;
    }

    const formData = { startDate, endDate };

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/availability/set-data`,
        formData
      );

      if (data.success) {
        toast.success("Tilgjengelighet lagret!");
        fetchData();
        setStartDate("");
        setEndDate("");
        setOpenModal(false);
      } else {
        toast.error("Kunne ikke lagre tilgjengelighet.");
      }
    } catch (error) {
      toast.error("Det oppsto en feil under lagring av tilgjengelighet.");
    }
  };

  return (
    <div className="mx-auto flex w-full items-center justify-end">
      <button
        onClick={() => setOpenModal(true)}
        className="px-1 md:px-10 py-2 transition-all duration-300 ease-in-out active:scale-95 rounded-md text-[13px] md:text-lg font-medium bg-white text-green-700"
      >
        Angi tilgjengelighet
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
            <div className="flex justify-between items-center mb-10 text-black ">
              <h3 className="text-xl font-medium ">
                Velg Start- og sluttdato
              </h3>
              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="text-xl cursor-pointer"
              >
                <RxCross1 />
              </button>
            </div>

            {/* Start Date */}
            <div className=" mb-2 ">
              <label
                htmlFor="startDate"
                className="block mb-2 font-medium text-gray-700"
              >
                Startdato og klokkeslett
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
                Sluttdato og klokkeslett
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
              className="w-full mt-5 transition-all duration-300 ease-in-out active:scale-95 py-2.5 rounded-lg text-white font-medium bg-green-700 hover:bg-green-800 "
            >
              Bekreft tilgjengelighet
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
