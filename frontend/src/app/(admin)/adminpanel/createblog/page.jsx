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
import toast from "react-hot-toast";

const Page = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [imageUrl, setImageUrl] = useState("")
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
    const maxSize = 5 * 1024 * 1024;
  
    if (selectedFile) {
      if (selectedFile.size <= maxSize) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
          setImageUrl(reader.result);
        };
  
        setFile(selectedFile);
        setFilePreview((prev) => [
          ...prev,
          { name: selectedFile.name, url: URL.createObjectURL(selectedFile) },
        ]);
        setErrors((prev) => ({ ...prev, file: null }));
      } else {
        setErrors((prev) => ({
          ...prev,
          file: "Filstørrelsen må være mindre enn 5 MB.",
        }));
      }
    }
  };
  

  const handleClearFile = (index) => {
    const updatedFilePreview = filePreview.filter((_, i) => i !== index);
    setFilePreview(updatedFilePreview);
    setFile(null);
    setErrors((prev) => ({ ...prev, file: null }));
    setImageUrl("")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const title = form.title.value;
    const content = value;
    const coverImage = filePreview.length > 0 ? filePreview : null;

    try {
      // const uploadedImageURL = await uploadFile(file);
      const formData = {
        author: user.name,
        title,
        content,
        coverImage: imageUrl,
      };
      console.log(formData);

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/save-blog`,
        formData
      );
      if (data.success === true) {
        setIsLoading(false);
        toast.success("Bloggen ble opprettet");
        router.push("/adminpanel/blogs");
      }
      setErrors({});
    } catch (error) {
      setIsLoading(false);
      toast.error(error);
      setErrors((prev) => ({ ...prev, file: "Image upload failed." }));
    }
  };

  // console.log("ii",imageUrl);
  

  return (
    <div className="m-2 md:m-5">
      <div className="h-[50px] flex gap-2 px-5 text-white items-center bg-[#035635]">
        <FaUserFriends size={20} />
        <h4 className="text-[15px] font-semibold">Lag blogger</h4>
      </div>
      <div className="my-5">
        <form onSubmit={handleSubmit}>
          <div className="space-y-10">
            <div>
              <div className="flex flex-col">
                <label htmlFor="title" className="text-xl mb-1">
                  Title{" "}
                  <small className="text-red-500 text-sm"> (Påkrevd)</small>
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
              <p className="text-lg font-semibold mb-2">Cover Image</p>
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
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
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
                      Dra og slipp filer her, eller
                    </div>
                    <button
                      type="button"
                      className="bg-[#035635] transition-all duration-300 ease-in-out active:scale-95 text-white py-2 px-4 rounded-full"
                      onClick={() =>
                        document.getElementById("file-input").click()
                      }
                    >
                      Velg Filer
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
                Max. file size: 5 MB.
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
