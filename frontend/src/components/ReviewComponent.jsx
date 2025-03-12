"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineStarPurple500,
} from "react-icons/md";

const ReviewComponent = ({ reviews }) => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="  custom-next-arrow absolute z-[100] -bottom-[3rem] right-5 transform -translate-y-1/2"
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowRight className="text-[#035635] bg-slate-50 rounded-full shadow-[0px_0px_5px_0px_#035635] text-[2.5rem] p-2 border-2 border-[#035635] cursor-pointer " />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className=" custom-next-arrow absolute z-[100] -bottom-[3rem] left-5 transform -translate-y-1/2"
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowLeft className="text-[#035635] bg-slate-50 rounded-full shadow-[0px_0px_5px_0px_#035635] text-[2.5rem] p-2 border-2 border-[#035635] cursor-pointer  " />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: true,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <div className=" max-w-[1400px] mx-auto mt-8 ">
      <div className="overflow-x-hidden overflow-hidden h-auto py-10 ">
        {reviews.length > 0 ? (
          <Slider {...settings} className=" py-5 ">
            {reviews.map((review, idx) => (
              <div key={idx} className="  ">
                <ReviewCard review={review} />
              </div>
            ))}
          </Slider>
        ) : (
          <p>Loading reviews...</p>
        )}
      </div>
    </div>
  );
};

export default ReviewComponent;

import ReviewIcon from "@/assets/ReviewIcon.png";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { IoIosStarOutline } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const ReviewCard = ({ review }) => {
  const fullStars = Math.floor(review?.rating);
  const hasHalfStar = review?.rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className=" rounded-md my-5 shadow-[0px_1px_10px_rgba(0,0,0,0.15)] pt-20 max-w-[22rem] mx-auto ">
      <div className=" relative bg-[#035635] rounded-t-2xl rounded-b-md px-3 pb-3 pt-[2rem] text-[#fff] ">
        <div className=" absolute -top-[1.5rem] left-0 flex justify-center w-full ">
          <div className=" w-[3rem] h-[3rem] mx-auto relative rounded-full border-4 border-[#fff] ">
            <Image
              src={review?.image || ReviewIcon}
              alt="Reviewer Img"
              fill
              className=" w-full h-full object-cover rounded-full "
            />
          </div>
        </div>

        <div className=" flex flex-col items-center text-[1.3rem] ">
          <h4>{review?.name}</h4>
          <div className="flex items-center gap-1 text-yellow-300">
            {[...Array(fullStars)].map((_, index) => (
              <MdOutlineStarPurple500 key={index} />
            ))}

            {hasHalfStar && <FaRegStarHalfStroke />}

            {[...Array(emptyStars)].map((_, index) => (
              <IoIosStarOutline key={index + fullStars + 1} className="" />
            ))}
          </div>
        </div>
        <div>
          <div className=" mt-2 ">
            <BiSolidQuoteAltLeft className=" text-[1.2rem] " />
          </div>
          <div className=" px-2 py-1 text-lg text-center min-h-[8rem] flex items-center justify-center ">
            <p className=" line-clamp-4 ">{review?.message}</p>
          </div>
          <div className=" flex justify-end ">
            <BiSolidQuoteAltRight className=" text-[1.2rem] " />
          </div>
        </div>
      </div>
    </div>
  );
};
