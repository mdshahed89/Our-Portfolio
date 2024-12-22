"use client";
import axios from "axios";
import Image from "next/image";
import Swal from "sweetalert2";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaDatabase, FaUserFriends } from "react-icons/fa";
import parse from "html-react-parser";
import { MdDelete } from "react-icons/md";
const Page = () => {
  function formatDate(isoDate) {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  function getParagraphContent(htmlContent) {
    const matches = htmlContent?.match(/<p>(.*?)<\/p>/gs);
    return matches ? matches.map((match) => match.replace(/<[^>]+>/g, "")) : [];
  }

  function sliceContent(content, maxLength) {
    const textContent = parse(content);
    return textContent.length > maxLength
      ? textContent.slice(0, maxLength) + "..."
      : textContent;
  }

  const [referencesData, setReferencesData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-blog`
    );
    setReferencesData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        confirmButton: "custom-swal-confirm-button",
        cancelButton: "custom-swal-cancel-button",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/delete-blog/${id}`
        );
        fetchData();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          customClass: {
            popup: "custom-swal-popup",
            title: "custom-swal-title",
          },
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="m-5">
      <div className="h-[50px] flex justify-between items-center px-5 text-white bg-[#035635]">
        <div className="items-center flex gap-2">
          <FaUserFriends size={20} />
          <h2 className="text-[15px] font-bold">All Blogs</h2>
        </div>
        <div>
          <Link
            href={"/adminpanel/createblog"}
            className="px-10 py-2 rounded-md font-medium transition-all duration-300 ease-in-out active:scale-95 bg-green-700 text-white"
          >
            Create Blogs
          </Link>
        </div>
      </div>

      <div>
        <div className="my-5">
          {/* Check if there's any data to display */}
          {referencesData.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[400px]  rounded-xl">
              <FaDatabase size={50} className="text-gray-400 mb-4" />
              <p className="text-2xl font-bold text-gray-600">
                No Data Available
              </p>
              <p className="text-gray-500 mt-2">
                It seems like there are no blogs to display right now.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
              {referencesData.map((reference) => (
                <div key={reference._id} className="bg-white overflow-hidden">
                  <div>
                    <div className="relative">
                      <figure
                        style={{
                          height: "230px",
                          width: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          loading="lazy"
                          placeholder="blur"
                          src={`${reference?.coverImage}`}
                          alt={`${reference?.title}` || "Blog Image"}
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
                          width={400}
                          height={230}
                          className="object-cover h-full w-full"
                        />
                      </figure>
                      <button
                        onClick={() => {
                          handleDelete(reference._id);
                        }}
                        className="bg-white text-[#035635] transition-all duration-300 ease-in-out active:scale-95 rounded-xl top-5 right-5 p-2 absolute"
                      >
                        <MdDelete size={25} />
                      </button>
                    </div>
                  </div>
                  <div className="px-3 py-3 space-y-3">
                    <h2 className="text-2xl font-semibold">
                      {reference?.title || "Untitled Blog"}
                    </h2>
                    <h2 className="text-sm font-medium text-gray-600">
                      {formatDate(reference?.createdAt)}
                    </h2>
                    <div className="line-clamp-3 py-2 text-[20px] text-gray-600">
                      {sliceContent(
                        getParagraphContent(reference?.content).join(" ")
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
