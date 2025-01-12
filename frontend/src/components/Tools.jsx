import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineCode,
  AiOutlineSearch,
  AiOutlineThunderbolt,
  AiOutlineTool,
} from "react-icons/ai";
import ProcessIcon1 from "@/assets/ProcessIcon1.png";
import ProcessIcon2 from "@/assets/ProcessIcon2.png";
import ProcessIcon3 from "@/assets/ProcessIcon3.png";
import ProcessIcon4 from "@/assets/ProcessIcon4.png";
import { FaChartLine, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import {
  MdArrowForward,
  MdCampaign,
  MdDevices,
  MdSecurity,
} from "react-icons/md";
import "@/styles//style.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import coding from "@/assets/coding.webp";
import { TbUsersGroup } from "react-icons/tb";
import SatisfactionIcon from "@/assets/SatisfactionIcon.png";
import booking from "@/assets/Booking.webp";
import NewImg1 from "@/assets/newImg1.webp";
import NewImg2 from "@/assets/newImg2.webp";
import NewImg3 from "@/assets/newImg3.webp";



const Tools = () => {
  return (
    <>
      <div className="  px-2 md:px-3 my-[8rem] ">
        <div className=" max-w-[1200px] mx-auto text-center w-full mb-[2rem] flex justify-center flex-col items-center  ">
          <div className=" text-[1.7rem] sm:text-[2rem] md:text-[2.6rem] flex xl:flex-row flex-col w-fit xl:gap-3 ">
            Disse tjenestene nedenfor er{" "}
            <span className=" bg-[#035635] mt-1 text-[#fff] px-3 w-fit mx-auto leading-tight rounded-sm ">
              inkludert i alle nettsidepakker
            </span>
          </div>
          <p className=" text-gray-500 mt-4 text-base md:text-lg ">
            Uansett om du velger en nettside, nettbutikk eller webapplikasjon,
            får du disse grunnleggende tjenestene inkludert for en komplett og
            profesjonell løsning.
          </p>
        </div>
        <div className=" 2xl:max-w-[1400px] max-w-[1200px] mx-auto grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2 ">
          <Card
            icon={<FaLaptopCode />}
            title="Nettsideutvikling"
            description="Moderne og tilpasset design som fungerer optimalt i det norske markedet."
          />
          <Card
            icon={<AiOutlineTool />}
            title="Drift og Vedlikehold"
            description="Månedlig kostnad tilpasset for pakken du velger, som dekker oppdateringer, endringer og støtte."
          />
          <Card
            icon={<MdDevices />}
            title="Responsive design"
            description="Nettsiden tilpasses automatisk for å fungere optimalt på mobil, nettbrett og PC."
          />
          <Card
            icon={<AiOutlineSearch />}
            title="Tilpasset tekst (enkel seo)"
            description="Oppsett av tekst og innhold som er optimalisert for søkemotorer på et grunnleggende nivå."
          />
          <Card
            icon={<AiOutlineThunderbolt />}
            title="Lynrask Hastighet"
            description="Nettsiden er optimalisert for korte lastetider og en god brukeropplevelse."
          />
          <Card
            icon={<MdSecurity />}
            title="Sikkerhet"
            description="SSL-sertifikat og regelmessige oppdateringer for å beskytte nettsiden og brukerdata."
          />
        </div>
      </div>
      <div className=" 2xl:max-w-[1400px] max-w-[1200px] mx-auto px-2 md:px-3 my-[8rem] ">
        <div className=" text-center w-full mb-[2rem] flex justify-center flex-col items-center  ">
          <div className=" text-[1.7rem] sm:text-[2rem] md:text-[2.8rem] flex xl:flex-row flex-col w-fit xl:gap-3 ">
            Disse er tilleggstjenester med{" "}
            <span className=" text-[#035635] border-b-4 border-[#035635]  mt-1 h-fit py-1 px-2 w-fit mx-auto leading-none rounded-sm ">
              ekstra kostnad
            </span>
          </div>
          <p className=" text-gray-500 mt-4 text-base md:text-lg max-w-[60rem] ">
            For deg som ønsker ekstra funksjonalitet eller skreddersydde
            løsninger, tilbyr vi disse tilleggstjenestene. Merk at noen
            kostnader er engangsbeløp, mens andre kan være løpende på månedlig
            basis
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 ">
          <Card
            icon={<MdCampaign />}
            title="Markedsføring"
            description="Strategier og kampanjer for å nå ut til målgruppen din på ulike plattformer."
            btn="Les mer"
            path="/markedsforing"
          />
          <Card
            icon={<FaChartLine />}
            title="Avansert Seo"
            description="Dybdeoptimalisering for bedre synlighet og rangering på søkemotorer."
            btn="Les mer"
            path="/seo"
          />
          <Card
            icon={<FaPaintBrush />}
            title="Grafisk design"
            description="Design av logo, visuelle profiler og annet grafisk materiale for merkevaren din."
            btn="Les mer"
            path="/logo"
          />
        </div>
      </div>
      <Process />
    </>
  );
};

export default Tools;

const Card = ({ icon, title, description, btn, path }) => {
  return (
    <div className=" bg-[#F5F5F7]  p-4 rounded-md ">
      <div className=" text-[2rem] text-[#035635] w-[3.5rem] h-[3.5rem] flex items-center justify-center p-2 rounded-full bg-[#d3d3d3] ">
        {/* <Image src={icon} alt="Web Icon" loading="lazy" className=" w-full h-full  object-cover " /> */}
        {icon}
      </div>
      <div>
        <h3 className=" mt-1 text-[1.5rem] font-semibold text-[#035635] ">
          {title}
        </h3>
        <p className=" mt-2 text-gray-700 text-lg ">{description}</p>
        <div
          className={` ${
            btn ? "" : "hidden"
          } group hover:text-[#035635] transition-all duration-300 ease-linear border-b-2 border-[#035635] w-fit mt-5 flex items-center gap-1  `}
        >
          <Link href={`${path}`} className=" text-[1.2rem] font-light  ">
            {btn}
          </Link>
          <MdArrowForward className=" mt-1 group-hover:ml-2 transition-all duration-200 ease-linear " />
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <div className=" bg-[#7BDCB5] min-h-[1000px] flex flex-col justify-center md:processBg md:px-3 px-2 py-[2rem] ">
      <div className=" text-center text-[2rem] md:text-[2.8rem] lg:text-[3rem] leading-tight font-semibold ">
        <div>Prosessen med oss er kjempeenkel, vi skreddersyr løsningen.</div>
        <div className=" text-[#fff] ">Du slipper stress.</div>
      </div>
      <div className=" 2xl:max-w-[1400px] max-w-[1200px] mt-[5rem] lg:mt-[10rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
        <div className="relative">
          <div className="absolute hidden lg:block -top-20 -right-36 z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 180 120"
              className="w-48 h-32 stroke-white fill-none"
            >
              {/* Curved dashed line */}
              <path
                d="M5,70 C50,40 80,40 100,60"
                className="stroke-white"
                strokeWidth="2"
                strokeDasharray="5,5" /* Adjust dash spacing for better visibility */
                fill="none"
              />
              {/* Arrowhead */}
              <path
                d="M95,57 L106,63 L96,69 Z"
                className="fill-white"
                stroke="white"
                strokeWidth="1"
                transform="rotate(50, 100, 70)"
              />
            </svg>
          </div>
          <ProcessCard
            title="Send inn kontaktskjema"
            description="Vi vil deretter ta kontakt med deg for å tilby hjelp og veiledning i å finne den optimale løsningen som passer best for deg"
            icon={ProcessIcon1}
          />
        </div>
        <div className="relative">
          <div className="absolute hidden lg:block -top-20 -right-36 z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 180 120"
              className="w-48 h-32 stroke-white fill-none"
            >
              {/* Curved dashed line */}
              <path
                d="M5,70 C50,40 80,40 100,60"
                className="stroke-white"
                strokeWidth="2"
                strokeDasharray="5,5" /* Adjust dash spacing for better visibility */
                fill="none"
              />
              {/* Arrowhead */}
              <path
                d="M95,57 L106,63 L96,69 Z"
                className="fill-white"
                stroke="white"
                strokeWidth="1"
                transform="rotate(50, 100, 70)"
              />
            </svg>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 180 120"
              className="w-48 h-32 stroke-white fill-none"
            >
             
              <path
                d="M5,70 C50,40 80,40 100,60"
                className="stroke-white"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
              
              <path
                d="M95,57 L106,63 L96,69 Z"
                className="fill-white"
                stroke="white"
                strokeWidth="1"
                transform="rotate(50, 100, 70)"
              />
            </svg> */}
          </div>
          <ProcessCard
            title="Del dine ønsker og behov for din nye nettside"
            description="Når du har valgt din nettsidepakke, sender du over informasjon om hva du ønsker å ha med på din nye nettside."
            icon={ProcessIcon2}
          />
        </div>
        <div className="relative">
          <div className="absolute hidden lg:block -top-20 -right-36 z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 180 120"
              className="w-48 h-32 stroke-white fill-none"
            >
              {/* Curved dashed line */}
              <path
                d="M5,70 C50,40 80,40 100,60"
                className="stroke-white"
                strokeWidth="2"
                strokeDasharray="5,5" /* Adjust dash spacing for better visibility */
                fill="none"
              />
              {/* Arrowhead */}
              <path
                d="M95,57 L106,63 L96,69 Z"
                className="fill-white"
                stroke="white"
                strokeWidth="1"
                transform="rotate(50, 100, 70)"
              />
            </svg>
          </div>
          <ProcessCard
            title="Vi lager din nye nettside"
            description="Vårt team designer en attraktiv og brukervennlig nettside for dine kunder. Vi skriver også teksten basert på den informasjonen du deler med oss."
            icon={ProcessIcon3}
          />
        </div>
        <ProcessCard
          title="Du godkjenner, vi lanserer"
          description="Vi samarbeider med deg gjennom hele prosessen, og vi lanserer ikke nettsiden før du er fornøyd og har gitt din godkjennelse."
          icon={ProcessIcon4}
        />
      </div>
    </div>
  );
};

const ProcessCard = ({ title, description, icon }) => {
  return (
    <div className=" bg-[#fff] h-full relative text-center py-6 px-4 rounded-lg overflow-hidden ">
      <h3 className=" relative z-30 text-[1.5rem] font-medium leading-tight ">
        {title}
      </h3>
      <p className=" relative z-30 text-lg mt-4 text-gray-600 ">
        {description}
      </p>
      <div className=" absolute -bottom-8  right-0 z-10 ">
        <Image
          src={icon}
          alt="Process Icon"
          className=" w-fit h-[8rem] object-contain opacity-50  "
        />
      </div>
    </div>
  );
};

export const Team = () => {
  return (
    <>
      <div className="grid  lg:px-0 lg:grid-cols-2 text-white ">
        <div className=" flex flex-col justify-center gap-5 p-2 md:p-3">
          <div className=" bg-[#0b462ece] p-5 rounded-md ">
            <TbUsersGroup className=" text-[2rem] mb-1 " />
            <h3 className="text-[34px]   pb-5 font-semibold">
              Teamet bak sidesone
            </h3>
            <p className=" text-[20px] text-gray-100 leading-normal 2xl:leading-8">
              Hos Sidesone er vi eksperter på å skape digitale løsninger som
              gjør en forskjell for både enkeltpersoner og bedrifter. Vi forstår
              at behovene kan variere - fra små bedrifter og gründere som
              trenger en funksjonell og tiltalende nettside, til større
              virksomheter som krever avanserte webapplikasjoner og helhetlige
              digitale strategier. Uansett hvem du er, eller hvilken bransje du
              opererer i, er vårt mål alltid det samme: å levere løsninger som
              overgår forventningene.
            </p>
          </div>
          <div className=" bg-[#0b462ece] p-5 rounded-md  ">
            <p className=" text-[16px] 2xl:text-[20px] text-gray-100 leading-normal 2xl:leading-8">
            Vi utvikler profesjonelle nettsider, nettbutikker og webapper, og tilbyr et bredt spekter av tjenester, inkludert markedsføring, SEO og grafisk design. Vi setter samarbeid i sentrum og skreddersyr løsninger som er tilpasset dine spesifikke behov. Gjennom tett dialog følger vi deg nøye opp gjennom hele prosessen - fra de første planleggingsmøtene til lansering og langt inn i driftsfasen. For oss er det ikke bare viktig å levere et ferdig produkt; vi ønsker å bygge langsiktige relasjoner og være en pålitelig partner du kan stole på.
            </p>
            <div className="flex justify-center items-center">
              <Link
                href="/om-oss"
                className="border-2 my-8 rounded-md w-[280px] justify-center text-base lg:text-lg font-medium flex items-center gap-2 border-[#d1d1d1] hover:border-white px-3 py-1 transition-transform transform hover:origin-left group"
              >
                Les mer om sidesone
                <IoIosArrowRoundForward
                  size={30}
                  className="transition-transform transform mt-1 group-hover:translate-x-2"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className=" md:min-h-[50vh] md:px-0 px-2">
          <figure className="w-full h-full flex items-center justify-center overflow-hidden">
            <Image
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
              src={coding}
              alt={"Coding"}
              
              className="lg:w-full w-auto lg:h-full h-auto object-contain lg:object-cover rounded-md "
            />
          </figure>
        </div>
      </div>
      <Satisfaction />
    </>
  );
};

const Satisfaction = () => {
  return (
    <div className=" relative bg-[#fff] text-center leading-tight pt-[1rem] pb-[2rem] ">
      <div className=" flex justify-center ">
        <div className=" absolute z-10 2xl:max-w-[1400px] max-w-[1200px] -bottom-[15%] md:-bottom-[55%]  w-full mx-auto flex justify-end  ">
          <Image
            src={SatisfactionIcon}
            alt="Satisfaction Icon"
            loading="lazy"
            className=" w-[6rem] md:w-[17rem] object-contain opacity-30  "
          />
        </div>
      </div>
      <div className=" text-[2rem] sm:text-[3rem] md:text-[4rem] font-medium relative z-50 ">
        100% Fornøydgaranti
      </div>
      <p className=" text-lg text-gray-500 mt-5 relative z-50 ">
        Vi er dedikerte til å levere et resultat du er stolt av. Derfor tilbyr
        vi en garanti for at du blir helt fornøyd med nettsiden. Du kan gjør endringer og justeringer til du er 100% tilfreds, før vi går live.
      </p>
      <p className=" text-lg text-gray-500 relative z-50 mt-2 ">
        
      </p>
    </div>
  );
};

export const Booking = () => {
  return (
    <div className=" lg:mb-0 z-50 relative  lg:px-0 grid lg:grid-cols-2 ">
      <div className="order-2 lg:order-1  ">
        <div className="w-full h-auto md:h-[700px] overflow-hidden ">
          <Image
            loading="lazy"
            placeholder="blur"
            src={booking}
            alt={"Booking Img"}
            width={800}
            height={800}
            className="w-full h-full object-cover "
          />
        </div>
      </div>

      <div className="bg-[#7BDCB5] py-10  order-1  lg:order-2 flex items-center justify-center text-center">
        <div className="space-y-5 leading-tight">
          <h3 className="text-[40px] lg:text-[56px] font-medium">Spørsmål?</h3>
          <div>
            <p className="text-[24px] lg:text-[32px] font-medium">
              Ring oss: +47 13 65 07
            </p>
            <p className="text-[24px] lg:text-[32px] font-medium">
              Mail oss: Kontakt@sidesone.no
            </p>
          </div>
          <p className="text-[24px] lg:text-[32px] font-medium">Eller</p>
          <p className="text-[24px] lg:text-[32px] font-medium">
            Book en konsultasjon
          </p>
          <div className="flex justify-center py-5 lg:my-3 mt-6">
            <Link
              href={"/book-now"}
              className="w-60 bg-black transition-all duration-300 ease-in-out active:scale-95 text-white p-3 rounded-full"
            >
              Book Møte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <div className=" relative h-[680px] lg:h-[750px] 2xl:max-w-[1400px] max-w-[1200px]  mx-auto text-white flex flex-col lg:flex-row  lg:justify-between ">
      <div className="  flex mt-[130px] md:mt-[140px] lg:mt-[170px]  flex-col z-50  px-3 max-w-[40rem] lg:max-w-[55rem] ">
        <div className="  md:mt-7 ">
          <h1 className=" text-[34px] md:text-[45px] lg:text-[62px] leading-tight font-semibold ">
            Øk vekst og synlighet med en profesjonell nettside
          </h1>
          <p className="text-[20px] mt-3 md:text-[24px] lg:text-[30px] text-[#e9e9e9] font-medium leading-tight ">
            Hos sidesone kan du spre dine digitale vinger!
          </p>
        </div>

        <div className=" mt-14 md:mt-5">
          <Link
            href="/nettside"
            className="border-2 px-2 md:px-0 whitespace-none md:whitespace-normal rounded w-fit md:w-[250px] lg:w-[300px] justify-center text-base lg:text-lg font-medium flex items-center gap-1 md:gap-2 border-white p-2 md:p-2 transition-transform transform hover:scale-x-105 hover:origin-left group"
          >
            Trenger du en nettside?
            <IoIosArrowRoundForward
              size={30}
              className="transition-transform transform group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
      <div className=" absolute h-full w-full flex items-end justify-end  ">
        <div
          className={` -mt-20  w-full  mx-auto lg:order-2 order-1 lg:pt-0  lg:mt-8 h-[400px] md:h-[500px] lg:h-[600px]   bg-no-repeat  bg-hero-image`}
        ></div>
      </div>
    </div>
  );
};

export const OfferSection = () => {
  return (
    <div className=" 2xl:2xl:max-w-[1400px] max-w-[1200px] max-w-[1200px] mx-auto px-2 md:px-3 -mt-16 lg:-mt-28 mb-[3rem] ">
      <h3 className=" text-[2.8rem] mb-4 ">Hva vi tilbyr</h3>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-4 ">
        <Card2
          img={NewImg1}
          title="Nettside"
          btn="Få nettside"
          path="/nettside"
          description="Vi lager profesjonelle og brukervennlige nettsider som tilpasses dine behov. Enten det er en enkel landingsside eller en mer kompleks løsning, sørger vi for et moderne design og optimal funksjonalitet. Øk vekst og synlighet med en profesjonell nettside"
        />
        <Card2
          img={NewImg2}
          title="Nettbutikk"
          btn="Få nettbutikk"
          path="/nettbuttik"
          description="Vår ekspertise innen utvikling av nettbutikker gir deg en komplett løsning for salg på nett. Vi fokuserer på brukervennlighet, sikkerhet og integrasjon med betalings- og fraktsystemer."
        />
        <Card2
          img={NewImg3}
          title="Webapplikasjon"
          btn="Få webapp"
          path="/webapplikasjon"
          description="Vi bygger skreddersydde webapplikasjoner med MERN-stack (MongoDB, Express, React, Node.js) for komplekse og dynamiske løsninger som effektiviserer arbeidsflyten og dekker unike behov."
        />
      </div>
    </div>
  );
};

const Card2 = ({ img, title, description, btn, path }) => {
  return (
    <Link
      href={`${path}`}
      title={`Les mer om ${title}`}
      tabIndex={0}
      className="shadow-[0_0_5px_1px_rgba(128,128,128,0.6)] rounded-md group h-full  flex flex-col"
    >
      <div className="w-full h-[17rem] md:h-[20rem] overflow-hidden">
        <Image
          src={img}
          alt={`${title} illustrasjon`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 rounded-t-md transition-scale duration-300 ease-in-out"
        />
      </div>
      <div className="p-3 flex flex-col justify-between flex-grow ">
        <div>
          <h3 className="text-[2rem] font-medium">{title}</h3>
          <p className="text-lg text-gray-500">{description}</p>
        </div>
        <div
          className={`${
            btn ? "" : "hidden"
          } group hover:text-[#035635] transition-all duration-300 ease-linear border-b-2 border-[#035635] w-fit mt-5 flex items-center gap-1`}
        >
          <div className="text-[1.1rem] font-light">{btn}</div>
          <MdArrowForward className="mt-1 group-hover:ml-2 transition-all duration-200 ease-linear" />
        </div>
      </div>
    </Link>
  );
};

export const PageLoading = () => {
  return (
    <div className=" fixed h-[100vh] z-[100] w-[100vw] bg-white flex items-center top-0 left-0 justify-center  ">
      <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-green-400 border-t-green-700"></div>
    </div>
  );
};
