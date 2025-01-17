"use client";
import { FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { uploadFile } from "@/AuthProvider/imageUpload";
import axios from "axios";
import { useRouter } from "next/navigation";
const Page = () => {
  const navigate = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [filePreview, setFilePreview] = useState(null);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    const maxSize = 5 * 1024 * 1024;

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
    if (!file) newErrors.file = "Cover Image is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const uploadedImageURL = await uploadFile(file);
      const formData = {
        title,
        url,
        image: uploadedImageURL,
      };
      setIsLoading(true);

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/save-project`,
        formData
      );
      if (data.success === true) {
        navigate.push("/adminpanel/manageproject");
        setIsLoading(false);
      }
      setErrors({});
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setErrors((prev) => ({ ...prev, file: "Image upload failed." }));
    }
  };

  return (
    <div className="m-2 md:m-5">
      <div className="h-[50px] flex gap-2 px-5 text-white items-center bg-[#035635]">
        <FaUserFriends size={20} />
        <div className="text-[15px] font-bold">Create Blogs</div>
      </div>

      <div className="my-5">
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-10">
            <div className="flex flex-col">
              <label htmlFor="title" className="text-xl mb-1">
                Title <small className="text-red-500 text-sm">(Påkrevd)</small>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 px-4 mt-1"
                required
              />
              {errors.title && (
                <span className="text-red-500 text-sm">{errors.title}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="url" className="text-xl mb-1">
                Project Live URL{" "}
                <small className="text-red-500 text-sm">(Påkrevd)</small>
              </label>
              <input
                type="url"
                id="url"
                name="url"
                className="rounded-full px-4 bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 mt-1"
                required
              />
              {errors.url && (
                <span className="text-red-500 text-sm">{errors.url}</span>
              )}
            </div>

            <div className="md:w-[60%] lg:w-[30%]">
              <h3 className="text-lg font-semibold mb-2">Cover Image</h3>
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
                        placeholder="blur"
                        src={filePreview.url}
                        alt={filePreview.name}
                        width={100}
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
                        height={100}
                        className="w-full h-32 object-cover rounded-md"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-5 items-center justify-center">
                    <div className="text-center text-gray-500">
                      Dra og slipp filer her, eller
                    </div>
                    <button
                      type="button"
                      className="bg-[#035635] transition-all duration-300 ease-in-out active:scale-95 text-white py-2 px-4 rounded-full"
                      onClick={() =>
                        document.getElementById("file-input").click()
                      }
                    >
                      Velg filer
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
                <span className="text-red-500 text-sm">{errors.file}</span>
              )}
              <p className="text-sm text-gray-500 mt-2">
                Max. file size: 5 MB.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <button
                type="submit"
                className="bg-[#035635] px-10 py-2 transition-all duration-300 ease-in-out active:scale-95 text-xl font-medium  rounded-full text-white"
              >
                Send inn
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
  );
};

export default Page;
