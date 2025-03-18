"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiUser } from "react-icons/ci";
import { FaUser, FaUserFriends } from "react-icons/fa";
import { HiMiniNewspaper } from "react-icons/hi2";
import { IoTrashBin } from "react-icons/io5";
import { MdDelete, MdEmail } from "react-icons/md";

const Page = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const fetchNewsletters = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter/get-all-newsletter`
      );

      // console.log(response.data);

      if (response.data?.success) {
        setNewsletters(response.data?.newsletter || []);
      } else {
        console.log("Failed to fetch newsletter");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNewsletters();
  }, []);

  const handleDelete = async (id) => {

    if(!id){
      toast.error("To remove data required id")
      return;
    }

    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter/delete-newsletter/${id}`
      );

      if (response.data.success) {
        fetchNewsletters();
        setOpenModal(false);
      } else {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className=" p-2 md:p-5">
      <div className="h-[50px] flex justify-between items-center  px-2 md:px-5 text-white rounded-md bg-[#035635]">
        <div className="items-center flex gap-2 text-[13px] md:text-[1.3rem] ">
          <HiMiniNewspaper className="  " />
          <h3 className=" font-medium">Alle bestillinger</h3>
        </div>
      </div>

      {newsletters?.length > 0 ? (
        <div className=" flex gap-3 mt-6 ">
          {newsletters.map((newsletter, idx) => (
            <div key={idx} className="  ">
              <Card newsletter={newsletter} handleDelete={handleDelete} id={newsletter?._id} />
            </div>
          ))}
        </div>
      ) : (
        <p className=" mt-5 ml-5  ">No newsletter found</p>
      )}
    </div>
  );
};

export default Page;

const Card = ({ newsletter, handleDelete, id }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-white hover:shadow-[0_0_5px_1px_rgba(0,128,0,0.6)] shadow-[0_0_5px_1px_rgba(128,128,128,0.6)] pt-10 pb-3 rounded-md transition-all duration-300 px-6 relative ">
      <div className="flex flex-col mb-3">
        <div className="flex items-center text-gray-600">
          <FaUser className="text-green-500 text-lg mr-2" />
          <p className="text-lg font-medium">{newsletter?.name}</p>
        </div>
        <div className="flex items-center text-gray-600">
          <MdEmail className="text-green-500 text-lg mr-2" />
          <p className="text-lg font-medium">{newsletter?.email}</p>
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            setOpenModal(true);
          }}
          className=" text-red-500 transition-all duration-300 ease-in-out active:scale-95 rounded-md top-5 right-5 absolute"
        >
          <IoTrashBin />
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
                  onClick={() => setOpenModal(false)}
                  className="rounded-md w-40 border border-gray-400 px-4 py-2 text-gray-600 hover:bg-gray-200"
                >
                  Kansellere
                </button>
                <button
                  onClick={() => handleDelete(id)}
                  className="rounded-md w-40 bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Ja, Slett
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
