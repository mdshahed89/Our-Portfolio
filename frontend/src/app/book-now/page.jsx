import React from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import { TbFreezeColumn } from "react-icons/tb";
import { CiClock2 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BookNowModal } from "../../components/BookNowModal";

const page = async () => {
  let availability = null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/availability/get-availability`,
      {
        method: "GET",
        next: {revalidate: 60}, 
      }
    );

    if (!response.ok) {
      // throw new Error("Failed to fetch data");
      console.log("Faield to fetch availability data");
      return
    }

    const data = await response.json();
    // console.log("da",data);

    if (data?.success) {
      availability = data?.availability;
    }
  } catch (error) {
    console.log(`Failed to fetch availability data: ${error}`);
  }

  return (
    <div className=" mt-[10rem] pb-[2rem] 2xl:max-w-[1400px] max-w-[1200px] mx-auto md:px-3 px-2 ">
      <p className=" text-[1.5rem] font-semibold ">
        Tilgjengelig - 4 Tjenester
      </p>

      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-10 gap-4 ">
        <Card
          title="Webapplikasjon"
          time="45 min"
          availability={availability}
        />
        <Card
          title="Nettside Utvikling"
          time="40 min"
          availability={availability}
        />
        <Card
          title="E-handelsløsninger"
          time="50 min"
          availability={availability}
        />
        <Card
          title="Markedsføringsløsninger"
          time="40 min"
          availability={availability}
        />
      </div>
    </div>
  );
};

export default page;

const Card = ({ title, time, availability }) => {
  return (
    <div className=" hover:shadow-[0_0_5px_1px_rgba(0,128,0,0.6)]  shadow-[0_0_5px_1px_rgba(128,128,128,0.6)] px-3 pt-5 pb-3 rounded-md ">
      <div className=" flex items-center gap-1 w-fit px-4 py-1 rounded-full bg-green-200 text-[#035635] text-[1rem] font-semibold ">
        <CiBookmarkPlus />
        <h4>Konsultasjon</h4>
      </div>
      <h3 className=" text-[1.4rem] font-semibold my-4 ">{title}</h3>
      <div className=" flex items-center justify-between ">
        <div className=" flex items-center gap-1  text-[1rem]  ">
          <TbFreezeColumn className=" text-green-500 " />
          <h4>Gratis Konsultasjon</h4>
        </div>
        <div className=" flex items-center gap-1  text-[#000] text-[1rem]  ">
          <CiClock2 className=" text-green-500 " />
          <p>{time}</p>
        </div>
        <div className=" flex items-center gap-1  text-[#000] text-[1rem] ">
          <CiUser className=" text-green-500 " />
          <p>1</p>
        </div>
      </div>
      <div className=" flex justify-end mt-4 ">
        <BookNowModal title={title} availability={availability} />
      </div>
    </div>
  );
};
