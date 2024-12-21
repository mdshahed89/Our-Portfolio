"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";

const DetailsPage = () => {
  function formatDate(isoDate) {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/get-details/${id}`
        );
        setBlog(response.data.data);
      } catch (error) {
        console.error("Error fetching the blog details:", error.message);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-40 mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
      <div className="flex text-blue-600 items-center mb-6">
        <span className="text-sm font-bold">{formatDate(blog?.createdAt)}</span>
      </div>
      <div className="">
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
    </div>
  );
};

export default DetailsPage;
