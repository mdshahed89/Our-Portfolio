"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import GoogleLogo from "@/assets/GoogleLogo.png"
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
        className="  custom-next-arrow absolute z-[100] top-1/2 right-5 transform -translate-y-1/2"
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowRight className="text-[#fff] bg-black/50 rounded-full text-[2.5rem] p-2 cursor-pointer " />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className=" custom-next-arrow absolute z-[100] top-1/2 left-5 transform -translate-y-1/2"
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowLeft className="text-[#fff] bg-black/50 rounded-full text-[2.5rem] p-2 cursor-pointer " />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: true,
    // nextArrow: <SamplePrevArrow />,
    // prevArrow: <SampleNextArrow />,
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
          slidesToShow: 1,
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
    <div className=" max-w-[1400px] mx-auto pl-2 mt-5 flex items-center lg:flex-row flex-col ">
      <div className=" w-full lg:w-[25%] text-[1.3rem] lg:mt-0 mt-[3rem] ">
        <div className=" flex items-center  gap-2 ">
        <p>5.0</p>
        <div className=" flex items-center gap-2 text-yellow-400 ">
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
        </div>
        </div>
        <div className=" whitespace-nowrap flex items-center gap-2 "><p>Powered by</p> <Image src={GoogleLogo} alt="Google Logo" className=" mt-1 h-[2rem] w-[4rem] object-cover " /></div>
      </div>
      <div className=" w-full lg:w-[75%] overflow-x-hidden overflow-hidden h-auto lgpy-10 ">
        {Array.isArray(reviews) && reviews.length > 0 ? (
          <Slider {...settings} className=" py-5 grid grid-cols-3 ">
            {reviews.map((review, idx) => (
              <div key={idx} className="  h-full ">
                <ReviewCard review={review} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className=" relative h-[20rem] ">
            <FetchDataLoading />
          </div>
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
import { FcGoogle } from "react-icons/fc";
import { FetchDataLoading, FetchLoading } from "./Loading";


const ReviewCard = ({ review }) => {
  const fullStars = Math.floor(review?.rating);
  const hasHalfStar = review?.rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="h-full min-h-[22rem] flex flex-col justify-between rounded-xl my-5 shadow-[0px_1px_10px_rgba(0,0,0,0.15)] max-w-[22rem] mx-auto relative">
      {/* Badge */}
      <div className="absolute top-0 right-0 bg-[#035635] text-[#fff] pl-6 pb-6 pt-4 pr-4 text-[1.3rem] rounded-tr-xl rounded-bl-full">
        <FcGoogle />
      </div>

      {/* Review Header (Image and Name) */}
      <div className="px-3 pb-3 pt-[2rem] text-[#000] flex gap-2 w-full">
        <div className="w-[3rem] h-[3rem] relative rounded-full">
          <Image
            src={review?.image || ReviewIcon}
            alt="Reviewer Img"
            fill
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h4>{review?.name}</h4>
          <h4>5 Months Ago</h4>
        </div>
      </div>

      {/* Rating */}
      <div className="px-3 mt-3 text-[1.3rem] flex items-center gap-1 text-yellow-400">
        {[...Array(fullStars)].map((_, index) => (
          <MdOutlineStarPurple500 key={index} />
        ))}
        {hasHalfStar && <FaRegStarHalfStroke />}
        {[...Array(emptyStars)].map((_, index) => (
          <IoIosStarOutline key={index + fullStars + 1} />
        ))}
      </div>

      {/* Review Message */}
      <div className="px-3 py-2 text-lg flex-grow min-h-[8rem]">
        <div className="h-full flex items-center">
          <p>{review?.message}</p>
        </div>
      </div>
    </div>
  );
};





// const ReviewCard = ({ review }) => {
//   const fullStars = Math.floor(review?.rating);
//   const hasHalfStar = review?.rating % 1 !== 0;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//   return (
//     <div className=" rounded-md my-5 shadow-[0px_1px_10px_rgba(0,0,0,0.15)] pt-20 max-w-[22rem] mx-auto ">
//       <div className=" relative bg-[#035635] rounded-t-2xl rounded-b-md px-3 pb-3 pt-[2rem] text-[#fff] ">
//         <div className=" absolute -top-[1.5rem] left-0 flex justify-center w-full ">
//           <div className=" w-[3rem] h-[3rem] mx-auto relative rounded-full border-4 border-[#fff] ">
//             <Image
//               src={review?.image || ReviewIcon}
//               alt="Reviewer Img"
//               fill
//               className=" w-full h-full object-cover rounded-full "
//             />
//           </div>
//         </div>

//         <div className=" flex flex-col items-center text-[1.3rem] ">
//           <h4>{review?.name}</h4>
//           <div className="flex items-center gap-1 text-yellow-300">
//             {[...Array(fullStars)].map((_, index) => (
//               <MdOutlineStarPurple500 key={index} />
//             ))}

//             {hasHalfStar && <FaRegStarHalfStroke />}

//             {[...Array(emptyStars)].map((_, index) => (
//               <IoIosStarOutline key={index + fullStars + 1} className="" />
//             ))}
//           </div>
//         </div>
//         <div>
//           <div className=" mt-2 ">
//             <BiSolidQuoteAltLeft className=" text-[1.2rem] " />
//           </div>
//           <div className=" px-2 py-1 text-lg text-center min-h-[8rem] flex items-center justify-center ">
//             <p className=" line-clamp-4 ">{review?.message}</p>
//           </div>
//           <div className=" flex justify-end ">
//             <BiSolidQuoteAltRight className=" text-[1.2rem] " />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };