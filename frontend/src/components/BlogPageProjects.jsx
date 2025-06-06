"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {
  MdArrowForwardIos,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import AImg from "@/assets/A.jpg";
import { FetchDataLoading } from "./Loading";

const BlogPageProjects = ({ projects }) => {
  const [isDragging, setIsDragging] = useState(false);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="  custom-next-arrow absolute z-[100] top-1/2 right-1 transform -translate-y-1/2"
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowRight className="text-[#fff] rounded-full shadow-[0px_0px_5px_0px_#17DB4F] text-[2.5rem] p-2 bg-[#17DB4F] cursor-pointer" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className=" custom-next-arrow absolute z-[100] top-1/2 left-1 transform -translate-y-1/2"
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowLeft className="text-[#fff] rounded-full shadow-[0px_0px_5px_0px_#17DB4F] text-[2.5rem] p-2 bg-[#17DB4F] cursor-pointer  " />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: true,
    draggable: true,
    swipe: true,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setTimeout(() => setIsDragging(false), 200),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="overflow-x-hidden overflow-hidden h-auto md:px-4 ">
        {projects.length > 0 ? (
          <Slider {...settings} className="  ">
            {projects.map((project, index) => (
              <div key={index} className="px-2 group">
                <Link
                  href={isDragging ? "#" : `/prosjekter/${project?._id}`}
                  onClick={(e) => isDragging && e.preventDefault()}
                  className="bg-white rounded-lg shadow-md  overflow-x-hidden transition-all duration-300 ease-in-out"
                >
                  <div className=" w-full relative h-[15rem] ">
                    <Image
                      src={project?.ProjectImg || AImg}
                      alt={project?.title}
                      priority
                      fill
                      className="w-full max-w-[430px] h-[15rem] object-contain object-top rounded-md"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between ">
                    <div>
                      <div className="text-xl font-semibold mb-2 line-clamp-1">
                        {project?.title}
                      </div>
                      <p className="text-[#17DB4F] line-clamp-1">
                        {project?.url}
                      </p>
                    </div>
                    <div className=" border-[#17DB4F] relative  group border-2 w-[2.5rem] h-[2.5rem] rounded-full text-[1.3rem] text-[#17DB4F] ">
                      <div className=" absolute w-full h-full left-0 top-0 flex items-center justify-center group-hover:ml-2 transition-all duration-300 ease-linear ">
                        <IoIosArrowForward className="   " />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        ) : (
          // <p>Laster inn prosjekter...</p>
          <div className=" py-10 relative ">
            <FetchDataLoading />
          </div>
        )}
      </div>
      <div className=" mt-3 flex justify-end pr-5 ">
        <Link
          href={`/alle-prosjekter`}
          className="px-5 py-1 group text-lg md:text-xl flex items-center gap-2 md:py-2 transition-colors duration-300 ease-in-out rounded-full text-[#17DB4F]"
        >
          <span className="flex-shrink-0">Se alle prosjekter</span>
          <MdArrowForwardIos className=" mt-[2px] transition-transform duration-300 ease-linear transform group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
};

export default BlogPageProjects;

export const AllProjectCard = ({ project }) => {
  return (
    <div className="group max-w-[450px] w-full mx-auto ">
      <Link
        href={`/prosjekter/${project?._id}`}
        className="bg-white shadow-md  overflow-x-hidden transition-all duration-300 ease-in-out rounded-md"
      >
        <div className=" w-full  relative h-[15rem] rounded-md">
          <Image
            src={project?.ProjectImg || AImg}
            alt={project?.title}
            priority
            fill
            className="w-full h-full object-contain object-top rounded-md"
          />
        </div>
        <div className="p-4 flex items-center justify-between ">
          <div>
            <div className="text-xl font-semibold mb-2 line-clamp-1">
              {project?.title}
            </div>
            <p className="text-[#17DB4F] line-clamp-1">{project?.url}</p>
          </div>
          <div className=" border-[#17DB4F] border-2 p-2 rounded-full text-[1.3rem] text-[#17DB4F] ">
            <IoIosArrowForward />
          </div>
        </div>
      </Link>
    </div>
  );
};
