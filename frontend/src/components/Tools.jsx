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
import {
  FaChartLine,
  FaLaptopCode,
  FaPaintBrush,
  FaRegComments,
} from "react-icons/fa";
import {
  MdArrowForward,
  MdCampaign,
  MdDevices,
  MdOutlineContactMail,
  MdSecurity,
} from "react-icons/md";
import "@/styles//style.css";
import { IoIosArrowRoundForward, IoIosStar } from "react-icons/io";
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
          <h6 className=" text-gray-500 mt-4 text-base md:text-lg max-w-[50rem] mx-auto ">
            Uansett om du velger en nettside, nettbutikk eller webapplikasjon,
            får du disse grunnleggende tjenestene inkludert for en komplett og
            profesjonell løsning.
          </h6>
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
          <h6 className=" text-gray-500 mt-4 text-base md:text-lg max-w-[60rem] ">
            For deg som ønsker ekstra funksjonalitet eller skreddersydde
            løsninger, tilbyr vi disse tilleggstjenestene. Merk at noen
            kostnader er engangsbeløp, mens andre kan være løpende på månedlig
            basis
          </h6>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 ">
          <Card
            icon={<MdCampaign />}
            title="Markedsføring"
            description="Strategier og kampanjer for å nå ut til målgruppen din på ulike plattformer."
            btn="Lær mer om markedsføring"
            path="/markedsforing"
          />
          <Card
            icon={<FaChartLine />}
            title="Avansert Seo"
            description="Dybdeoptimalisering for bedre synlighet og rangering på søkemotorer."
            btn="Utforsk SEO-strategier"
            path="/seo"
          />
          <Card
            icon={<FaPaintBrush />}
            title="Grafisk design"
            description="Design av logo, visuelle profiler og annet grafisk materiale for merkevaren din."
            btn="Se våre designløsninger"
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
      <div className=" text-[2rem] text-[#035635] w-[2.8rem] md:w-[3.5rem] h-[2.8rem] md:h-[3.5rem] flex items-center justify-center p-2 rounded-full bg-[#d3d3d3] ">
        {/* <Image src={icon} alt="Web Icon" loading="lazy" className=" w-full h-full  object-cover " /> */}
        {icon}
      </div>
      <div>
        <div className=" mt-1 text-[1.3rem] md:text-[1.5rem] font-semibold text-[#035635] ">
          {title}
        </div>
        <p className=" mt-2 text-gray-700 text-base md:text-lg ">
          {description}
        </p>
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
    <div className=" flex flex-col justify-center md:processBg md:px-3 px-2 pt-[1rem] pb-[3rem] ">
      <div className=" text-center text-[2rem] md:text-[2.8rem] lg:text-[3.4rem] leading-tight font-semibold ">
        <div>Prosessen med oss er kjempeenkel, vi skreddersyr løsningen.</div>
        <div className=" text-[#17DB4F] ">Du slipper stress.</div>
      </div>
      <div className=" 2xl:max-w-[1400px] max-w-[1200px] mt-[5rem] lg:mt-[10rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
        <div className="relative">
          <div className="absolute hidden lg:block -top-20 -right-36 z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 180 120"
              className="w-48 h-32 stroke-[#17DB4F] fill-none"
            >
              {/* Curved dashed line */}
              <path
                d="M5,70 C50,40 80,40 100,60"
                className="stroke-[#17DB4F]"
                strokeWidth="2"
                strokeDasharray="5,5" /* Adjust dash spacing for better visibility */
                fill="none"
              />
              {/* Arrowhead */}
              <path
                d="M95,57 L106,63 L96,69 Z"
                className="fill-[#17DB4F]"
                stroke="#17DB4F"
                strokeWidth="1"
                transform="rotate(50, 100, 70)"
              />
            </svg>
          </div>
          <ProcessCard
            title="Send inn kontaktskjema"
            description="Vi vil deretter ta kontakt med deg for å tilby hjelp og veiledning i å finne den optimale løsningen som passer best for deg"
            icon={<MdOutlineContactMail />}
          />
        </div>
        <div className="relative">
          <div className="absolute hidden lg:block -top-20 -right-36 z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 180 120"
              className="w-48 h-32 stroke-[#17DB4F] fill-none"
            >
              {/* Curved dashed line */}
              <path
                d="M5,70 C50,40 80,40 100,60"
                className="stroke-[#17DB4F]"
                strokeWidth="2"
                strokeDasharray="5,5" /* Adjust dash spacing for better visibility */
                fill="none"
              />
              {/* Arrowhead */}
              <path
                d="M95,57 L106,63 L96,69 Z"
                className="fill-[#17DB4F]"
                stroke="#17DB4F"
                strokeWidth="1"
                transform="rotate(50, 100, 70)"
              />
            </svg>
          </div>
          <ProcessCard
            title="Del dine ønsker og behov"
            description="Når du har valgt din nettsidepakke, sender du over informasjon om hva du ønsker å ha med på din nye nettside."
            icon={<FaRegComments />}
          />
        </div>
        <div className="relative">
          <div className="absolute hidden lg:block -top-20 -right-36 z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 180 120"
              className="w-48 h-32 stroke-[#17DB4F] fill-none"
            >
              {/* Curved dashed line */}
              <path
                d="M5,70 C50,40 80,40 100,60"
                className="stroke-[#17DB4F]"
                strokeWidth="2"
                strokeDasharray="5,5" /* Adjust dash spacing for better visibility */
                fill="none"
              />
              {/* Arrowhead */}
              <path
                d="M95,57 L106,63 L96,69 Z"
                className="fill-[#17DB4F]"
                stroke="#17DB4F"
                strokeWidth="1"
                transform="rotate(50, 100, 70)"
              />
            </svg>
          </div>
          <ProcessCard
            title="Vi lager din nye nettside"
            description="Vårt team designer en attraktiv og brukervennlig nettside for dine kunder. Vi skriver også teksten basert på den informasjonen du deler med oss."
            icon={<BiCodeCurly />}
          />
        </div>
        <ProcessCard
          title="Du godkjenner, vi lanserer"
          description="Vi samarbeider med deg gjennom hele prosessen, og vi lanserer ikke nettsiden før du er fornøyd og har gitt din godkjennelse."
          icon={<RiRocketLine />}
        />
      </div>
    </div>
  );
};

// const  Process =() => {
//   const options = [
//     { id: 1, title: "OPTIONS 01", icon: "🔍" },
//     { id: 2, title: "OPTIONS 02", icon: "💡" },
//     { id: 3, title: "OPTIONS 03", icon: "📈" },
//     { id: 4, title: "OPTIONS 04", icon: "🎯" },
//   ];

//   return (
//     <div className="  px-4">
//       <h2 className="text-[2.5rem] relative text-center font-semibold text-gray-700 uppercase tracking-wide mb-6">
//   <span className="relative bg-white px-2 z-50">BUSINESS INFOGRAPHIC</span>
//   <div className="absolute left-0 right-0 top-[50%] h-[2px] bg-black w-full z-30"></div>
// </h2>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl">
//         {options.map((option) => (
//           <div key={option.id} className="relative bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all hover:scale-105">
//             <div className="absolute top-[-20px] left-[-20px] bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl">
//               {option.icon}
//             </div>
//             <h3 className="text-blue-500 font-bold text-lg mt-8">{option.title}</h3>
//             <p className="text-gray-500 text-sm mt-2">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const Process = () => {
//   return (
//     <div className=" bg-[#7BDCB5] min-h-[1000px] flex flex-col justify-center md:processBg md:px-3 px-2 py-[2rem] ">
//       <div className=" text-center text-[2rem] md:text-[2.8rem] lg:text-[3rem] leading-tight font-semibold ">
//         <div>Prosessen med oss er kjempeenkel, vi skreddersyr løsningen.</div>
//         <div className=" text-[#fff] ">Du slipper stress.</div>
//       </div>
//       <div className=" 2xl:max-w-[1400px] max-w-[1200px] mt-[5rem] lg:mt-[10rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
//         <div className="relative">
//           <div className="absolute hidden lg:block -top-20 -right-36 z-50">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 180 120"
//               className="w-48 h-32 stroke-white fill-none"
//             >
//               {/* Curved dashed line */}
//               <path
//                 d="M5,70 C50,40 80,40 100,60"
//                 className="stroke-white"
//                 strokeWidth="2"
//                 strokeDasharray="5,5" /* Adjust dash spacing for better visibility */
//                 fill="none"
//               />
//               {/* Arrowhead */}
//               <path
//                 d="M95,57 L106,63 L96,69 Z"
//                 className="fill-white"
//                 stroke="white"
//                 strokeWidth="1"
//                 transform="rotate(50, 100, 70)"
//               />
//             </svg>
//           </div>
//           <ProcessCard
//             title="Send inn kontaktskjema"
//             description="Vi vil deretter ta kontakt med deg for å tilby hjelp og veiledning i å finne den optimale løsningen som passer best for deg"
//             icon={ProcessIcon1}
//           />
//         </div>
//         <div className="relative">
//           <div className="absolute hidden lg:block -top-20 -right-36 z-50">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 180 120"
//               className="w-48 h-32 stroke-white fill-none"
//             >
//               {/* Curved dashed line */}
//               <path
//                 d="M5,70 C50,40 80,40 100,60"
//                 className="stroke-white"
//                 strokeWidth="2"
//                 strokeDasharray="5,5" /* Adjust dash spacing for better visibility */
//                 fill="none"
//               />
//               {/* Arrowhead */}
//               <path
//                 d="M95,57 L106,63 L96,69 Z"
//                 className="fill-white"
//                 stroke="white"
//                 strokeWidth="1"
//                 transform="rotate(50, 100, 70)"
//               />
//             </svg>
//             {/* <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 180 120"
//               className="w-48 h-32 stroke-white fill-none"
//             >

//               <path
//                 d="M5,70 C50,40 80,40 100,60"
//                 className="stroke-white"
//                 strokeWidth="2"
//                 strokeDasharray="5,5"
//                 fill="none"
//               />

//               <path
//                 d="M95,57 L106,63 L96,69 Z"
//                 className="fill-white"
//                 stroke="white"
//                 strokeWidth="1"
//                 transform="rotate(50, 100, 70)"
//               />
//             </svg> */}
//           </div>
//           <ProcessCard
//             title="Del dine ønsker og behov for din nye nettside"
//             description="Når du har valgt din nettsidepakke, sender du over informasjon om hva du ønsker å ha med på din nye nettside."
//             icon={ProcessIcon2}
//           />
//         </div>
//         <div className="relative">
//           <div className="absolute hidden lg:block -top-20 -right-36 z-50">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 180 120"
//               className="w-48 h-32 stroke-white fill-none"
//             >
//               {/* Curved dashed line */}
//               <path
//                 d="M5,70 C50,40 80,40 100,60"
//                 className="stroke-white"
//                 strokeWidth="2"
//                 strokeDasharray="5,5" /* Adjust dash spacing for better visibility */
//                 fill="none"
//               />
//               {/* Arrowhead */}
//               <path
//                 d="M95,57 L106,63 L96,69 Z"
//                 className="fill-white"
//                 stroke="white"
//                 strokeWidth="1"
//                 transform="rotate(50, 100, 70)"
//               />
//             </svg>
//           </div>
//           <ProcessCard
//             title="Vi lager din nye nettside"
//             description="Vårt team designer en attraktiv og brukervennlig nettside for dine kunder. Vi skriver også teksten basert på den informasjonen du deler med oss."
//             icon={ProcessIcon3}
//           />
//         </div>
//         <ProcessCard
//           title="Du godkjenner, vi lanserer"
//           description="Vi samarbeider med deg gjennom hele prosessen, og vi lanserer ikke nettsiden før du er fornøyd og har gitt din godkjennelse."
//           icon={ProcessIcon4}
//         />
//       </div>
//     </div>
//   );
// };

const ProcessCard = ({ title, description, icon }) => {
  return (
    <div className=" bg-[#fff] h-full relative text-center py-6 px-4 rounded-lg overflow-hidden ">
      <div className=" flex justify-center w-full mb-[1rem] ">
        <div className=" flex text-[2.5rem] border-2 border-[#17DB4F] text-[#17DB4F] rounded-full p-3 ">
          {icon}
        </div>
      </div>
      <div className=" relative z-30 text-[1.5rem] font-semibold leading-tight  ">
        {title}
      </div>
      <p className=" relative z-30 text-xl mt-4 text-gray-600 ">
        {description}
      </p>
      {/* <div className=" absolute -bottom-8  right-0 z-10 ">
        <Image
          src={icon}
          alt="Process Icon"
          className=" w-fit h-[8rem] object-contain opacity-50  "
        />
      </div> */}
    </div>
  );
};

export const Team = () => {
  return (
    <>
      <div className="grid  lg:px-0 lg:grid-cols-2 text-white ">
        <div className=" flex flex-col justify-center gap-5 pt-2 md:p-3">
          <div className=" md:px-5 p-2 py-5 rounded-md mx-2 ">
            <div className=" flex flex-col items-center ">
              <TbUsersGroup className=" text-[2rem] mb-1 " />
              <h5 className="text-[30px] leading-tight pb-5 font-semibold">
                Teamet bak sidesone
              </h5>
            </div>
            {/* bg-[#0b462ece] */}
            <h6 className=" text-[20px] text-gray-100 leading-normal text-center 2xl:leading-8">
              Hos Sidesone er vi eksperter på å skape digitale løsninger som
              gjør en forskjell for både enkeltpersoner og bedrifter. Vi forstår
              at behovene kan variere - fra små bedrifter og gründere som
              trenger en funksjonell og tiltalende nettside, til større
              virksomheter som krever avanserte webapplikasjoner og helhetlige
              digitale strategier. Uansett hvem du er, eller hvilken bransje du
              opererer i, er vårt mål alltid det samme: å levere løsninger som
              overgår forventningene.
            </h6>
          </div>
          <div className=" md:px-5 p-2 py-5 rounded-md mx-2  ">
            <p className=" text-[20px] text-gray-100 leading-normal text-center 2xl:leading-8">
              Vi utvikler profesjonelle nettsider, nettbutikker og webapper, og
              tilbyr et bredt spekter av tjenester, inkludert markedsføring, SEO
              og grafisk design. Vi setter samarbeid i sentrum og skreddersyr
              løsninger som er tilpasset dine spesifikke behov. Gjennom tett
              dialog følger vi deg nøye opp gjennom hele prosessen - fra de
              første planleggingsmøtene til lansering og langt inn i
              driftsfasen. For oss er det ikke bare viktig å levere et ferdig
              produkt; vi ønsker å bygge langsiktige relasjoner og være en
              pålitelig partner du kan stole på.
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
        <div className=" md:min-h-[50vh] ">
          <figure className="w-full h-full flex items-center justify-center overflow-hidden">
            <Image
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
              src={coding}
              alt={"Coding"}
              className="lg:w-full w-auto lg:h-full h-auto object-contain lg:object-cover md:rounded-md "
            />
          </figure>
        </div>
      </div>
    </>
  );
};

// const Satisfaction = () => {
//   return (
//     <div className=" relative bg-[#fff] text-center leading-tight pt-[1rem] pb-[2rem] ">
//       <div className=" flex justify-center ">
//         <div className=" absolute z-10 2xl:max-w-[1400px] max-w-[1200px] -bottom-[15%] md:-bottom-[55%]  w-full mx-auto flex justify-end  ">
//           <Image
//             src={SatisfactionIcon}
//             alt="Satisfaction Icon"
//             loading="lazy"
//             className=" w-[6rem] md:w-[17rem] object-contain opacity-30  "
//           />
//         </div>
//       </div>
//       <div className=" text-[2rem] sm:text-[3rem] md:text-[4rem] font-medium relative z-50 ">
//         100% Fornøydgaranti
//       </div>
//       <p className=" text-lg text-gray-500 mt-5 relative z-50 ">
//         Vi er dedikerte til å levere et resultat du er stolt av. Derfor tilbyr
//         vi en garanti for at du blir helt fornøyd med nettsiden. Du kan gjør
//         endringer og justeringer til du er 100% tilfreds, før vi går live.
//       </p>
//       <p className=" text-lg text-gray-500 relative z-50 mt-2 "></p>
//     </div>
//   );
// };

export const Review = async () => {
  let reviews = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/get-all-review`
    );

    if (!response.ok) {
      console.log("Faield to all reviews on home page");
      return [];
    }

    const data = await response.json();
    reviews = data?.reviews || [];
  } catch (error) {
    console.error("Error fetching all reviews on home hape:", error);
  }

  // console.log(reviews);

  return (
    <section id="reviews" className=" py-16 ">
      <div className=" flex flex-col max-w-[30rem] px-2 mx-auto text-center  ">
        <h2 className=" text-[2rem] md:text-[2.5rem] font-medium ">
          Klientanmeldelser
        </h2>
        <p className=" text-lg md:text-xl ">
          Se hva våre fornøyde kunder sier om sin opplevelse med oss.
        </p>
      </div>
      <ReviewComponent reviews={reviews} />
    </section>
  );
};

// export const Booking = () => {
//   return (
//     <div className=" lg:mb-0 z-50 relative  lg:px-0 grid lg:grid-cols-2 ">
//       <div className="order-2 lg:order-1  ">
//         <div className="w-full h-auto md:h-[700px] overflow-hidden ">
//           <Image
//             loading="lazy"
//             placeholder="blur"
//             src={booking}
//             alt={"Booking Img"}
//             width={800}
//             height={800}
//             className="w-full h-full object-cover "
//           />
//         </div>
//       </div>

//       <div className="bg-[#7BDCB5] py-10  order-1  lg:order-2 flex items-center justify-center text-center">
//         <div className="space-y-5 leading-tight">
//           <h3 className="text-[40px] lg:text-[56px] font-medium">Spørsmål?</h3>
//           <div>
//             <p className="text-[24px] lg:text-[32px] font-medium">
//               Ring oss: +47 13 65 07
//             </p>
//             <p className="text-[24px] lg:text-[32px] font-medium">
//               Mail oss: Kontakt@sidesone.no
//             </p>
//           </div>
//           <p className="text-[24px] lg:text-[32px] font-medium">Eller</p>
//           <p className="text-[24px] lg:text-[32px] font-medium">
//             Book en konsultasjon
//           </p>
//           <div className="flex justify-center py-5 lg:my-3 mt-6">
//             <Link
//               href={"/book-now"}
//               className="w-60 bg-black transition-all flex items-center gap-4 justify-center duration-300 ease-in-out active:scale-95 text-white p-3 rounded-full"
//             >
//               Book Møte
//               <span className=" sr-only ">Planlegg En Avtale</span>
//               <div className="w-2 h-2 bg-[#17DB4F] rounded-full animate-[ping_2s_ease-in-out_infinite]"></div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const ContactUs = () => {
  return (
    <div className=" relative pb-[2rem] overflow-hidden ">
      <div className="absolute inset-0 z-[100] overflow-hidden">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
        >
          {/* First Curved Line */}
          <path
            fill="none"
            stroke="#72C04B"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M-100,300 C150,600 600,50 900,500 C1200,950 1600,100 1900,500"
          />

          {/* Second Curved Line */}
          <path
            fill="none"
            stroke="#72C04B"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M-200,400 C100,100 500,700 800,300 C1100,-50 1400,600 1700,200"
          />

          {/* Third Curved Line */}
          <path
            fill="none"
            stroke="#72C04B"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M-50,500 C250,800 700,150 1100,600 C1500,1050 1800,300 2100,600"
          />

          {/* Fourth Curved Line */}
          <path
            fill="none"
            stroke="#72C04B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M-150,200 C50,500 400,0 700,400 C1000,800 1400,50 1700,500"
          />
        </svg>
      </div>
      <div className=" max-w-[1400px] mx-auto lg:mb-0 relative bg-[#F7F7F7]  md:p-[4rem]  rounded-2xl grid lg:grid-cols-2 ">
        <div className="order-2 lg:order-1 p-[1rem] md:p-[2rem] z-[200] flex items-center ">
          <div className="w-full overflow-hidden ">
            <Image
              loading="lazy"
              placeholder="blur"
              src={booking}
              alt={"Booking Img"}
              width={900}
              height={900}
              className="w-full h-full object-contain z-[200] rounded-md "
            />
          </div>
        </div>
        {/* bg-[#7BDCB5] */}
        <div className=" py-10 px-5  order-1 z-[200]  lg:order-2 flex items-center justify-center w-full text-center ">
          <div className="space-y-8 leading-tight">
            <h3 className="text-[40px] lg:text-[56px] font-medium">
              Spørsmål?
            </h3>
            <div className=" space-y-2 ">
              <p className="text-[24px] lg:text-[32px] flex items-center justify-center gap-3 ">
                {/* <IoCallOutline className=" mt-1 " /> */}
                <span>Ring oss:</span>
                <span>+47 13 65 07</span>
              </p>
              <p className="text-[24px] lg:text-[32px] flex items-center justify-center gap-3">
                {/* <IoMailOutline className=" mt-1 " />{" "} */}
                <span>Mail oss:</span>
                <span>kontakt@sidesone.no</span>
              </p>
            </div>
            {/* <p className="text-[24px] lg:text-[32px] font-medium">Eller</p> */}
            <div className=" pt-4 space-y-3 ">
              <p className="text-[24px] lg:text-[32px]  font-medium">Eller</p>
              <p className="text-[24px] lg:text-[32px]  font-medium">
                Book en konsultasjon
              </p>
              <div className="flex">
                <Link
                  href={"/book-now"}
                  className="w-full bg-[#035635] transition-all flex items-center gap-4 justify-center duration-300 ease-in-out active:scale-95 text-white p-3 rounded-full"
                >
                  Book Møte
                  <span className=" sr-only ">Planlegg En Avtale</span>
                  <div className="w-2 h-2 bg-[#17DB4F] rounded-full animate-[ping_2s_ease-in-out_infinite]"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { FcGoogle } from "react-icons/fc";
import ReviewComponent from "./ReviewComponent";
import { BiCodeCurly } from "react-icons/bi";
import { RiRocketLine } from "react-icons/ri";

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

        <div className="flex flex-col gap-6 mt-14 md:mt-5">
          <Link
            href="/nettside"
            className="border-2 px-2 md:px-0 whitespace-none md:whitespace-normal rounded w-fit md:w-[250px] lg:w-[300px] justify-center text-base lg:text-lg font-medium flex items-center gap-2 md:gap-4 hover:border-white border-[#dadada] md:h-[3rem] h-[2.8rem] transition-transform transform  group"
          >
            Trenger du en nettside?
            <MdArrowForward className="transition-transform md:text-[1.5rem] mt-1 text-[1.2rem] transform group-hover:translate-x-2" />
          </Link>
          <Link
            href={"#reviews"}
            className=" text-[1.1rem] md:text-[1.4rem] group w-fit "
          >
            <div className=" flex items-center gap-2 ">
              <FcGoogle />
              <h5>5/5 Google reviews</h5>
            </div>
            <div className=" flex items-center gap-4 mt-1 ">
              <div className=" flex items-center gap-1 text-yellow-400 ">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
              <MdArrowForward className=" group-hover:ml-3 transition-all duration-100 ease-linear " />
            </div>
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
    <div className=" 2xl:2xl:max-w-[1400px] max-w-[1200px]  mx-auto px-2 md:px-3  my-[3rem] ">
      <h3 className=" text-[2rem] md:text-[2.8rem] mb-4 ">Hva vi tilbyr</h3>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 ">
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
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className=" px-2 pt-2 pb-4 flex flex-col justify-between flex-grow ">
        <div>
          <p className=" text-[1.7rem] md:text-[2rem] font-medium">{title}</p>
          <p className="  md:text-lg text-gray-500">{description}</p>
        </div>
        <div
          className={`${
            btn ? "" : "hidden"
          } group hover:text-[#035635] transition-all duration-300 ease-linear border-b-2 border-[#035635] w-fit mt-3 md:mt-5 flex items-center gap-1`}
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

import Img1 from "@/assets/Img1.webp";
import Img2 from "@/assets/Img2.webp";
import {
  IoCallOutline,
  IoCheckmarkCircle,
  IoMailOutline,
} from "react-icons/io5";

export const NeedProfessitionSite = () => {
  return (
    <>
      <div className=" max-w-[1600px] mx-auto px-2 ">
        <div className=" -mt-16 grid  lg:px-0 grid-cols-1 lg:grid-cols-2 gap-6 text-black ">
          <div className=" flex flex-col justify-center gap-5 pt-2 md:p-3">
            <div className="text-[30px] leading-tight pb-5 font-semibold">
              <span>Hvorfor trenger du en</span>{" "}
              <span className=" text-[#035635] border-l-4 border-[#035635] pl-1 bg-gradient-to-r from-[#035635]/10 to-transparent pb-1 ">
                Profesjonell nettside
              </span>
            </div>
            {/* bg-[#0b462ece] */}
            <h6 className=" ">
              Nettsiden din er bedriftens digitale ansikt utad. Den skaper
              tillit, gir et solid forsteinntrykk og hjelper deg med å tiltrekke
              nye kunder. En profesjonell nettside er ikke bare en investering -
              det er en nødvendighet for å lykkes i dagens digitale verden.
            </h6>
            <p className=" font-semibold text-[1.2rem] ">
              Her er noen grunner til hvorfor din bedrift trenger en
              profesjonell nettside:
            </p>
            <div className=" flex items-center flex-wrap gap-6 mt-[1.5rem] ">
              <div className=" flex items-center gap-2 font-medium ">
                <span className=" w-4 h-4 rounded-full bg-[#035635] "></span>
                <span>Økt konvertering og salg</span>
              </div>
              <div className=" flex items-center gap-2 font-medium ">
                <span className=" w-4 h-4 rounded-full bg-[#035635] "></span>
                <span>Bygger troverdighet og tillit</span>
              </div>
              <div className=" flex items-center gap-2 font-medium ">
                <span className=" w-4 h-4 rounded-full bg-[#035635] "></span>
                <span>Tiltrekker nye kunder</span>
              </div>
              <div className=" flex items-center gap-2 font-medium ">
                <span className=" w-4 h-4 rounded-full bg-[#035635] "></span>
                <span>Direkte kommunikasjon med kunder</span>
              </div>
              <div className=" flex items-center gap-2 font-medium ">
                <span className=" w-4 h-4 rounded-full bg-[#035635] "></span>
                <span>Konkurransefortrinn</span>
              </div>
              <div className=" flex items-center gap-2 font-medium ">
                <span className=" w-4 h-4 rounded-full bg-[#035635] "></span>
                <span>Presentasjon av produkter og tjenester</span>
              </div>
            </div>
            <Link
              href={``}
              className=" w-fit mt-4 text-[#fff] hover:text-black px-8 py-2 rounded-full bg-[#035635] border-2 border-[#035635] hover:bg-transparent transition-all duration-300 ease-in-out "
            >
              Få din nettside
            </Link>
          </div>
          <div className=" ">
            <figure className="w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
                src={Img1}
                alt={"Coding"}
                className="lg:w-full w-auto md:object-cover object-contain h-auto md:h-[500px] rounded-md "
              />
            </figure>
          </div>
        </div>

        <div className=" mt-8 grid  lg:px-0 grid-cols-1 lg:grid-cols-2 gap-8 text-black ">
          <div className=" ">
            <figure className="w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
                src={Img2}
                alt={"Coding"}
                className="lg:w-full w-auto md:object-cover object-contain  h-auto md:h-[500px] rounded-md "
              />
            </figure>
          </div>

          <div className=" flex flex-col justify-center gap-5 pt-2 md:p-3">
            <div className="text-[30px] leading-tight pb-5 font-semibold">
              <span>Hvorfor velge </span>{" "}
              <span className=" text-[#035635] border-l-4 border-[#035635] pl-1 bg-gradient-to-r from-[#035635]/10 to-transparent pb-1 ">
                Sidesone
              </span>{" "}
              <span className=" ">som nettside leverandør?</span>
            </div>
            {/* bg-[#0b462ece] */}
            <p className=" ">
              Hos Sidesone får du mer enn bare en nettside - du får en komplett
              digital løsning skreddersydd for din bedrift. Vi kombinerer
              moderne design, optimal ytelse og smart funksjonalitet for å sikre
              at nettsiden din skiller seg ut.
            </p>

            <div className=" flex flex-col gap-3 mt-[1.5rem] ">
              <div className=" flex items-center gap-2 font-medium p-2 rounded-full bg-gradient-to-r from-[#035635]/10 to-transparent ">
                <span className="  text-[#035635] text-[1.6rem] ">
                  <IoCheckmarkCircle />
                </span>
                <span className=" whitespace-nowrap ">100% fornøydgaranti</span>
              </div>
              <div className=" flex items-center gap-2 font-medium p-2 rounded-full bg-gradient-to-r from-[#035635]/10 to-transparent ">
                <span className="  text-[#035635] text-[1.6rem] ">
                  <IoCheckmarkCircle />
                </span>
                <span className=" whitespace-nowrap ">8+ års erfaring</span>
              </div>
              <div className=" flex items-center gap-2 font-medium p-2 rounded-full bg-gradient-to-r from-[#035635]/10 to-transparent ">
                <span className="  text-[#035635] text-[1.6rem] ">
                  <IoCheckmarkCircle />
                </span>
                <span className=" whitespace-nowrap ">
                  150+ fullførte prosjekter
                </span>
              </div>
            </div>
            <Link
              href={``}
              className=" w-fit mt-4 text-[#fff] hover:text-black px-8 py-2 rounded-full bg-[#035635] border-2 border-[#035635] hover:bg-transparent transition-all duration-300 ease-in-out "
            >
              Ta Kontakt
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
