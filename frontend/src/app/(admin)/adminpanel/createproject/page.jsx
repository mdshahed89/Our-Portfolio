"use client";
import { FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { uploadFile } from "@/AuthProvider/imageUpload";
import { useRouter, useSearchParams } from "next/navigation";
import { MdAssignmentAdd } from "react-icons/md";
import { ButtonLoading, FetchLoading } from "@/components/Loading";
import { IoArrowBackOutline, IoStarHalf, IoStarOutline } from "react-icons/io5";
import Link from "next/link";
import { SlCloudUpload } from "react-icons/sl";
import toast from "react-hot-toast";
const Page = () => {
  const navigate = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [filePreview, setFilePreview] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [projectData, setProjectData] = useState({
    title: "",
    projectUrl: "",
    coverImgUrl: "",
    projectImgUrl: "",
  });

  useEffect(()=> {
    if((!projectData.title || !projectData.projectUrl || !projectData.coverImgUrl || !projectData.projectImgUrl) && queryValue === "details"){
      navigate.push("/adminpanel/createproject")
    }
  }, [])

  const searchParams = useSearchParams();
  const queryValue = searchParams.get("query");

  // console.log(queryValue);

  const handleFileUpload = async (event) => {
    const selectedFile = event.target.files[0];
    const maxSize = 5 * 1024 * 1024;

    if (selectedFile) {
      if (selectedFile.size <= maxSize) {
        setErrors((prev) => ({ ...prev, file: null }));
        setLoading(true);

        try {
          const uploadedUrl = await uploadFile(selectedFile);
          if (uploadedUrl) {
            setProjectData({
              ...projectData,
              coverImgUrl: uploadedUrl,
            });
          } else {
            setErrors((prev) => ({
              ...prev,
              file: "Failed to upload file to Cloudinary.",
            }));
          }
        } catch (error) {
          console.error("Upload error:", error);
          setErrors((prev) => ({
            ...prev,
            file: "An error occurred while uploading the file.",
          }));
        } finally {
          setLoading(false);
        }
      } else {
        setErrors((prev) => ({
          ...prev,
          file: "File size must be less than 5 MB.",
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
    setImageUrl("");
    setProjectData({
      ...projectData,
      coverImgUrl: "",
    });
  };

  const handleProjectFileUpload = async (event) => {
    const selectedFile = event.target.files[0];
    const maxSize = 5 * 1024 * 1024;

    if (selectedFile) {
      if (selectedFile.size <= maxSize) {
        setErrors((prev) => ({ ...prev, projectFile: null }));
        setLoading2(true);

        try {
          const uploadedUrl = await uploadFile(selectedFile);
          if (uploadedUrl) {
            setProjectData({
              ...projectData,
              projectImgUrl: uploadedUrl,
            });
          } else {
            setErrors((prev) => ({
              ...prev,
              projectFile: "Failed to upload file to Cloudinary.",
            }));
          }
        } catch (error) {
          console.error("Upload error:", error);
          setErrors((prev) => ({
            ...prev,
            projectFile: "An error occurred while uploading the file.",
          }));
        } finally {
          setLoading2(false);
        }
      } else {
        setErrors((prev) => ({
          ...prev,
          projectFile: "File size must be less than 5 MB.",
        }));
        // setFile(null);
      }
    }
  };

  const handleClearProjectFile = () => {
    setErrors((prev) => ({ ...prev, projectFile: null }));
    setProjectData({
      ...projectData,
      projectImgUrl: "",
    });
  };

  return (
    <div className="m-2 md:m-5">
      <div className="h-[55px] rounded-md flex items-center justify-between  gap-2 px-5 text-white  bg-[#035635] text-[1.2rem] ">
        <div className=" flex items-center gap-2 ">
          <MdAssignmentAdd />
          <div className=" font-bold">Legg til prosjekter</div>
        </div>
        <Link
          href={`${
            queryValue === "details"
              ? "/adminpanel/createproject"
              : "/adminpanel/manageproject"
          }`}
          className=" text-[#fff] border-2 border-[#fff] rounded-full p-2 "
        >
          <IoArrowBackOutline />
        </Link>
      </div>

      <div className="my-5">
        {queryValue === "details" ? (
          <ProjectDetails
            projectData={projectData}
            setProjectData={setProjectData}
          />
        ) : (
          <div>
            <div className="space-y-3 pt-[2rem] max-w-[50rem] ">
              <div className="flex flex-col">
                <label htmlFor="title" className="text-lg mb-1">
                  Tittel{" "}
                  <small className="text-red-500 text-sm">(Påkrevd)</small>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={projectData.title}
                  onChange={(e) => {
                    setProjectData({
                      ...projectData,
                      title: e.target.value,
                    });
                  }}
                  className="rounded-full bg-transparent border-2 focus:border-[#17DB4F] transition-colors duration-300 ease-in-out outline-none p-2 px-4 mt-1"
                  required
                />
                {errors.title && (
                  <span className="text-red-500 text-sm">{errors.title}</span>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="url" className="text-lg mb-1">
                  Prosjekt URL{" "}
                  <small className="text-red-500 text-sm">(Påkrevd)</small>
                </label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  value={projectData.projectUrl}
                  onChange={(e) => {
                    setProjectData({
                      ...projectData,
                      projectUrl: e.target.value,
                    });
                  }}
                  className="rounded-full px-4 bg-transparent border-2 focus:border-[#17DB4F] transition-colors duration-300 ease-in-out outline-none p-2 mt-1"
                  required
                />
                {errors.url && (
                  <span className="text-red-500 text-sm">{errors.url}</span>
                )}
              </div>

              <div className=" flex gap-4 lg:flex-row flex-col ">
                <div className="w-full max-w-[25rem] ">
                  <h3 className="text-lg font-medium mb-2">
                    Forsidebilde for hjemmesiden
                  </h3>

                  <div className="flex h-[20rem] border-2 rounded-md border-[#17DB4F]">
                    {projectData?.coverImgUrl ? (
                      <div className=" relative w-full ">
                        <div className=" absolute flex justify-end z-50 bg-black/50 text-[#fff] p-2 right-3 top-3 rounded-full ">
                          <button type="button" onClick={handleClearFile}>
                            <RxCross2 className="text-2xl" />
                          </button>
                        </div>
                        <div className="relative w-full h-full rounded-lg p-2">
                          <Image
                            loading="lazy"
                            placeholder="blur"
                            src={projectData?.coverImgUrl}
                            alt={"Cover Img"}
                            fill
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGZkZjQiLz48L3N2Zz4="
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() =>
                          document.getElementById("CoverImgClick").click()
                        }
                        className=" relative w-full flex flex-col items-center justify-center gap-4 cursor-pointer "
                      >
                        {loading && <FetchLoading />}
                        <button
                          type="button"
                          className="text-black transition-all duration-300 ease-in-out active:scale-95 text-[2rem] py-1 px-8 rounded-full"
                        >
                          <SlCloudUpload />
                        </button>
                        <div className="text-center text-gray-500">
                          File Should be in PNG, JPEG or JPG format
                        </div>
                        <input
                          id="CoverImgClick"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileUpload}
                        />
                      </div>
                    )}
                  </div>

                  {errors.file && (
                    <span className="text-red-500 text-sm">{errors.file}</span>
                  )}
                  <p className="text-sm text-gray-500 mt-2">
                    Maks. filstørrelse: 5 MB.
                  </p>
                </div>

                <div className="w-full max-w-[25rem] ">
                  <h3 className="text-lg font-medium mb-2">
                    Forsidebilde for prosjektsiden
                  </h3>

                  <div className="flex h-[20rem] border-2 rounded-md border-[#17DB4F]">
                    {projectData?.projectImgUrl ? (
                      <div className=" relative w-full ">
                        <div className=" absolute flex justify-end z-50 bg-black/50 text-[#fff] p-2 right-3 top-3 rounded-full ">
                          <button
                            type="button"
                            onClick={handleClearProjectFile}
                          >
                            <RxCross2 className="text-2xl" />
                          </button>
                        </div>
                        <div className="relative w-full h-full rounded-lg p-2">
                          <Image
                            loading="lazy"
                            placeholder="blur"
                            src={projectData?.projectImgUrl}
                            alt={"Project Img"}
                            fill
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMGZkZjQiLz48L3N2Zz4="
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() =>
                          document.getElementById("ProjectImgClick").click()
                        }
                        className=" relative w-full flex flex-col items-center justify-center gap-4 cursor-pointer "
                      >
                        {loading2 && <FetchLoading />}
                        <button
                          type="button"
                          className="text-black transition-all duration-300 ease-in-out active:scale-95 text-[2rem] py-1 px-8 rounded-full"
                        >
                          <SlCloudUpload />
                        </button>
                        <div className="text-center text-gray-500">
                          File Should be in PNG, JPEG or JPG format
                        </div>
                        <input
                          id="ProjectImgClick"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleProjectFileUpload}
                        />
                      </div>
                    )}
                  </div>

                  {errors.file && (
                    <span className="text-red-500 text-sm">
                      {errors.projectFile}
                    </span>
                  )}
                  <p className="text-sm text-gray-500 mt-2">
                    Maks. filstørrelse: 5 MB.
                  </p>
                </div>
              </div>

              <div className="flex items-center pt-5 gap-5">
                {projectData.title &&
                projectData.projectUrl &&
                projectData.coverImgUrl &&
                projectData.projectImgUrl ? (
                  <Link
                    href={`/adminpanel/createproject?query=details`}
                    className="bg-[#17DB4F] relative w-[12rem] h-[2.5rem] flex items-center justify-center transition-all duration-300 ease-in-out active:scale-95 text-xl font-medium  rounded-full text-white"
                  >
                    Neste
                  </Link>
                ) : (
                  <div className="bg-[#17DB4F] opacity-70 cursor-default relative w-[12rem] h-[2.5rem] flex items-center justify-center transition-all duration-300 ease-in-out active:scale-95 text-xl font-medium  rounded-full text-white">
                    Neste
                  </div>
                )}
                <div>
                  {/* {isLoading && (
                  <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-green-400 border-t-green-700"></div>
                )} */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

import { FaExternalLinkAlt } from "react-icons/fa";
import Konsulenttorget from "@/assets/R2.png";

const ProjectDetails = ({ projectData, setProjectData }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    projectName: "",
    projectStart: "",
    projectEnd: "",
    type: "",
    status: "",
    briefAboutWebsite: "",
    detailedDescription: "",
    mainImgUrl: "",
    toolImgs: [],
    gellaryImgs: [],
    reviewerImgUrl: "",
    reviewMessage: "",
    rating: 0,
    skills: [],
  });
  const [filePreview, setFilePreview] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const allStatus = ["Online", "Offline", "Maintenance"];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFileUpload = async (event) => {
    const selectedFile = event.target.files[0];
    const maxSize = 5 * 1024 * 1024;

    if (selectedFile) {
      if (selectedFile.size <= maxSize) {
        setErrors((prev) => ({ ...prev, file: null }));
        setLoading(true);

        try {
          const uploadedUrl = await uploadFile(selectedFile);
          if (uploadedUrl) {
            // setImageUrl(imageUrl);
            setFormData({
              ...formData,
              mainImgUrl: uploadedUrl,
            });
          } else {
            setErrors((prev) => ({
              ...prev,
              file: "Failed to upload file to Cloudinary.",
            }));
          }
        } catch (error) {
          console.error("Upload error:", error);
          setErrors((prev) => ({
            ...prev,
            file: "An error occurred while uploading the file.",
          }));
        } finally {
          setLoading(false);
        }
      } else {
        setErrors((prev) => ({
          ...prev,
          file: "File size must be less than 5 MB.",
        }));
      }
    }
  };

  const handleClearFile = () => {
    setFilePreview(null);
    setFile(null);
    setErrors((prev) => ({ ...prev, file: null }));
    setImageUrl("");
    setFormData({
      ...formData,
      mainImgUrl: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectData || !formData) {
      toast.error("Vennligst fyll ut alle feltene.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/save-project`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, ...projectData }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Project added successfully");
        setFormData({
          projectName: "",
          projectStart: "",
          projectEnd: "",
          type: "",
          status: "",
          briefAboutWebsite: "",
          detailedDescription: "",
          mainImgUrl: "",
          toolImgs: [],
          gellaryImgs: [],
          reviewerImgUrl: "",
          reviewMessage: "",
          rating: 0,
          skills: [],
        });
        setProjectData({
          title: "",
          projectUrl: "",
          coverImgUrl: "",
        });
        router.push("/adminpanel/manageproject");
      } else {
        toast.error(data?.message || "Noe gikk galt.");
        console.log(data?.message);
      }
    } catch (err) {
      console.log("error", err);

      toast.error("Serverfeil, prøv igjen senere.");
    } finally {
      setLoading(false);
    }
  };

  // console.log(formData);

  return (
    <div className=" mt-[30px] py-5 ">
      <div className=" max-w-[1400px] px-3 mx-auto ">
        <Link
          href={
            /^https?:\/\//.test(projectData?.projectUrl)
              ? projectData?.projectUrl
              : `https://${projectData?.projectUrl}`
          }
          className=" flex items-center text-[1.4rem] gap-2 text-[#17DB4F] mb-5 "
        >
          <span>
            {projectData?.projectUrl.replace(/^(https?:\/\/)?(www\.)?/, "")}
          </span>
          <FaExternalLinkAlt />
        </Link>
        <div className=" flex items-center lg:flex-row flex-col gap-2  ">
          <div className=" flex-1 lg:order-1 order-2 ">
            {/* <h3 className=" text-[2rem] lg:mt-0 mt-3 md:text-[2.5rem] font-medium ">
              Nettside navn
            </h3> */}
            <div className=" font-medium my-[1rem] ">
              <div className=" flex flex-col gap-1 ">
                <span>Nettside navn</span>
                <input
                  type="text"
                  placeholder="Nettside navn"
                  value={formData.projectName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      projectName: e.target.value,
                    })
                  }
                  className=" w-full border outline-none  px-3 py-1 max-w-[20rem] rounded-md "
                />
              </div>
              <div className=" flex flex-col gap-1 mt-2 ">
                <span>Project Start</span>
                <input
                  type="date"
                  value={formData.projectStart}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      projectStart: e.target.value,
                    })
                  }
                  className=" w-full border outline-none  px-3 py-1 max-w-[20rem] rounded-md "
                />
              </div>
              <div className=" flex flex-col gap-1 mt-2 ">
                <span>Nettside Levert</span>
                <input
                  type="date"
                  value={formData.projectEnd}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      projectEnd: e.target.value,
                    })
                  }
                  className=" w-full border outline-none  px-3 py-1 max-w-[20rem] rounded-md "
                />
              </div>
              <div className=" flex flex-col gap-1 mt-2 ">
                <span>Type</span>
                <input
                  type="text"
                  placeholder="Nettside"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      type: e.target.value,
                    })
                  }
                  className=" w-full border outline-none  px-3 py-1 max-w-[20rem] rounded-md "
                />
              </div>
              <h5 className=" mt-2 ">
                Status{" "}
                <div className="relative max-w-[20rem] " ref={dropdownRef}>
                  <button
                    type="button"
                    className="w-full mt-1 p-2 border rounded mb-2 flex items-center justify-between"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {formData?.status || "Select Status"}{" "}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute w-full z-50 h-auto overflow-y-auto border rounded bg-white shadow-md">
                      {allStatus.map((status) => (
                        <div
                          key={status}
                          className="p-2 hover:bg-gray-200 cursor-pointer flex items-center"
                          onClick={() => {
                            setFormData({ ...formData, status: status });
                            setDropdownOpen(false);
                          }}
                        >
                          <div className=" flex items-center justify-between w-full ">
                            <p>{status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </h5>
            </div>
            <div>
              <p className=" text-[1.3rem] font-medium ">
                Kort om nettside/bedriften
              </p>
              <textarea
                rows={3}
                value={formData.briefAboutWebsite}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    briefAboutWebsite: e.target.value,
                  })
                }
                placeholder="Skriv en kort beskrivelse av nettsiden eller bedriften din..."
                className=" w-full mt-1 border outline-none  px-3 py-2 max-w-[40rem] rounded-md "
              />
            </div>
          </div>
          <div className="flex-1 lg:order-2 order-1 flex h-full min-h-[25rem] border-2 rounded-md border-[#17DB4F]">
            {formData?.mainImgUrl ? (
              <div className=" relative w-full ">
                <div className=" absolute flex justify-end z-50 bg-black/50 text-[#fff] p-2 right-3 top-3 rounded-full ">
                  <button type="button" onClick={handleClearFile}>
                    <RxCross2 className="text-2xl" />
                  </button>
                </div>
                <div className="relative w-full h-full rounded-lg p-2">
                  <Image
                    loading="lazy"
                    placeholder="blur"
                    src={formData?.mainImgUrl}
                    alt={"Main Img"}
                    fill
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ) : (
              <div
                onClick={() => document.getElementById("file-input1").click()}
                className=" relative w-full flex flex-col items-center justify-center gap-4 cursor-pointer "
              >
                {loading && <FetchLoading />}
                <button
                  type="button"
                  className="text-black transition-all duration-300 ease-in-out active:scale-95 text-[2rem] py-1 px-8 rounded-full"
                >
                  <SlCloudUpload />
                </button>
                <div className="text-center text-gray-500">
                  File Should be in PNG, JPEG or JPG format
                </div>
                <input
                  id="file-input1"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <SecondPart formData={formData} setFormData={setFormData} />
      <ThirdPart formData={formData} setFormData={setFormData} />
      <ForthPart formData={formData} setFormData={setFormData} />
      {/* <FifthPart /> */}
      <div className=" max-w-[1400px] mx-auto py-[1rem] ">
        <button
          onClick={handleSubmit}
          className=" bg-[#17DB4F] text-[#fff] w-[10rem] h-[2.7rem] rounded-md font-medium active:scale-95 transition-all duration-300 ease-in-out "
        >
          Legg til prosjekt
        </button>
      </div>
    </div>
  );
};

import FigmaIcon from "@/assets/Figma.png";
import { GiCheckMark } from "react-icons/gi";

const SecondPart = ({ formData, setFormData }) => {
  const [filePreviews, setFilePreviews] = useState([]);
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event) => {
    const selectedFiles = Array.from(event.target.files);
    const maxSize = 5 * 1024 * 1024;
    let validFiles = [];

    selectedFiles.forEach((file) => {
      if (file.size <= maxSize) {
        validFiles.push(file);
      } else {
        setErrors((prev) => ({
          ...prev,
          toolFile: "File size must be less than 5 MB.",
        }));
      }
    });
    if (validFiles.length > 0) {
      setErrors((prev) => ({ ...prev, file: null }));
      setLoading(true);
      try {
        const uploadedUrls = await Promise.all(validFiles.map(uploadFile));

        setFormData((prev) => ({
          ...prev,
          toolImgs: [...(prev.toolImgs || []), ...uploadedUrls],
        }));
      } catch (error) {
        console.error("Upload error:", error);
        setErrors((prev) => ({
          ...prev,
          toolFile: "An error occurred while uploading the files.",
        }));
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClearFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      toolImgs: prev.toolImgs.filter((_, i) => i !== index),
    }));
  };

  const inputRef = useRef(null);

  const handleAddSkill = () => {
    const skill = inputRef.current.value.trim();
    if (skill !== "" && !formData.skills.includes(skill)) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        skills: [...prevFormData.skills, skill],
      }));
      inputRef.current.value = "";
    }
  };

  const handleRemoveSkill = (index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      skills: prevFormData.skills.filter((_, i) => i !== index),
    }));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddSkill();
    }
  };


  return (
    <div className="my-8">
      <h3 className="text-center text-[1.5rem] bg-[#eeeeee] w-fit px-5 py-1 mx-auto rounded-t-2xl">
        Verktøy brukt
      </h3>
      <div className=" bg-[#eeeeee] pt-3 pb-5 ">
        <div
          onClick={() => document.getElementById("toolImgInput-click").click()}
          className=" relative w-full flex flex-col items-center justify-center gap-4 border-2 border-[#17DB4F] max-w-[20rem] mx-auto rounded-md cursor-pointer p-4"
        >
          {loading && <FetchLoading />}
          <button
            type="button"
            className="text-black transition-all duration-300 ease-in-out active:scale-95 text-[2rem] py-1 px-8 rounded-full"
          >
            <SlCloudUpload />
          </button>
          <input
            id="toolImgInput-click"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
        <div className=" flex flex-wrap gap-5 mt-3 justify-center">
          {Array.isArray(formData?.toolImgs) &&
            formData?.toolImgs.length > 0 &&
            formData?.toolImgs.map((toolImg, index) => (
              <div key={index} className="relative w-[4rem] h-[5rem]">
                <div className="absolute flex justify-end z-50 bg-black/50 text-[#fff] p-1 right-0 top-0 rounded-full">
                  <button type="button" onClick={() => handleClearFile(index)}>
                    <RxCross2 className="text-lg" />
                  </button>
                </div>
                <div className="relative w-full h-full rounded-lg p-2">
                  <Image
                    loading="lazy"
                    placeholder="blur"
                    src={toolImg}
                    alt={"Tool Img"}
                    fill
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
                    className="w-full object-contain"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className=" max-w-[1400px] mx-auto mt-[2rem] mb-[3rem] px-2 ">
        <p className=" text-center text-[1.5rem] font-medium mb-5 ">
          Vi brukte følgende ferdigheter i utviklingen av denne tjenesten
        </p>

        <div className=" flex flex-col gap-2 items-center ">
          <div className="  flex items-center max-w-[35rem] w-full ">
            <input
              type="text"
              ref={inputRef}
              placeholder="Skriv inn en ferdighet"
              onKeyDown={handleKeyDown}
              className=" flex-1 w-full py-2 px-3 border rounded-l-md outline-none "
            />
            <button
              onClick={handleAddSkill}
              className=" px-5 py-2 text-nowrap rounded-r-md border outline-none text-[#fff] bg-[#17DB4F] "
            >
              Legg til ferdighet
            </button>
          </div>

          <div>
            <ul className=" flex items-center gap-2 flex-wrap max-w-[35rem] w-full ">
              {formData.skills.map((skill, index) => (
                <li
                  key={index}
                  className=" relative text-[1.2rem] flex items-center px-8 py-1 rounded-md bg-[#eeeeee] "
                >
                  {skill}
                  <button
                    onClick={() => handleRemoveSkill(index)}
                    className=" text-red-500 absolute top-0 right-0 "
                  >
                    <RxCross2 />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThirdPart = ({ formData, setFormData }) => {
  const [filePreviews, setFilePreviews] = useState([]);
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event) => {
    const selectedFiles = Array.from(event.target.files);
    const maxSize = 5 * 1024 * 1024;
    let validFiles = [];

    selectedFiles.forEach((file) => {
      if (file.size <= maxSize) {
        validFiles.push(file);
      } else {
        setErrors((prev) => ({
          ...prev,
          galleryFile: "File size must be less than 5 MB.",
        }));
      }
    });

    if (validFiles.length > 0) {
      setErrors((prev) => ({ ...prev, galleryFile: null }));
      setLoading(true);

      try {
        const uploadedUrls = await Promise.all(validFiles.map(uploadFile));

        setFormData((prev) => ({
          ...prev,
          gellaryImgs: [...(prev.gellaryImgs || []), ...uploadedUrls],
        }));
      } catch (error) {
        console.error("Upload error:", error);
        setErrors((prev) => ({
          ...prev,
          galleryFile: "An error occurred while uploading the files.",
        }));
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClearFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      gellaryImgs: prev.gellaryImgs.filter((_, i) => i !== index),
    }));
  };

  // console.log(formData);

  return (
    <div className=" max-w-[1400px] mx-auto px-3 ">
      <div>
        <div className=" text-[2rem] md:text-[2.5rem] text-center font-medium ">
          Detaljert beskrivelse
        </div>
        <div>
          <textarea
            rows={5}
            value={formData.detailedDescription}
            onChange={(e) => {
              setFormData({
                ...formData,
                detailedDescription: e.target.value,
              });
            }}
            placeholder="En grundig gjennomgang av verktøyene og ferdighetene som ble brukt i utviklingen."
            className=" w-full border mt-4 outline-none  px-3 py-2 rounded-md "
          />
        </div>
      </div>
      <div>
        <h3 className=" text-[2rem] text-center font-medium mt-5 ">Galleri</h3>

        <div
          onClick={() => document.getElementById("galleryFile-click").click()}
          className=" mt-3 relative w-full flex flex-col items-center justify-center gap-4 border-2 border-[#17DB4F]  rounded-md cursor-pointer py-8 px-4"
        >
          {loading && <FetchLoading />}
          <button
            type="button"
            className="text-black transition-all duration-300 ease-in-out active:scale-95 text-[2rem] py-1 px-8 rounded-full"
          >
            <SlCloudUpload />
          </button>
          <div className="text-center text-gray-500">
            File Should be in PNG, JPEG or JPG format
          </div>
          <input
            id="galleryFile-click"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
        <div className=" flex flex-wrap gap-5 mt-4 justify-center">
          {
            Array.isArray(formData?.gellaryImgs) &&
              formData?.gellaryImgs.length > 0 &&
              formData?.gellaryImgs.map((gellaryImg, index) => (
                <div key={index} className="relative w-[15rem] h-[10rem]">
                  <div className="absolute flex justify-end z-50 bg-black/50 text-[#fff] p-2 right-2 top-2 rounded-full">
                    <button
                      type="button"
                      onClick={() => handleClearFile(index)}
                    >
                      <RxCross2 className="text-xl" />
                    </button>
                  </div>
                  <div className="relative w-full h-full rounded-lg p-2">
                    <Image
                      loading="lazy"
                      placeholder="blur"
                      src={gellaryImg}
                      alt={gellaryImg}
                      fill
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
};

import MessageIcon from "@/assets/MessageIcon.jpg";
import { IoStar } from "react-icons/io5";

const ForthPart = ({ formData, setFormData }) => {
  const [filePreview, setFilePreview] = useState(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    setFormData({
      ...formData,
      rating: value,
    });
  };

  const handleFileUpload = async (event) => {
    const selectedFile = event.target.files[0];
    const maxSize = 5 * 1024 * 1024;

    if (selectedFile) {
      if (selectedFile.size <= maxSize) {
        setError("");
        setLoading(true);

        try {
          const uploadedUrl = await uploadFile(selectedFile);
          if (uploadedUrl) {
            setFormData({
              ...formData,
              reviewerImgUrl: uploadedUrl,
            });
          } else {
            setError("Failed to upload file to Cloudinary.");
          }
        } catch (error) {
          console.error("Upload error:", error);
          setError("An error occurred while uploading the file.");
        } finally {
          setLoading(false);
        }
      } else {
        setError("File size must be less than 5 MB.");
        setFilePreview(null);
        setFile(null);
      }
    }
  };

  const handleClearFile = () => {

    setFormData({
      ...formData,
      reviewerImgUrl: "",
    });
  };


  return (
    <div className=" mt-10 mb-14 ">
      <div>
        <h3 className=" text-[2rem] md:text-[2.5rem] font-medium text-center ">
          Kunde
        </h3>
        <h4 className=" text-[1.5rem] md:text-[2rem] font-medium text-center ">
          Kunde anmeldelse
        </h4>
      </div>
      <div className=" relative max-w-[30rem] mx-auto shadow-[0px_1px_10px_rgba(0,0,0,0.15)] px-6 pt-14 pb-20 rounded-md mt-20 ">
        <div className=" absolute -top-[3rem] w-full left-0 flex justify-center  ">

          <div className="flex flex-col items-center gap-4">
            {formData?.reviewerImgUrl ? (
              <div className="relative w-[5rem] h-[5rem] ">
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-black/50 text-white p-1 z-50 rounded-full"
                  onClick={handleClearFile}
                >
                  <RxCross2 className="text-lg" />
                </button>
                <Image
                  src={formData?.reviewerImgUrl}
                  alt={"Reviewer Img"}
                  fill
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            ) : (
              <div
                className=" relative flex flex-col items-center justify-center border-2 border-dashed border-gray-300 w-[5rem] h-[5rem] rounded-full cursor-pointer"
                onClick={() => document.getElementById("file-input-4").click()}
              >
                {loading && (
                  <div className=" absolute left-0 top-0 w-full h-full rounded-full bg-[#000]/50 ">
                    <ButtonLoading />
                  </div>
                )}
                <SlCloudUpload className="text-3xl text-gray-500" />
                <input
                  id="file-input-4"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </div>
        <div>
          <textarea
            rows={4}
            value={formData?.reviewMessage}
            onChange={(e) => {
              setFormData({
                ...formData,
                reviewMessage: e.target.value,
              });
            }}
            placeholder="Skriv inn anmeldelsesmelding"
            className=" w-full border outline-none  px-3 py-2 rounded-md "
          />
        </div>
        <div className=" absolute -bottom-[1.35rem] left-0 flex justify-center w-full ">
          <div className="flex items-center gap-2 text-[1.5rem] text-yellow-500 bg-[#035635] px-5 h-[2.7rem] rounded-md cursor-pointer">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} onClick={() => handleClick(star)}>
                {formData?.rating >= star ? <IoStar /> : <IoStarOutline />}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Link
          href={`/#reviews`}
          className=" mt-[5rem] text-[1.2rem] font-medium flex items-center justify-center gap-2 "
        >
          <span>Les google review</span>
          <FaExternalLinkAlt />
        </Link>
      </div>
    </div>
  );
};


