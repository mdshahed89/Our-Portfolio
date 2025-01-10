"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";

const ProjectCard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [projects, setProject] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-project`
    );
    setProject(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/delete-project/${id}`
      );
      fetchData();
      setOpenModal(false);
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <div>
      {projects.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-5">
          {projects.map((item, index) => (
            <div
              key={index}
              className="group relative mx-2 shadow-lg   hover:shadow-lg  flex flex-col items-center justify-center 
                 overflow-hidden rounded-xl bg-white 
                 transition-transform duration-500 ease-in-out"
            >
              <figure className="h-[300px] w-[400px] overflow-hidden">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </figure>
              <div>
                <button
                  onClick={() => {
                    setDeleteId(item._id);
                    setOpenModal(true);
                  }}
                  className="bg-slate-200 shadow-xl text-[#035635] transition-all duration-300 ease-in-out active:scale-95 rounded-xl top-5 right-5 p-2 absolute"
                >
                  <MdDelete size={25} />
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
                      <h5 className="text-lg font-medium py-4 text-gray-800">
                        Er du sikker? Vil du slette den?
                      </h5>
                      <div className="mt-4 flex justify-center gap-4">
                        <button
                          onClick={() => handleDelete(deleteId)}
                          className="rounded-md w-40 bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                        >
                          Ja, Slett
                        </button>
                        <button
                          onClick={() => setOpenModal(false)}
                          className="rounded-md w-40 border border-gray-400 px-4 py-2 text-gray-600 hover:bg-gray-200"
                        >
                          Kansellere
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

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
      ) : (
        <div className="flex flex-col items-center justify-center h-[400px]  rounded-xl">
          <FaDatabase size={50} className="text-gray-400 mb-4" />
          <p className="text-2xl font-bold text-gray-600">
            Ingen data tilgjengelig
          </p>
          <p className="text-gray-500 text-center mt-2">
            Det virker som det ikke er noen prosjekter å vise akkurat nå.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
