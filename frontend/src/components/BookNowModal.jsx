"use client";

import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephonePlus } from "react-icons/bs";
import toast from "react-hot-toast";
import { SlCalender } from "react-icons/sl";

export const BookNowModal = ({ title, availability }) => {
  const [openModal, setOpenModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    title,
    email: "",
    fullName: "",
    phoneNo: "",
    dateAndTime: "",
    date: "",
    time: "",
  });

  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  useEffect(() => {
    if (availability) {
      setFromTime(availability?.startDate);
      setToTime(availability?.endDate);
    }
  }, []);

  // const fromTime = "2024-12-28T15:45";
  // const toTime = "2024-12-30T17:00";

  const formattedStartDate = new Date(fromTime).toLocaleString("no-NO", {
    dateStyle: "short",
    timeStyle: "short",
  });
  const formattedEndDate = new Date(toTime).toLocaleString("no-NO", {
    dateStyle: "short",
    timeStyle: "short",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Update the booking data
    const updatedData = { ...bookingData, [id]: value };

    // Combine date and time if both are available
    if (id === "date" || id === "time") {
      if (updatedData.date || updatedData.time) {
        updatedData.dateAndTime = `${updatedData.date}T${updatedData.time}`;

        if (availability) {
          const selectedDateTime = new Date(updatedData.dateAndTime).getTime();
          const fromDateTime = new Date(fromTime).getTime();
          const toDateTime = new Date(toTime).getTime();
          const now = new Date().getTime();

          // Validate that the selected date and time are not in the past
          if (selectedDateTime < now) {
            toast.error("Du kan ikke velge tidligere dato og klokkeslett."); // Cannot select past date/time
            return;
          }

          // Validate that the selected date and time are outside the unavailable range
          if (
            selectedDateTime >= fromDateTime &&
            selectedDateTime <= toDateTime
          ) {
            toast.error(
              `Den valgte tiden er ikke tilgjengelig. Ugyldig periode: ${formattedStartDate} - ${formattedEndDate}`
            );
            return;
          }
        }
      }
    }

    // Set the updated booking data
    setBookingData(updatedData);
  };

  // setBookingData({
  //   ...bookingData,
  //   [e.target.id]: e.target.value,
  // });

  // console.log(process.env.NEXT_PUBLIC_BACKEND_URL);

  const sendBookingData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/book/send-data`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );
      // console.log(response);

      if (response.ok) {
        const result = await response.json();
        toast.success("Bestilling vellykket");
        setBookingData({
          title,
          email: "",
          fullName: "",
          phoneNo: "",
          dateAndTime: "",
          date: "",
          time: "",
        });
        setOpenModal(false);
      } else {
        toast.error("Kunne ikke bestille");
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("Kunne ikke sende bestillingsdata");
    }
  };
  console.log("bookingdata", bookingData);
  console.log("availability", availability);

  return (
    <div className="mx-auto flex w-full items-center justify-end ">
      <button
        onClick={() => setOpenModal(true)}
        className="px-6 py-2 rounded-md font-medium bg-green-700 text-[#fff]"
      >
        Bestill nå
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full rounded-lg bg-white drop-shadow-2xl sm:w-[500px] ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form
            onSubmit={sendBookingData}
            className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10"
          >
            <div
              onClick={() => setOpenModal(false)}
              className=" flex justify-end text-[1.8rem] cursor-pointer  "
            >
              <RxCross2 />
            </div>
            <h2 className="pb-8 text-4xl backdrop-blur-sm">Bestill nå</h2>
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="email_navigate_ui_modal"
                  className="block mb-2 "
                >
                  Fullt navn*
                </label>
                <div className="relative">
                  <input
                    id="fullName"
                    type="text"
                    value={bookingData.fullName}
                    placeholder="Skriv inn din fullt navn"
                    required
                    onChange={handleChange}
                    className="block w-full rounded-lg p-3 pl-10 outline-none border bg-white "
                  />
                  <span className="absolute left-2 top-0 flex items-center h-full text-green-500 ">
                    <FaRegUser />
                  </span>
                </div>
              </div>
              <div>
                <label
                  htmlFor="password_navigate_ui_modal"
                  className="block mb-2"
                >
                  E-post
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    value={bookingData.email}
                    required
                    placeholder="Skriv inn din E-post"
                    onChange={handleChange}
                    className="block w-full rounded-lg p-3 pl-10 outline-none border"
                  />
                  <span className="absolute left-2 top-0 flex items-center h-full text-green-500 ">
                    <MdAlternateEmail />
                  </span>
                </div>
              </div>
              <div>
                <label
                  htmlFor="password_navigate_ui_modal"
                  className="block mb-2"
                >
                  Telefonnr*
                </label>
                <div className="relative">
                  <input
                    id="phoneNo"
                    type="number"
                    value={bookingData.phoneNo}
                    required
                    placeholder="Skriv inn telefonnummeret ditt"
                    onChange={handleChange}
                    className="block w-full rounded-lg p-3 pl-10 outline-none border"
                  />
                  <span className="absolute left-2 top-0 flex items-center h-full text-green-500 ">
                    <BsTelephonePlus />
                  </span>
                </div>
              </div>
              <div>
                <label
                  htmlFor="password_navigate_ui_modal"
                  className="block mb-2"
                >
                  Dato og tid*
                </label>
                <div className="relative flex items-center gap-2">
                  <input
                    id="date"
                    type="date"
                    value={bookingData.date}
                    required
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="block w-full rounded-lg p-3 pl-10 outline-none border"
                  />
                  <select
                    id="time"
                    onChange={handleChange}
                    required
                    value={bookingData.time}
                    className="rounded-lg py-3 px-2 text-center outline-none border"
                  >
                    <option value="" disabled>
                      Select Time
                    </option>
                    {Array.from({ length: 13 }, (_, i) =>
                      (i + 9).toString().padStart(2, "0")
                    ).map((hour) => (
                      <option key={hour} value={`${hour}:00`}>
                        {`${hour}:00`}
                      </option>
                    ))}
                  </select>

                  <span className="absolute left-2 top-0 flex items-center h-full text-green-500 ">
                    <SlCalender />
                  </span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="relative py-2.5 px-10 w-full rounded-lg mt-10 text-white font-medium bg-green-700 "
            >
              Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
