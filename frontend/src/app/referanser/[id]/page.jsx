"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const DetailsPage = () => {
  function formatDate(isoDate) {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  const { id } = useParams();
  const router = useRouter();

  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog details
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-details/${id}`
        );
        setBlog(response.data.data);
      } catch (error) {
        console.error("Error fetching the blog details:", error.message);
      }
    };

    // Fetch all blogs
    const fetchAllBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get-blog`);
        setAllBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching all blogs:", error.message);
      }
    };

    fetchBlogDetails();
    fetchAllBlogs();
  }, [id]);

  if (!blog || allBlogs.length === 0) {
    return <div>Loading...</div>;
  }

  const currentIndex = allBlogs.findIndex((b) => b._id === id);

  const previousBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  const nextBlog =
    currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

  return (
    <div className="mt-40 mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
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

      {/* Navigation Buttons */}
      <hr />
      <div className="flex justify-between my-8 ">
        {previousBlog && (
          <Link
            href={`/referanser/${previousBlog._id}`}
            className=" text-gray-600  hover:text-[#129e66] transition-all ease-out delay-100 "
          >
            <h2 className="flex uppercase font-medium text-sm items-center gap-3">
              <FaLongArrowAltLeft />
              Previous
            </h2>
            {previousBlog.title}
          </Link>
        )}
        {nextBlog && (
          <Link
            href={`/referanser/${nextBlog._id}`}
            className="text-gray-600 ml-auto hover:text-[#129e66] transition-all ease-out delay-100"
          >
            <h2 className="flex uppercase font-medium text-sm items-center gap-3">
              Next
              <FaLongArrowAltRight />
            </h2>
            {nextBlog.title}
          </Link>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
