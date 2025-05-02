"use client";

import { AddReviewModal, ReviewDeleteModal, UpdateReviewModal } from "@/modals/Modal";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { MdOutlineStarPurple500, MdRateReview } from "react-icons/md";



const Page = () => {

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReviews = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/get-all-review`
      );

      if (!response.ok) {
        throw new Error("Failed to get reviews");
      }

      const data = await response.json();
      setReviews(data?.reviews || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {

    fetchReviews();
  }, []);

  return (
    <div className=" p-2 md:p-5">
      <div className="h-[50px] flex justify-between items-center  px-2 md:px-5 rounded-md text-white  bg-[#035635]">
        <div className="items-center flex gap-2 text-[1.3rem] ">
          <MdRateReview />
          <h3 className=" font-medium">Anmeldelser</h3>
        </div>
        <div>
          <div className="">
            <AddReviewModal fetchReviews={fetchReviews}  /> 
          </div>
        </div>
      </div>
      
      <div>
        {reviews?.length > 0 ? (
          <div className=" flex flex-wrap gap-4  ">
            {reviews.map((review, idx) => (
              <div key={idx} className="  ">
                <ReviewCard review={review} fetchReviews={fetchReviews}  /> 
              </div>
            ))}
          </div>
        ) : (
          <p>Det er ingen anmeldelser.</p>
        )}
      </div>
    </div>
  );
};

export default Page;

import ReviewIcon from "@/assets/ReviewIcon.png";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";


const ReviewCard = ({ review, fetchReviews }) => {
  const fullStars = Math.floor(review?.rating);
  const hasHalfStar = review?.rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className=" h-full min-h-[22rem] w-[30rem] flex flex-col justify-between rounded-xl my-5 shadow-[0px_1px_10px_rgba(0,0,0,0.15)] max-w-[22rem] mx-auto relative">
      {/* Badge */}
      <div className="absolute top-0 right-0 bg-[#035635] text-[#fff] pl-6 pb-6 pt-4 pr-4 text-[1.3rem] rounded-tr-xl rounded-bl-full">
        <FcGoogle />
      </div>
      <ReviewDeleteModal id={review?._id} fetchReviews={fetchReviews} />
      <UpdateReviewModal review={review} fetchReviews={fetchReviews} />

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
          <p>{review?.time}</p>
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
