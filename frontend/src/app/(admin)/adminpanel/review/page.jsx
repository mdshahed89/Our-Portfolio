"use server";

import { AddReviewModal, ReviewDeleteModal } from "@/modals/Modal";
import Image from "next/image";
import React from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { MdOutlineStarPurple500, MdRateReview } from "react-icons/md";

const fetchReviews = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/get-all-review`,
      // { cache: "no-store" }
    );

    if (!response.ok) {
      console.log("Failed to get reviews");
      return [];
    }

    const data = await response.json();
    return data?.reviews || [];
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
};

const page = async () => {
  // let reviews = [];
  // try {
  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/get-all-review`,
  //     { cache: "no-store" }
  //   );

  //   if (!response.ok) {
  //     console.log("Faield to get projects");
  //     return;
  //   }

  //   const data = await response.json();
  //   reviews = data?.reviews || [];
  // } catch (error) {
  //   console.error("Error fetching projects:", error);
  // }

  const reviews = await fetchReviews();

  return (
    <div className=" p-2 md:p-5">
      <div className="h-[50px] flex justify-between items-center  px-2 md:px-5 rounded-md text-white  bg-[#035635]">
        <div className="items-center flex gap-2 text-[1.3rem] ">
          <MdRateReview />
          <h3 className=" font-medium">Reviews</h3>
        </div>
        <div>
          <div className="">
            <AddReviewModal />
          </div>
        </div>
      </div>

      <div>
        {reviews?.length > 0 ? (
          <div className=" flex flex-wrap gap-4  ">
            {reviews.map((review, idx) => (
              <div key={idx} className=" ">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        ) : (
          <p>there does not any review</p>
        )}
      </div>
    </div>
  );
};

export default page;

import ReviewIcon from "@/assets/ReviewIcon.png";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";

const ReviewCard = ({ review, fetchReviews }) => {
  const fullStars = Math.floor(review?.rating);
  const hasHalfStar = review?.rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className=" rounded-md my-5 shadow-[0px_1px_10px_rgba(0,0,0,0.15)] pt-20 max-w-[22rem] min-w-[20rem] w-full relative ">
      {/* <div className=" absolute top-4 right-4 text-[1.3rem] text-red-500 ">
      <IoTrashBin />
      </div> */}
      <ReviewDeleteModal id={review?._id} />
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
          <h4>{review?.name || "N/A"}</h4>
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
            <p className="  line-clamp-4 ">{review?.message}</p>
          </div>
          <div className=" flex justify-end ">
            <BiSolidQuoteAltRight className=" text-[1.2rem] " />
          </div>
        </div>
      </div>
    </div>
  );
};
