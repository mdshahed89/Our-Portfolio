"use client";
import EmailIcon from "@/assets/EmailIcon.png";
import { ButtonLoading } from "@/components/Loading";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import BotIcon1 from "@/assets/BotIcon1.png";
import {
  FaBullseye,
  FaEye,
  FaLightbulb,
  FaUserCheck,
  FaUserCircle,
  FaUsers,
} from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoIosArrowRoundForward, IoMdArrowBack } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
      <h2 className=" text-[2rem] lg:text-[3rem] text-center ">
        Våre Kjerneverdier
      </h2>
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

export const AiChatbotPackage = () => {
  const points = [
    "Skreddersydd KI-chatbot tilpasset din bransje",
    "Integrasjon med nettside, nettbutikk eller CRM",
    "Naturlig og menneskelig dialog med ChatGPT-teknologi",
    "24/7 tilgjengelighet for kundene dine",
    "Tilpasning av tone, språk og funksjonalitet",
    "Enkel opplæring og bruk",
    "Vedlikehold og videreutvikling ved behov",
  ];

  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/send-chatbot-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );

      if (response.ok) {
        // const result = await response.json();
        // toast.success("Takk for meldingen! Vi tar kontakt med deg snart");
        router.push("/chatbot-suksess");
        // setClicked(false)
        setFormdata({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Kunne ikke sende forespørsel");
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("Kunne ikke sende forespørsel");
    } finally {
      setLoading(false);
    }
  };

  // console.log(formdata);

  return (
    <div className=" border-2 border-[#17DB50] max-w-[43rem] mx-auto rounded-tr-xl rounded-bl-xl p-[1rem] ">
      <div className=" ">
        {clicked ? (
          <div>
            <h4 className=" text-[1.7rem] md:text-[2rem] font-semibold mb-[3rem] ">
              Send inn skjemaet, så tar vi kontakt med deg snart.
            </h4>
            <form onSubmit={handleSubmit} className=" md:px-[1.5rem] px-0 ">
              <div className=" flex justify-end mb-[2rem]  ">
                <div
                  onClick={() => setClicked(false)}
                  className=" cursor-pointer  p-3 shadow-inner rounded-full text-[1.7rem]  "
                >
                  <IoMdArrowBack />
                </div>
              </div>

              <div className=" space-y-2 ">
                <div className=" space-y-1 text-lg ">
                  <label htmlFor="">Firmanavn / Navn*</label>
                  <input
                    type="text"
                    value={formdata.name}
                    name="name"
                    onChange={handleChange}
                    required
                    placeholder=""
                    className=" w-full py-2 px-4 border outline-none rounded-md  "
                  />
                </div>
                <div className=" space-y-1 text-lg ">
                  <label htmlFor="">E-post*</label>
                  <input
                    type="email"
                    value={formdata.email}
                    name="email"
                    onChange={handleChange}
                    required
                    placeholder=""
                    className=" w-full py-2 px-4 border outline-none rounded-md  "
                  />
                </div>
                <div className=" space-y-1 text-lg ">
                  <label htmlFor="">Telefon*</label>
                  <input
                    type="text"
                    value={formdata.phone}
                    name="phone"
                    onChange={handleChange}
                    required
                    placeholder=""
                    className=" w-full py-2 px-4 border outline-none rounded-md  "
                  />
                </div>
                <div className=" space-y-1 text-lg ">
                  <label htmlFor="">Melding*</label>
                  <textarea
                    rows={3}
                    value={formdata.message}
                    name="message"
                    onChange={handleChange}
                    required
                    placeholder=""
                    className=" w-full py-2 px-4 border outline-none rounded-md  "
                  />
                </div>
              </div>
              <div className=" mt-[1.5rem] flex justify-center ">
                <button className=" relative w-[10rem] h-[2.5rem] font-medium border border-[#575757] rounded-3xl ">
                  {loading ? <ButtonLoading /> : "Send inn"}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="  ">
            <h4 className=" text-[2rem] md:text-[2.5rem] font-semibold mb-[3rem] ">
              Hva får du?
            </h4>
            <div className=" md:px-[1.5rem] px-0 space-y-4 md:space-y-6 text-lg md:text-xl ">
              {points.map((point, idx) => (
                <div key={idx} className=" flex gap-2 md:gap-4 ">
                  <div className=" min-w-[2rem] max-w-[2rem] max-h-[2rem] min-h-[2rem] ">
                    <IoIosArrowRoundForward className=" text-[1.7rem] text-[#17DB50] " />
                  </div>
                  <span className=" font-medium text-gray-700 ">{point}</span>
                </div>
              ))}
            </div>
            <div className=" flex flex-col items-center justify-center mt-[2rem] space-y-2 ">
              <p>Pris eksl MVA</p>
              <div className=" text-[1.7rem] font-semibold ">5000 kr/mnd</div>
              <div
                onClick={() => setClicked(true)}
                className=" cursor-pointer flex items-center gap-2 px-6 sm:px-8 py-2 rounded-full border border-[#575757] font-medium md:text-base text-sm "
              >
                <span>ER DU INTERESSERT? KONTAKT OSS</span>{" "}
                <span className=" p-[1px] bg-black text-[#fff] rounded-full text-sm ">
                  <MdArrowRightAlt />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const MarkettingPackages = () => {
  const package1 = [
    "Google Ads",
    "A/B testing av tekst i annonser",
    "Søkeordsanalyse",
    "A/B testing av landingsside",
    "Oppsett av Google Ads kampanjestruktur",
  ];
  const package2 = [
    "Google Ads",
    "A/B testing av tekst i annonser",
    "Søkeordsanalyse",
    "Meta Ads",
    "A/B testing av landingsside",
    "5 innlegg på sosiale medier per måned",
    "Oppsett av Google Ads kampanjestruktur",
  ];
  const package3 = [
    "Google Ads",
    "A/B testing av tekst i annonser",
    "Søkeordsanalyse",
    "Meta Ads",
    "A/B testing av landingsside",
    "5 innlegg på sosiale medier per måned",
    "Oppsett av Google Ads kampanjestruktur",
    "Utvikling av tekst til landingsside",
    "Hjelp til forretningsutvikling",
  ];

  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    packageName: "",
    packagePrice: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/send-seo-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );

      if (response.ok) {
        // const result = await response.json();
        // toast.success(
        //   "SEO-forespørselen din er mottatt. Vi tar kontakt med deg snart."
        // );
        router.push(
          `/markedsforing-sukess?plan=${encodeURIComponent(
            formdata.packageName
          )}&price=${encodeURIComponent(formdata.packagePrice)}`
        );

        // setFormdata({
        //   name: "",
        //   email: "",
        //   phone: "",
        //   message: "",
        //   packageName: "",
        //   packagePrice: "",
        // });
      } else {
        toast.error(
          "Kunne ikke sende tjenesteforespørselen. Vennligst prøv igjen senere."
        );
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error(
        "Kunne ikke sende tjenesteforespørselen. Vennligst prøv igjen senere."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {clicked ? (
        <form
          onSubmit={handleSubmit}
          className=" max-w-[40rem] mt-[4rem] mb-[3rem] mx-auto border-2 rounded-lg border-[#035635] bg-[#035635] text-[#fff] p-[1.5rem] "
        >
          <div className=" flex justify-between mb-[4rem] ">
            <div>
              <h4 className=" text-[1.3rem] font-medium text-[#dbdbdb] ">
                {formdata.packageName}
              </h4>
              <h4 className=" text-[1.7rem] font-medium ">
                {formdata.packagePrice}
              </h4>
            </div>
            <div
              onClick={() => setClicked(false)}
              className=" cursor-pointer h-fit  p-3 bg-[#094e33] shadow-inner rounded-full text-[1.7rem]  "
            >
              <IoMdArrowBack />
            </div>
          </div>

          <div className=" space-y-4 ">
            <div className=" space-y-2 text-lg ">
              <label htmlFor="">Firmanavn / Navn*</label>
              <input
                type="text"
                value={formdata.name}
                name="name"
                onChange={handleChange}
                required
                placeholder=""
                className=" w-full py-2 px-4 border border-[#fff] bg-[#fff] text-[#000] transition-colors duration-300 ease-in-out rounded-md outline-none "
              />
            </div>
            <div className=" space-y-2 text-lg ">
              <label htmlFor="">E-post*</label>
              <input
                type="email"
                value={formdata.email}
                name="email"
                onChange={handleChange}
                required
                placeholder=""
                className=" w-full py-2 px-4 border border-[#fff] bg-[#fff] text-[#000] transition-colors duration-300 ease-in-out outline-none rounded-md  "
              />
            </div>
            <div className=" space-y-2 text-lg ">
              <label htmlFor="">Telefon*</label>
              <input
                type="text"
                value={formdata.phone}
                name="phone"
                onChange={handleChange}
                required
                placeholder=""
                className=" w-full py-2 px-4 border border-[#fff] bg-[#fff] text-[#000] transition-colors duration-300 ease-in-out outline-none rounded-md  "
              />
            </div>
            <div className=" space-y-2 text-lg ">
              <label htmlFor="">Melding*</label>
              <textarea
                rows={3}
                value={formdata.message}
                name="message"
                onChange={handleChange}
                required
                placeholder=""
                className=" w-full py-2 px-4 border border-[#fff] bg-[#fff] text-[#000] transition-colors duration-300 ease-in-out outline-none rounded-md  "
              />
            </div>
          </div>
          <div className=" mt-[1rem] flex justify-center ">
            <button className=" relative w-[10rem] h-[2.5rem] font-medium border border-[#fff] bg-[#fff] text-[#000] rounded-3xl ">
              {loading ? <ButtonLoading /> : "Send inn"}
            </button>
          </div>
        </form>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 ">
          <Package
            packages={package1}
            title="Liten pakke"
            price="20 000kr/mnd"
            setClicked={setClicked}
            setFormdata={setFormdata}
          />
          <Package
            packages={package2}
            title="Medium pakke"
            price="40 000kr/mnd"
            setClicked={setClicked}
            setFormdata={setFormdata}
          />
          <Package
            packages={package3}
            title="Stor pakke"
            price="60 000kr/mnd"
            setClicked={setClicked}
            setFormdata={setFormdata}
          />
        </div>
      )}
    </div>
  );
};

const Package = ({ packages, title, price, setClicked, setFormdata }) => {
  return (
    <div className=" bg-[#035635] text-[#fff] pt-5 pb-[3rem] px-5 rounded-2xl flex flex-col justify-between ">
      <div>
        <h3 className=" text-[1.4rem] text-[#e6e6e6] font-bold pt-5 pb-8 ">
          {title}
        </h3>
        <div className=" text-[2.2rem] font-semibold pt-7 pb-14 ">{price}</div>
        <div className=" flex flex-col gap-4  ">
          {packages.map((pck, idx) => (
            <div key={idx} className=" flex items-start gap-2 text-[1.2rem] ">
              <IoCheckmarkSharp className=" text-[#fff] mt-2 " />
              {pck}
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-20 mx-auto ">
        <div
          // href="mailto:kontakt@sideson.no"
          onClick={() => {
            setClicked(true);
            setFormdata((prev) => ({
              ...prev,
              packageName: title,
              packagePrice: price,
            }));
          }}
          className=" cursor-pointer font-medium w-full py-2 px-8 transition-all duration-300 ease-in-out active:scale-95 rounded-full bg-[#fff] text-[#000] text-lg "
        >
          Ta Kontakt
        </div>
      </div>
    </div>
  );
};
