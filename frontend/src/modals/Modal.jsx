"use client";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import MailIcon from "@/assets/MailIcon.png";
import Image from "next/image";
import toast from "react-hot-toast";
import { MdAddComment } from "react-icons/md";

export const Newsletter = () => {
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError("Vennligst fyll ut alle feltene.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter/add-newsletter`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Takk for at du abonnerer!");
        setFormData({ name: "", email: "" });
        setOpenModal(false);
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

  //   console.log(formData);

  return (
    <div className="">
      <button
        onClick={() => setOpenModal(true)}
        className="  border border-[#fff] w-full lg:w-[14rem] py-2 text-center cursor-pointer  "
      >
        Abonner på nyhetsbrev
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100000] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full rounded-md bg-white text-[#000] max-w-[40rem] ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="flex w-full md:flex-row flex-col  ">
            <div className="flex items-center rounded-l-md bg-[#17DB4F] w-full md:py-0 py-8 md:w-[40%] justify-center">
              <div
                onClick={() => setOpenModal(false)}
                className=" md:hidden flex bg-[#035635] p-1 rounded-full absolute top-4 cursor-pointer right-4 justify-end "
              >
                <RxCross2 className=" text-[1.5rem] text-[#fff] " />
              </div>
              <div>
                <Image src={MailIcon} alt="Mail Icon" />
              </div>
            </div>

            <div className=" w-full md:w-[60%] p-8 relative">
              <div
                onClick={() => setOpenModal(false)}
                className=" md:flex hidden absolute top-4 cursor-pointer right-4 justify-end "
              >
                <RxCross2 className=" text-[1.5rem] text-[#000] " />
              </div>
              <p className=" text-[2rem] leading-tight ">
                Abonner på vårt nyhetsbrev
              </p>
              <form onSubmit={handleSubmit} className=" mt-5 ">
                <div>
                  <label htmlFor="name">Fullt navn</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 outline-none mt-1 rounded-md focus:border-[#17DB4F] transition-all duration-300 ease-in-out "
                    placeholder="Side sone"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="email">E-post</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 outline-none mt-1 rounded-md focus:border-[#17DB4F] transition-all duration-300 ease-in-out "
                    placeholder="Sidesone@gmail.com"
                  />
                </div>
                <div className="mt-6">
                  <button className="bg-[#17DB4F] text-white w-full font-medium px-4 py-2 rounded">
                    Abonner
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AddReviewModal = ({fetchReviews}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="mx-auto flex w-full items-center justify-end">
      <button
        onClick={() => setOpenModal(true)}
        className="px-1 md:px-10 py-2 flex items-center gap-2 transition-all duration-300 ease-in-out active:scale-95 rounded-md text-[13px] md:text-lg font-medium bg-white text-green-700"
      >
        Legg til anmeldelse
      </button>

      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-50 flex items-center justify-center inset-0 bg-black/20 backdrop-blur-sm duration-200 ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        }`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full rounded-lg bg-white text-[#000] drop-shadow-2xl sm:w-[600px] ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className=" flex items-center justify-between px-4 py-3 text-[1.5rem] ">
            <h4>Legg til anmeldelse</h4>
            <div
              onClick={() => setOpenModal(false)}
              className=" bg-slate-50 p-1 cursor-pointer rounded-full text-[1.5rem] "
            >
              <RxCross2 />
            </div>
          </div>

          <ReviewForm setOpenModal={setOpenModal} fetchReviews={fetchReviews} />
        </div>
      </div>
    </div>
  );
};

import { useEffect, useRef } from "react";
import { FaEdit, FaStar } from "react-icons/fa";
import { ButtonLoading } from "@/components/Loading";
import { IoTrashBin } from "react-icons/io5";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { AiFillEdit } from "react-icons/ai";

export default function ReviewForm({ setOpenModal, fetchReviews }) {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    time: "",
    rating: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [error, setError] = useState("")

  const ratings = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setFormData({ ...formData, image: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.rating ||
      !formData.message ||
      !formData.time ||
      !formData.image
    ) {
      setError("Vennligst fyll ut alle feltene.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/add-review`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Review added successfully");
        fetchReviews()
        setFormData({
          name: "",
          message: "",
          time: "",
          rating: "",
          image: "",
        });
        setPreview(null);
        setOpenModal(false);
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

  return (
    <div className=" px-10 pt-10 pb-8 ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded-md mb-2 outline-none focus:border-[#17DB4F] transition-colors duration-300 ease-in-out "
        />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full p-2 border rounded-md mb-1 outline-none focus:border-[#17DB4F] transition-colors duration-300 ease-in-out"
        />

        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            className="w-full p-2 border rounded mb-2 flex items-center justify-between"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {formData.rating || "Select Rating"}{" "}
            <FaStar className="text-yellow-500" />
          </button>
          {dropdownOpen && (
            <div className="absolute w-full z-50 h-[12rem] overflow-y-auto border rounded bg-white shadow-md">
              {ratings.map((rate) => (
                <div
                  key={rate}
                  className="p-2 hover:bg-gray-200 cursor-pointer flex items-center"
                  onClick={() => {
                    setFormData({ ...formData, rating: rate });
                    setDropdownOpen(false);
                  }}
                >
                  <div className=" flex items-center justify-between w-full ">
                    <p>{rate}</p> <FaStar className="text-yellow-500 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <input
          type="text"
          value={formData.time}
          placeholder="5 måned siden"
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          className="w-full p-2 border rounded-md mb-2 outline-none focus:border-[#17DB4F] transition-colors duration-300 ease-in-out"
        />

        <div className="mb-4">
          <div className="relative border p-2 rounded-lg flex items-center justify-center cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleImageChange}
            />
            <span className="text-gray-600">Velg bilde</span>
          </div>
          {preview && (
            <div className="mt-3 relative w-16 h-16 flex items-start ">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="w-16 h-16 object-cover rounded"
              />
              <button
                type="button"
                className=" text-red-500 absolute z-50 right-0 top-0 bg-red-100 text-[1.3rem] ml-2 p-1 rounded-full "
                onClick={handleRemoveImage}
              >
                <RxCross2 />
              </button>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full relative h-[2.5rem] flex items-center justify-center bg-[#17DB4F] font-medium text-white rounded"
        >
          {loading ? <ButtonLoading /> : "Legg til anmeldelse"}
        </button>
      </form>
    </div>
  );
}

export const ReviewDeleteModal = ({ fetchReviews, id }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = async () => {
    if (!id) {
      toast.error("To remove the review required id");
      return;
    }
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/delete-review/${id}`
      );

      if (response.data?.success) {
        toast.success("Review deleted successfully");
        fetchReviews();
        setOpenModal(false);
      } else {
        toast.success(response.data.message);
        console.log("Failed to delete review, Try again later");
      }
    } catch (error) {
      // console.log(error);
      toast.error(error?.message || "Something went wrong");
    }
  };

  return (
    <div className="">
      <button
        onClick={() => setOpenModal(true)}
        className="absolute top-4 right-20 text-[1.3rem] text-red-500 "
      >
        <IoTrashBin />
      </button>

      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-50 flex items-center justify-center inset-0 bg-black/20 backdrop-blur-sm duration-200 ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        }`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full rounded-lg bg-white text-[#000] drop-shadow-2xl sm:w-[30rem] ${
            openModal ? "opacity-1  " : " opacity-0 "
          }`}
        >
          <div className=" flex items-center justify-end px-4 py-3 text-[1.5rem] ">
            <div
              onClick={() => setOpenModal(false)}
              className=" bg-slate-50 p-1 cursor-pointer rounded-full text-[1.5rem] "
            >
              <RxCross2 />
            </div>
          </div>

          <div className=" mt-6 text-center flex flex-col gap-7 p-4 ">
            <p>
              Are you sure you want to remove this review? This action is
              permanent and cannot be undone.
            </p>
            <div className=" flex items-center gap-4  ">
              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className=" flex-1 py-2 bg-[#035635] text-[#fff] rounded-md "
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                type="submit"
                className=" flex-1 py-2 bg-red-500 text-[#fff] rounded-md "
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const UpdateReviewModal = ({fetchReviews, review}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setOpenModal(true)}
        className=" absolute top-4 right-[7.8rem] text-[1.5rem] text-[#17DB4F]  "
      >
        <CiEdit />
      </button>

      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-50 flex items-center justify-center inset-0 bg-black/20 backdrop-blur-sm duration-200 ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        }`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full rounded-lg bg-white text-[#000] drop-shadow-2xl sm:w-[600px] ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className=" flex items-center justify-between px-4 py-3 text-[1.5rem] ">
            <h4>Update Review</h4>
            <div
              onClick={() => setOpenModal(false)}
              className=" bg-slate-50 p-1 cursor-pointer rounded-full text-[1.5rem] "
            >
              <RxCross2 />
            </div>
          </div>

          <UpdateReviewForm setOpenModal={setOpenModal} fetchReviews={fetchReviews} review={review} />
        </div>
      </div>
    </div>
  );
};


const UpdateReviewForm =({ setOpenModal, fetchReviews, review }) => {
  const [formData, setFormData] = useState({
    name: review?.name || "",
    message: review?.message || "",
    time: review?.time || "",
    rating: review?.rating || "",
    image: review?.image || "",
    base64Img: ""
  });
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [error, setError] = useState("")

  const ratings = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  useEffect(()=> {
    setFormData({
      name: review?.name || "",
      message: review?.message || "",
      time: review?.time || "",
      rating: review?.rating || "",
      image: review?.image || "",
    })
    setPreview(review?.image || "")
  }, [review])

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setFormData({ ...formData, base64Img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setFormData({ ...formData, image: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!review?._id){
      toast.error("Someting went wrong, please try again later")
      return
    }

    if (
      !formData.name ||
      !formData.rating ||
      !formData.message ||
      !formData.time ||
      (!formData.image && !formData.base64Img)
    ) {
      toast.error("Vennligst fyll ut alle feltene.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/update-review/${review?._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Review updated successfully");
        fetchReviews()
        setFormData({
          name: review?.name || "",
          message: review?.message || "",
          time: review?.time || "",
          rating: review?.rating || "",
          image: review?.image || "",
        })
        setPreview(review?.image || "");
        setOpenModal(false);
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
    <div className=" px-10 pt-10 pb-8 ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded-md mb-2 outline-none focus:border-[#17DB4F] transition-colors duration-300 ease-in-out "
        />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full p-2 border rounded-md mb-1 outline-none focus:border-[#17DB4F] transition-colors duration-300 ease-in-out"
        />

        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            className="w-full p-2 border rounded mb-2 flex items-center justify-between"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {formData.rating || "Select Rating"}{" "}
            <FaStar className="text-yellow-500" />
          </button>
          {dropdownOpen && (
            <div className="absolute w-full z-50 h-[12rem] overflow-y-auto border rounded bg-white shadow-md">
              {ratings.map((rate) => (
                <div
                  key={rate}
                  className="p-2 hover:bg-gray-200 cursor-pointer flex items-center"
                  onClick={() => {
                    setFormData({ ...formData, rating: rate });
                    setDropdownOpen(false);
                  }}
                >
                  <div className=" flex items-center justify-between w-full ">
                    <p>{rate}</p> <FaStar className="text-yellow-500 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <input
          type="text"
          value={formData.time}
          placeholder="5 måned siden"
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          className="w-full p-2 border rounded-md mb-2 outline-none focus:border-[#17DB4F] transition-colors duration-300 ease-in-out"
        />

        <div className="mb-4">
          <div className="relative border p-2 rounded-lg flex items-center justify-center cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleImageChange}
            />
            <span className="text-gray-600">Velg bilde</span>
          </div>
          {preview && (
            <div className="mt-3 relative w-16 h-16 flex items-start ">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="w-16 h-16 object-cover rounded"
              />
              <button
                type="button"
                className=" text-red-500 absolute z-50 right-0 top-0 bg-red-100 text-[1.3rem] ml-2 p-1 rounded-full "
                onClick={handleRemoveImage}
              >
                <RxCross2 />
              </button>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full relative h-[2.5rem] flex items-center justify-center bg-[#17DB4F] font-medium text-white rounded"
        >
          {loading ? <ButtonLoading /> : "Legg til anmeldelse"}
        </button>
      </form>
    </div>
  );
}