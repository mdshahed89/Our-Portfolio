"use client";

import axios from "axios";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProjectCard = () => {
  const [projects, setProject] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/get-project");
    setProject(data.data);
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
        await axios.delete(`http://localhost:5000/delete-project/${id}`);
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
    <div>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects?.map((item, index) => (
          <div
            key={index}
            className="group relative mx-2 z-10 hover:z-50  flex flex-col items-center justify-center 
                 overflow-hidden rounded-xl bg-white shadow-lg 
                 transition-transform duration-500 ease-in-out"
          >
            <figure className="h-[300px] w-[400px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-xl"
              />
            </figure>
            <button
              onClick={() => {
                handleDelete(item._id);
              }}
              className="bg-white text-[#035635] rounded-xl top-5 right-5 p-2 absolute"
            >
              <MdDelete size={25} />
            </button>

            <div
              className="absolute bottom-0 flex items-center justify-center w-full p-4 
                   text-lg font-medium text-white bg-[#035635] 
                   opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
