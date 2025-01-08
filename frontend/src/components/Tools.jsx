import T1 from "@/assets/T1.png";
import T2 from "@/assets/T2.png";
import T3 from "@/assets/T3.png";
import T4 from "@/assets/T4.png";
import T5 from "@/assets/T5.png";
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

const toolsData = [
  {
    imgSrc: <AiOutlineCode />,
    imgAlt: "Nettsideutvikling",
    title: "Nettsideutvikling",
    description: "Lage dynamiske nettsider for din digitale suksesss",
  },
  {
    imgSrc: T2,
    imgAlt: "Driftsavtale",
    title: "Driftsavtale",
    description:
      "Stabile og pålitelige driftsavtaler som sikrer nettsiden din.",
  },
  {
    imgSrc: T3,
    imgAlt: "Responsive design",
    title: "Responsive design",
    description:
      "Responsivt design for best mulig brukeropplevelse på alle enheter.",
  },
  {
    imgSrc: T4,
    imgAlt: "Vedlikehold",
    title: "Vedlikehold",
    description: "Vedlikehold som sikrer stabilitet og optimal ytelse.",
  },
  {
    imgSrc: T5,
    imgAlt: "SEO",
    title: "SEO",
    description: "SEO som forbedrer synligheten og rangeringen på nettet.",
  },
];

const Tools = () => {
  return (
    // <div className="grid md:grid-cols-5 py-5 bg-[#fff]  lg:justify-between px-3 lg:px-0 gap-2 lg:gap-5 ">
    //   {toolsData.map((tool, index) => (
    //     <div key={index} className="flex flex-col md:items-center md:gap-3 ">
    //       <div className="flex md:items-center flex-row md:flex-col gap-4 md:gap-1  ">
    //         <div className=" md:mt-0 mt-1 md:w-[50px] w-[30px] h-[30px] md:h-[50px]">
    //           <figure className="overflow-hidden w-[30px] h-[30px] md:w-[50px] md:h-[50px]">
    //             <Image
    //               src={tool.imgSrc}
    //               blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
    //               loading="lazy"
    //               placeholder="blur"
    //               alt={tool.imgAlt}
    //               className="h-full w-full object-contain"
    //             />
    //           </figure>
    //         </div>
    //         <div className=" md:pb-0 pb-8 md:mb-0 mb-4 md:text-center md:border-none border-b-2 border-[#000] ">
    //           <h2 className=" text-lg md:text-2xl font-semibold text-gray-900">
    //             {tool.title}
    //           </h2>
    //           <p className="text-gray-600 md:hidden block text-lg">{tool.description}</p>
    //         </div>
    //       </div>
    //       <div className="text-center md:block hidden">
    //         <p className="text-gray-600 text-xl">{tool.description}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <>
      <div className=" max-w-[1400px] mx-auto px-2 md:px-3 my-[8rem] ">
        <div className=" text-center w-full mb-[2rem] flex justify-center flex-col items-center  ">
          <h2 className=" text-[1.7rem] sm:text-[2rem] md:text-[2.8rem] flex xl:flex-row flex-col w-fit xl:gap-3 ">
            Disse tjenestene nedenfor er{" "}
            <span className=" bg-[#035635] mt-1 text-[#fff] px-3 w-fit mx-auto leading-tight rounded-sm ">
              inkludert i alle nettsidepakker
            </span>
          </h2>
          <p className=" text-gray-500 mt-4 text-base md:text-lg ">
            Uansett om du velger en nettside, nettbutikk eller webapplikasjon,
            får du disse grunnleggende tjenestene inkludert for en komplett og
            profesjonell løsning.
          </p>
        </div>
        <div className=" grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2 ">
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
      <div className=" max-w-[1400px] mx-auto px-2 md:px-3 my-[8rem] ">
        <div className=" text-center w-full mb-[2rem] flex justify-center flex-col items-center  ">
          <h2 className=" text-[1.7rem] sm:text-[2rem] md:text-[2.8rem] flex xl:flex-row flex-col w-fit xl:gap-3 ">
            Disse er tilleggstjenester med{" "}
            <span className=" text-[#035635] border-b-4 border-[#035635]  mt-1 h-fit py-1 px-2 w-fit mx-auto leading-none rounded-sm ">
              ekstra kostnad
            </span>
          </h2>
          <p className=" text-gray-500 mt-4 text-base md:text-lg max-w-[60rem] ">
            For deg som ønsker ekstra funksjonalitet eller skreddersydde
            løsninger, tilbyr vi disse tilleggstjenestene. Merk at noen
            kostnader er engangsbeløp, mens andre kan være løpende på månedlig
            basis
          </p>
        </div>
        <div className=" grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2 ">
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
    <div className=" bg-[#7BDCB5] min-h-[100vh] flex flex-col justify-center md:processBg md:px-3 px-2 py-[2rem] ">
      <div className=" text-center text-[2rem] md:text-[2.8rem] lg:text-[3.5rem] leading-tight font-semibold ">
        <h2>Prosessen med oss er kjempeenkel, vi skreddersyr løsningen.</h2>
        <h2 className=" text-[#fff] ">Du slipper stress.</h2>
      </div>
      <div className=" max-w-[1400px] mt-[5rem] lg:mt-[10rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
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
