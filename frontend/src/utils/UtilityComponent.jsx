"use client"
import EmailIcon from "@/assets/EmailIcon.png";
import { ButtonLoading } from "@/components/Loading";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export const KontaktSection = ({ project }) => {

    const [kontaktData, setKontaktData] = useState({
      name: "",
      email: "",
      message: ""
    })
    const [loading, setLoading] = useState(false)
  
    const handleChange = (e) => (
      setKontaktData({
        ...kontaktData,
        [e.target.name]: e.target.value
      })
    )

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
    
      try {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/send-contact-info`,
          kontaktData
        );
    
        if (data?.success) {
          toast.success("E-post sendt!");
        } else {
          toast.error("E-postsending mislyktes!");
        }
      } catch (error) {
        console.error("Feil ved sending av e-post:", error);
        toast.error("Noe gikk galt. Prøv igjen senere.");
      } finally {
        setLoading(false);
      }
    };
    
  
    // console.log(kontaktData);
    
  
    return (
      <div className=" px-2 pb-[2rem] pt-[2rem] ">
        <h3 className=" text-[2rem] md:text-[2.5rem] text-center ">
          Ønsker du en nettside?
        </h3>
        <div className=" px-[2rem] pt-[1rem] pb-[2rem] mt-7 shadow-[0px_1px_10px_rgba(0,0,0,0.15)] rounded-md max-w-[50rem] mx-auto ">
          <div className=" flex flex-col items-center gap-3 text-center mt-5 ">
            <div>
              <Image
                src={EmailIcon}
                alt="Email icon"
                className=" w-[5rem] object-cover "
              />
            </div>
            <div>
              <h3 className=" text-[1.5rem] md:text-[2rem] font-medium ">
                Kontakt oss
              </h3>
              <p className=" text-base md:text-lg ">
                Vennligst fyll ut skjemaet på en ordentlig måte
              </p>
            </div>
          </div>
  
          <form onSubmit={handleSubmit} className=" pt-7 ">
            <div>
              <label htmlFor="name">Fullt navn*</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                id="name"
                required
                className=" mt-1 w-full border outline-none rounded-md px-3 py-2 focus:border-[#17DB4F] transition-all duration-300 ease-in-out "
              />
            </div>
            <div className=" mt-3 ">
              <label htmlFor="email">E-post*</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={handleChange}
                className=" mt-1 w-full border outline-none rounded-md px-3 py-2 focus:border-[#17DB4F] transition-all duration-300 ease-in-out "
              />
            </div>
            <div className=" mt-3 ">
              <label htmlFor="message">Melding*</label>
              <textarea
                rows={3}
                name="message"
                id="message"
                required
                onChange={handleChange}
                className=" mt-1 w-full border outline-none rounded-md px-3 py-2 focus:border-[#17DB4F] transition-all duration-300 ease-in-out "
              />
            </div>
            <div className=" mt-5  ">
              <button className=" relative h-[2.7rem] text-center bg-[#17DB4F] text-[#fff] w-full rounded-md ">
                {
                  loading ? <ButtonLoading /> : "Send inn"
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };