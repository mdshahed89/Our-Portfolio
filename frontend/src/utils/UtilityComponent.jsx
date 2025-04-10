"use client";
import EmailIcon from "@/assets/EmailIcon.png";
import { ButtonLoading } from "@/components/Loading";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import BotIcon1 from "@/assets/BotIcon1.png";
import { FaBullseye, FaEye, FaLightbulb, FaUserCheck, FaUserCircle, FaUsers } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

export const KontaktSection = ({ project }) => {
  const [kontaktData, setKontaktData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setKontaktData({
      ...kontaktData,
      [e.target.name]: e.target.value,
    });

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
              src={BotIcon1}
              alt="Email icon"
              className=" w-[5rem] object-contain rounded-full "
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
              {loading ? <ButtonLoading /> : "Send inn"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const Values = () => {
  return (
    <div className=" mb-[4rem] ">
      <h2 className=" text-[2rem] lg:text-[3rem] text-center ">Våre Kjerneverdier</h2>
      <div className=" mt-[4rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 w-full px-2 max-w-[1400px] mx-auto ">
        <Value
        icon={<RiSecurePaymentLine />}
          title="Tilstedeværelse"
          description="Vi er der for kundene våre når det gjelder. Vi tar ansvar, holder det vi lover og følger opp, også når ting blir utfordrende."
        />
        <Value
        icon={<FaUsers />}
          title="Samskaping"
          description="De beste løsningene skapes sammen. Vi jobber tett med kundene våre og bygger digitale produkter i ekte samarbeid."
        />
        <Value
        icon={<FaLightbulb />}
          title="Nytenkning"
          description="Vi utfordrer det etablerte og ser alltid etter smartere måter å jobbe på. Teknologi og kreativitet går hånd i hånd hos oss."
        />
        <Value
        icon={<FaBullseye />}
          title="Presisjon"
          description="Vi leverer med nøyaktighet og kvalitet i alle ledd, fra første møte til lansert løsning. Detaljene teller, og vi lar ingenting være tilfeldig."
        />
        <Value
        icon={<FaEye />}
          title="Fremtidsblikk"
          description="Vi tror på bærekraftige og effektive løsninger som bidrar til noe større. Gjennom automatisering og teknologi ser vi fremover."
        />
        <Value
        icon={<FaUserCircle />}
          title="Brukerfokus"
          description="Alt vi lager, lager vi for ekte mennesker. Vi lytter, tilpasser og utvikler løsninger som møter behov og skaper verdi både for brukeren og forretningsmålet."
        />
      </div>
    </div>
  );
};

const Value = ({ icon, title, description }) => {
  return (
    <div className="  shadow-[0px_1px_10px_rgba(0,0,0,0.15)] py-[2.5rem] px-[1rem] md:px-[2rem] rounded-xl ">
      <div className=" flex items-center gap-4 ">
        <div className=" w-fit text-[1.6rem] p-3 rounded-full bg-gray-200 text-[#035635]  ">
          {icon}
        </div>
        <h3 className=" text-[1.4rem] font-semibold ">{title}</h3>
      </div>
      <p className=" text-gray-500 mt-5 text-[1.1rem] ">{description}</p>
    </div>
  );
};
