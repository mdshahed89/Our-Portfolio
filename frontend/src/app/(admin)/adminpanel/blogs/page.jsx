"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaDatabase, FaEdit, FaUserFriends } from "react-icons/fa";
import parse from "html-react-parser";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
const Page = () => {
  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

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
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/delete-blog/${id}`
      );
      fetchData();
      setOpenModal(false);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="m-2 md:m-5">
      <div className="h-[50px] flex justify-between items-center px-5 text-white bg-[#035635]">
        <div className="items-center flex gap-2">
          <FaUserFriends size={20} />
          <h2 className="text-[15px] font-medium">Alle Blogg</h2>
        </div>
        <div>
          <Link
            href={"/adminpanel/createblog"}
            className="px-2 md:px-10 py-2 rounded-md font-medium transition-all duration-300 ease-in-out active:scale-95 bg-white text-green-700"
          >
            skape Blogg
          </Link>
        </div>
      </div>

      <div>
        <div className="my-5">
          {referencesData.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[400px]  rounded-xl">
              <FaDatabase size={50} className="text-gray-400 mb-4" />
              <p className="text-2xl font-bold text-gray-600">
                Ingen data tilgjengelig
              </p>
              <p className="text-gray-500 text-center mt-2">
                Det virker som det ikke er noen prosjekter å vise akkurat nå.
              </p>
            </div>
          ) : (
            <div className="grid  lg:grid-cols-3 gap-2 lg:gap-4">
              {referencesData.map((reference) => (
                <div
                  key={reference._id}
                  className="bg-[#F5F5F7] overflow-hidden"
                >
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
                          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
                          width={400}
                          height={230}
                          className="object-cover h-full w-full "
                        />
                      </figure>
                      <div>
                        <Link
                          href={`/adminpanel/blogs/${reference._id}`}
                          className="bg-slate-100 shadow-xl text-black transition-all duration-300 ease-in-out active:scale-95 rounded-md top-5 right-20 p-2 absolute"
                        >
                          <CiEdit className="text-[1.5rem]" />
                        </Link>

                        <button
                          onClick={() => {
                            setDeleteId(reference._id);
                            setOpenModal(true);
                          }}
                          className="bg-slate-100 shadow-xl text-black transition-all duration-300 ease-in-out active:scale-95 rounded-md top-5 right-5 p-2 absolute"
                        >
                          <MdDelete className="text-[1.5rem]" />
                        </button>

                        {openModal && (
                          <div
                            onClick={() => setOpenModal(false)}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                          >
                            <div
                              onClick={(e) => e.stopPropagation()}
                              className="w-80 md:w-96 rounded-lg  bg-white p-12 text-center shadow-lg"
                            >
                              <h6 className="text-lg font-medium py-4 text-gray-800">
                                Er du sikker? Vil du slette den?
                              </h6>
                              <div className="mt-4 flex justify-center gap-4">
                                <button
                                  onClick={() => handleDelete(deleteId)}
                                  className="rounded-md bg-red-600 w-40 px-4 py-2 text-white hover:bg-red-700"
                                >
                                  Ja, Slett
                                </button>
                                <button
                                  onClick={() => setOpenModal(false)}
                                  className="rounded-md border border-gray-400 w-40 px-4 py-2 text-gray-600 hover:bg-gray-200"
                                >
                                  Kansellere
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
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
