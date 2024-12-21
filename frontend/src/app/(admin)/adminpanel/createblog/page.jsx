"use client";
import { FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { uploadFile } from "@/AuthProvider/imageUpload";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/AuthProvider/AuthProvider";

const Page = () => {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const [filePreview, setFilePreview] = useState([]);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ align: "" }, { align: "center" }, { align: "right" }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["image", "link"],
    ],
  };

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    const maxSize = 2 * 1024 * 1024;

    if (selectedFile) {
      if (selectedFile.size <= maxSize) {
        setFile(selectedFile);
        setFilePreview([
          ...filePreview,
          { name: selectedFile.name, url: URL.createObjectURL(selectedFile) },
        ]);
        setErrors((prev) => ({ ...prev, file: null }));
      } else {
        setErrors((prev) => ({
          ...prev,
          file: "File size must be less than 2 MB.",
        }));
      }
    }
  };

  const handleClearFile = (index) => {
    const updatedFilePreview = filePreview.filter((_, i) => i !== index);
    setFilePreview(updatedFilePreview);
    setFile(null);
    setErrors((prev) => ({ ...prev, file: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const content = value;
    const coverImage = filePreview.length > 0 ? filePreview : null;

    try {
      const uploadedImageURL = await uploadFile(file);
      const formData = {
        author: user.name,
        title,
        content,
        coverImage: uploadedImageURL,
      };
      console.log(formData);

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/save-blog`,
        formData
      );
      if (data.success === true) {
        router.push("/adminpanel/blogs");
      }
      setErrors({});
    } catch (error) {
      console.log(error);
      setErrors((prev) => ({ ...prev, file: "Image upload failed." }));
    }
  };

  return (
    <div className="m-5">
      <div className="h-[50px] flex gap-2 px-5 text-white items-center bg-[#035635]">
        <FaUserFriends size={20} />
        <h1 className="text-[15px] font-bold">Create Blogs</h1>
      </div>
      <div className="my-5">
        <form onSubmit={handleSubmit}>
          <div className="space-y-10">
            <div>
              <div className="flex flex-col">
                <label htmlFor="title" className="text-xl mb-1">
                  Title{" "}
                  <small className="text-red-500 text-sm">(Required)</small>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="rounded-full px-2 bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 mt-1"
                  required
                />
              </div>
            </div>

            <div className="md:w-[30%]">
              <h3 className="text-lg font-semibold mb-2">Cover Image</h3>
              <div className="border border-dashed border-[#7BDCB5] rounded-lg p-4 flex flex-col items-center gap-3">
                {filePreview.length > 0 ? (
                  <div>
                    {filePreview.map((file, index) => (
                      <div key={index} className="relative rounded-lg p-2">
                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={() => handleClearFile(index)}
                            className="text-red-500"
                          >
                            <RxCross2 className="text-2xl" />
                          </button>
                        </div>
                        <Image
                          src={file.url}
                          alt={file.name}
                          width={100}
                          height={100}
                          className="w-full h-32 object-cover rounded-md"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center flex-col gap-5 justify-center">
                    <div className="text-center text-gray-500">
                      Drag and drop files here, or
                    </div>
                    <button
                      type="button"
                      className="bg-[#035635] text-white py-2 px-4 rounded-full"
                      onClick={() =>
                        document.getElementById("file-input").click()
                      }
                    >
                      Choose Files
                    </button>
                    <input
                      id="file-input"
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleFileUpload}
                      required
                    />
                    {errors.file && (
                      <span className="text-red-500 text-sm">
                        {errors.file}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Max. file size: 2 MB.
              </p>
            </div>

            <div>
              <ReactQuill
                value={value}
                onChange={setValue}
                theme="snow"
                modules={modules}
                className="custom-quill3"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#035635] px-4 py-2 text-xl font-medium rounded-full text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
