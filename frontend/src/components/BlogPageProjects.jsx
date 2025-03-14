"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import AImg from "@/assets/A.jpg"

const BlogPageProjects = ({ projects }) => {
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
    // nextArrow: <SamplePrevArrow />,
    // prevArrow: <SampleNextArrow />,
    draggable: true,
    swipe: true,
    // touchMove: true,
    // variableWidth: true,
    // centerMode: false,
    responsive: [
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
    <div className="overflow-x-hidden overflow-hidden h-auto">
      {projects.length > 0 ? (
        <Slider {...settings} className="  ">
          {projects.map((project, index) => (
            <div key={index} className="px-2 group">
              <Link
                href={`/prosjekter/${project?._id}` || "#"}
                className="bg-white rounded-lg shadow-md  overflow-x-hidden transition-all duration-300 ease-in-out"
              >
                <div className="w-full relative h-[15rem]">
                  <Image
                    src={project?.coverImg || AImg}
                    alt={project?.title}
                    priority
                    fill
                    className="w-full h-full object-cover rounded-t-md"
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
                  <div className=" border-[#17DB4F] border-2 p-2 rounded-full text-[1.3rem] text-[#17DB4F] ">
                  <IoIosArrowForward />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading projects...</p>
      )}
    </div>
  );
};

export default BlogPageProjects;
