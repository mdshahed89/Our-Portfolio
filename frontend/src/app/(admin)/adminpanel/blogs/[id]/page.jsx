"use client";
import { FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { uploadFile } from "@/AuthProvider/imageUpload";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Page = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [filePreview, setFilePreview] = useState([]);
  const [imageUrl, setImageUrl] = useState("")
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [title, setTitle] = useState("");
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

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/single-blog/${id}`
      );
      console.log(data);
      if (data.success) {
        const { title, content, coverImage } = data.data;
        setTitle(title || "");
        setValue(content || "");
        setFilePreview(
          coverImage ? [{ name: coverImage, url: coverImage }] : []
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [id]);

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
    const content = value;
    const coverImage = filePreview.length > 0 ? filePreview : null;

    try {
      // let uploadedImageURL = "";
      // if (file) {
      //   uploadedImageURL = await uploadFile(file);
      // }

      const formData = {
        author: user.name,
        title,
        content,
        coverImage: imageUrl || coverImage[0]?.url,
      };

      const { data } = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/update-blog/${id}`,
        formData
      );
      if (data.success === true) {
        setIsLoading(false);
        toast.success("Bloggen ble oppdatert");
        router.push("/adminpanel/blogs");
      }
      setErrors({});
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message || "Something went wrong");
      setErrors((prev) => ({ ...prev, file: "Image upload failed." }));
    }
  };

  return (
    <div className="m-2 md:m-5">
      <div className="h-[50px] flex gap-2 px-5 text-white items-center bg-[#035635]">
        <FaUserFriends size={20} />
        <div className="text-[15px] font-semibold">oppdater bloggen</div>
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
                  value={title} // Use value from state
                  onChange={(e) => setTitle(e.target.value)} // Handle title change
                  className="rounded-full px-2 bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 mt-1"
                  required
                />
              </div>
            </div>

            <div className="md:w-[30%]">
              <label htmlFor="" className="text-lg font-medium mb-2">Cover Image</label>
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
                className="bg-[#035635] px-10 py-2 transition-all duration-300 ease-in-out active:scale-95 text-xl font-medium rounded-full text-white"
              >
                Send inn
              </button>
              {isLoading && (
                <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-green-400 border-t-green-700"></div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
