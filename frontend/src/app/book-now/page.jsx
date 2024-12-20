import React from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import { TbFreezeColumn } from "react-icons/tb";
import { CiClock2 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BookNowModal } from "../components/BookNowModal";

const page = () => {
  return (
    <div className=" mt-[10rem] max-w-[1400px] mx-auto md:px-3 px-2 ">
      <h3 className=" text-[1.5rem] font-semibold ">
        Tilgjengelig - 4 Tjenester
      </h3>

      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-10 gap-4 ">
        <Card title="Nettside Design" time="45 min" />
        <Card title="Nettside Utvikling" time="40 min" />
        <Card title="E-handelsløsninger" time="50 min" />
        <Card title="Markedsføringsløsninger" time="40 min" />
      </div>
    </div>
  );
};

export default page;

const Card = ({title, time}) => {
    return(
        <div className=" hover:shadow-[0_0_5px_1px_rgba(0,128,0,0.6)]  shadow-[0_0_5px_1px_rgba(128,128,128,0.6)] px-3 pt-5 pb-3 rounded-md ">
          <div className=" flex items-center gap-1 w-fit px-4 py-1 rounded-full bg-green-200 text-[#035635] text-[1rem] font-semibold ">
            <CiBookmarkPlus />
            <h4>Konsultasjon</h4>
          </div>
          <h3 className=" text-[1.4rem] font-semibold my-4 ">
            {title}
          </h3>
          <div className=" flex items-center justify-between ">
            <div className=" flex items-center gap-1  text-[1rem]  ">
              <TbFreezeColumn className=" text-green-500 " />
              <h4>Gratis Konsultasjon</h4>
            </div>
            <div className=" flex items-center gap-1  text-[#000] text-[1rem]  ">
              <CiClock2 className=" text-green-500 "  />
              <h4>{time}</h4>
            </div>
            <div className=" flex items-center gap-1  text-[#000] text-[1rem] ">
              <CiUser className=" text-green-500 "  />
              <h4>1</h4>
            </div>
          </div>
          <div className=" flex justify-end mt-4 ">
            <BookNowModal title={title} />
          </div>
        </div>
    )
}
