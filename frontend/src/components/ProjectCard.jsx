"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { uploadFile } from "@/AuthProvider/imageUpload";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
const ProjectCard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [load, setLoad] = useState(false);
  const [projects, setProject] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-project`
    );
    setProject(data.data);
  };

  useEffect(() => {
    fetchData();
  }, [load]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/delete-project/${id}`
      );
      fetchData();
      setOpenModal(false);
    } catch (error) {
      toast.error(error);
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
                <Image
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </figure>
              <div>
                <ProjectModal id={item._id} setLoad={setLoad} />
                <button
                  onClick={() => {
                    setDeleteId(item._id);
                    setOpenModal(true);
                  }}
                  className="bg-slate-100 shadow-xl text-[#000] transition-all duration-300 ease-in-out active:scale-95 rounded-md top-5 right-5 p-2 absolute"
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

export const ProjectModal = ({ id, setLoad }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filePreview, setFilePreview] = useState(null);
  const [file, setFile] = useState(null);
  console.log(file);
  const [errors, setErrors] = useState({});
  const [projectData, setProjectData] = useState({
    title: "",
    url: "",
    image: "",
  });

  useEffect(() => {
    const fetchProjectDetails = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/single-project/${id}`
          );
          const project = response.data.data;
          setProjectData({
            title: project.title,
            url: project.url,
            image: project.image,
          });
          setFilePreview({ url: project.image });
        } catch (error) {
          toast.error(error);
        }
      }
    };
    if (openModal) {
      fetchProjectDetails();
    }
  }, [openModal, id]);

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    const maxSize = 2 * 1024 * 1024; // 2MB limit

    if (selectedFile) {
      if (selectedFile.size <= maxSize) {
        setFilePreview({
          name: selectedFile.name,
          url: URL.createObjectURL(selectedFile),
        });
        setFile(selectedFile);
        setErrors((prev) => ({ ...prev, file: null }));
      } else {
        setErrors((prev) => ({
          ...prev,
          file: "File size must be less than 2 MB.",
        }));
        setFilePreview(null);
        setFile(null);
      }
    }
  };

  const handleClearFile = () => {
    setFilePreview(null);
    setFile(null);
    setErrors((prev) => ({ ...prev, file: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value.trim();
    const url = form.url.value.trim();

    const newErrors = {};

    if (!title) newErrors.title = "Title is required.";
    if (!url) newErrors.url = "Project Live URL is required.";
    if (!file && !projectData.image)
      newErrors.file = "Cover Image is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const uploadedImageURL = file
        ? await uploadFile(file)
        : projectData.image;
      console.log("Upload File", uploadedImageURL);
      const formData = {
        title,
        url,
        image: uploadedImageURL,
      };
      console.log(formData);
      setIsLoading(true);

      const { data } = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/update-project/${id}`,
        formData
      );
      console.log(data);
      if (data.success) {
        setIsLoading(false);
        setLoad(true);
        toast.success(data.message);
        setOpenModal(false);
      } else {
        setIsLoading(false);
        setErrors({ general: "Error updating project." });
      }
    } catch (error) {
      setIsLoading(false);
      toast.success(error);

      setErrors((prev) => ({ ...prev, file: "Image upload failed." }));
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-slate-100 shadow-xl text-[#000000] transition-all duration-300 ease-in-out active:scale-95 rounded-md top-5 right-20 p-2 absolute"
      >
        <CiEdit className="text-[1.5rem]" />
      </button>

      {openModal && (
        <div
          onClick={() => setOpenModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:w-[500px] rounded-lg bg-white p-12 shadow-lg"
          >
            <div
              onClick={() => setOpenModal(false)}
              className="flex justify-end text-[1.8rem] cursor-pointer"
            >
              <RxCross2 />
            </div>
            <div className="my-5">
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-10">
                  <div className="flex flex-col">
                    <label htmlFor="title" className="text-xl mb-1">
                      Title{" "}
                      <small className="text-red-500 text-sm">(Required)</small>
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={projectData.title}
                      onChange={(e) =>
                        setProjectData({
                          ...projectData,
                          title: e.target.value,
                        })
                      }
                      className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 px-4 mt-1"
                      required
                    />
                    {errors.title && (
                      <span className="text-red-500 text-sm">
                        {errors.title}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="url" className="text-xl mb-1">
                      Project Live URL{" "}
                      <small className="text-red-500 text-sm">(Required)</small>
                    </label>
                    <input
                      type="url"
                      id="url"
                      name="url"
                      value={projectData.url}
                      onChange={(e) =>
                        setProjectData({ ...projectData, url: e.target.value })
                      }
                      className="rounded-full px-4 bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 mt-1"
                      required
                    />
                    {errors.url && (
                      <span className="text-red-500 text-sm">{errors.url}</span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Cover Image</h3>
                    <div className="border border-dashed border-[#7BDCB5] rounded-lg p-4 flex flex-col items-center gap-3">
                      {filePreview ? (
                        <div>
                          <div className="flex justify-end">
                            <button type="button" onClick={handleClearFile}>
                              <RxCross2 className="text-2xl" />
                            </button>
                          </div>
                          <div className="relative rounded-lg p-2">
                            <Image
                              loading="lazy"
                              src={filePreview.url}
                              alt="image"
                              width={100}
                              height={100}
                              className="w-full h-32 object-cover rounded-md"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-5 items-center justify-center">
                          <div className="text-center text-gray-500">
                            Drag and drop files here, or
                          </div>
                          <button
                            type="button"
                            className="bg-[#035635] transition-all duration-300 ease-in-out active:scale-95 text-white py-2 px-4 rounded-full"
                            onClick={() =>
                              document.getElementById("file-input").click()
                            }
                          >
                            Choose Files
                          </button>
                          <input
                            id="file-input"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileUpload}
                          />
                        </div>
                      )}
                    </div>
                    {errors.file && (
                      <span className="text-red-500 text-sm">
                        {errors.file}
                      </span>
                    )}
                    <p className="text-sm text-gray-500 mt-2">
                      Max. file size: 2 MB.
                    </p>
                  </div>

                  {errors.general && (
                    <div className="text-red-500 text-sm">{errors.general}</div>
                  )}

                  <div className="flex items-center gap-5">
                    <button
                      type="submit"
                      className="bg-[#035635] px-10 py-2 transition-all duration-300 ease-in-out active:scale-95 text-xl font-medium rounded-full text-white"
                    >
                      Submit
                    </button>
                    <div>
                      {isLoading && (
                        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-green-400 border-t-green-700"></div>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
