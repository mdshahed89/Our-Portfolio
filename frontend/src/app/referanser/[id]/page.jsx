"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const DetailsPage = ({ params }) => {
  const { id } = React.use(params);

  const [blog, setBlog] = useState(null);
  // const [allBlogs, setAllBlogs] = useState([]);
  const [otherData, setOtherData] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-details/${id}`
        );
        
        setBlog(response.data?.data);
        setOtherData(response.data?.otherData);
      } catch (error) {
        console.log("Error fetching the blog details:", error?.message);
      }
    };

    // const fetchAllBlogs = async () => {
    //   try {
    //     const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get-blog`);
    //     setAllBlogs(response.data?.data);
    //   } catch (error) {
    //     console.error("Error fetching all blogs:", error?.message);
    //   }
    // };

    fetchBlogDetails();
    // fetchAllBlogs();
  }, [id]);

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // const currentIndex = allBlogs.findIndex((b) => b._id === id);

  // const previousBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  // const nextBlog =
  //   currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

  console.log(otherData);

  return (
    <div className="mt-40 mx-auto p-4">
      <div className="text-3xl font-bold mb-4">{blog.title}</div>
      <div className="flex text-blue-600 items-center mb-6">
        <span className="text-sm font-bold">{formatDate(blog?.createdAt)}</span>
      </div>
      <div className=" pb-5">
        <Image
          src={`${blog?.coverImage}`}
          alt={blog.title}
          width={500}
          height={500}
          className="w-full h-[400px] object-cover rounded-md mb-4"
        />
        <div
          className="content pt-5"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>

      <div className="flex justify-between my-8 border-t pt-5 ">
        {otherData?.previousBlogId && (
          <Link
            href={`/referanser/${otherData?.previousBlogId}`}
            className=" text-gray-600  hover:text-[#129e66] transition-all ease-out delay-100 "
          >
            <div className="flex uppercase font-medium text-sm items-center gap-3">
              <FaLongArrowAltLeft />
              Tidligere
            </div>
            {otherData?.previousBlogTitle}
          </Link>
        )}
        {otherData?.nextBlogId && (
          <Link
            href={`/referanser/${otherData?.nextBlogId}`}
            className="text-gray-600 ml-auto hover:text-[#129e66] transition-all ease-out delay-100 flex items-end flex-col"
          >
            <div className="flex uppercase font-medium text-sm items-center gap-3">
            Neste
              <FaLongArrowAltRight />
            </div>
            {otherData?.nextBlogTitle}
          </Link>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
