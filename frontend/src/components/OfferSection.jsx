import Image from "next/image";
import Link from "next/link";
import NewImg1 from "@/assets/newImg1.webp";
import NewImg2 from "@/assets/newImg2.webp";
import NewImg3 from "@/assets/newImg3.webp";
import { MdArrowForward } from "react-icons/md";

const OfferSection = () => {
  // const offers = [
  //   {
  //     title: "Nettside",
  //     fontColor: "text-gray-600",
  //     description: `
  //       Vi utvikler nettsider som er funksjonelle, moderne og brukervennlige.
  //       Når det gjelder nettsider, bygger vi informative og brukervennlige
  //       sider som er skreddersydd for dine behov og tilpasset det norske
  //       markedet. Øk vekst og synlighet med en profesjonell nettside.
  //     `,
  //     buttonText: "Få nettside",
  //     backgroundColor: "#7BDCB5",
  //   },
  //   {
  //     title: "Nettbutikk",
  //     fontColor: "text-gray-600",
  //     description: `
  //       Vi tilbyr nettbutikker som gir en enkel og effektiv handelsopplevelse
  //       for kundene dine. Vi fokuserer på å skape et attraktivt design som
  //       fremhever produktene dine og gir en smidig handleopplevelse for kundene.
  //       Vi sørger for riktig fargepalett, tydelig produktinformasjon og optimal
  //       navigasjon.
  //     `,
  //     buttonText: "Få nettbuttik",
  //     backgroundColor: "#FFD0F9",
  //   },
  //   {
  //     title: "Webapplikasjon",
  //     fontColor: "text-gray-100",
  //     description: `
  //       Vi tilbyr skreddersydde webapplikasjoner som gir bedriften din effektive
  //       og brukervennlige digitale løsninger. Når det gjelder webapplikasjoner,
  //       utvikler vi kraftige og brukervennlige løsninger som er skreddersydd for
  //       dine behov. Vi fokuserer på funksjonalitet, design og ytelse.
  //     `,
  //     buttonText: "Få Webapplikasjon",
  //     backgroundColor: "#0B2927",
  //     textColor: "text-white",
  //   },
  // ];


  
  return (
    // <div className=" px-2 md:px-3 -mt-24 lg:-mt-28 mb-[3rem] max-w-[1400px] mx-auto">
    //   <div>
    //     <h2 className="font-medium px-4 py-3 text-[40px]">Hva vi tilbyr</h2>
    //   </div>
    //   <div className=" gap-8 grid lg:grid-cols-3 grid-cols-1 ">
    //     <div className={` p-3 lg:p-5 rounded-sm lg:max-w-[520px] bg-[#7BDCB5]`}>
    //       <h2 className="text-[34px]  pb-5 text-[#1e293b] font-Montserrat font-semibold">Nettside</h2>
    //       <div className="lg:min-h-[180px]">
    //         <div
    //           className={` text-[18px] md:text-xl flex  flex-col gap-6 text-[#334155] leading-tight whitespace-pre-line`}
    //         >
    //           <p className=" italic ">
    //             Vi utvikler nettsider som er funksjonelle, moderne og
    //             brukervennlige.{" "}
    //           </p>
    //           <p>
    //             Når det gjelder nettsider, bygger vi informative og
    //             brukervennlige sider som er skreddersydd for dine behov og
    //             tilpasset det norske markedet. Øk vekst og synlighet med en
    //             profesjonell nettside.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex justify-center my-3 mt-12">
    //         <Link
    //           href={"/nettside"}
    //           className="w-60 bg-black text-white p-3 flex justify-center transition-all duration-300 ease-in-out active:scale-95 rounded-full"
    //         >
    //           Få nettside
    //         </Link>
    //       </div>
    //     </div>

    //     <div className={`p-3 lg:p-5 lg:max-w-[520px] rounded-sm bg-[#FFD0F9]`}>
    //       <h2 className="text-[34px] text-[#1e293b] pb-5 font-Montserrat font-semibold">Nettbutikk</h2>
    //       <div className="lg:min-h-[180px]">
    //         <div
    //           className={` text-[18px] md:text-xl flex flex-col gap-6 text-[#334155] leading-tight whitespace-pre-line`}
    //         >
    //           <p className=" italic ">
    //             Vi tilbyr nettbutikker som gir en enkel og effektiv
    //             handelsopplevelse for kundene dine.{" "}
    //           </p>
    //           <p>
    //             Vi fokuserer på å skape et attraktivt design som fremhever
    //             produktene dine og gir en smidig handleopplevelse for kundene.
    //             Vi sørger for riktig fargepalett, tydelig produktinformasjon og
    //             optimal navigasjon.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex justify-center my-3 mt-8">
    //         <Link
    //           href={"/nettbuttik"}
    //           className="w-60 bg-black text-white p-3 flex justify-center transition-all duration-300 ease-in-out active:scale-95 rounded-full"
    //         >
    //           Få nettbuttik
    //         </Link>
    //       </div>
    //     </div>

    //     <div className={`p-3 lg:p-5 lg:max-w-[520px] text-[#fff] rounded-sm bg-[#0B2927]`}>
    //       <h2 className="text-[34px]  font-Montserrat pb-5 font-semibold text-white">
    //         Webapplikasjon
    //       </h2>
    //       <div className="lg:min-h-[180px]">
    //         <div
    //           className={` text-[18px] md:text-xl flex flex-col  gap-6  leading-tight whitespace-pre-line`}
    //         >
    //           <p className=" italic ">
    //             Vi tilbyr skreddersydde webapplikasjoner som gir bedriften din
    //             effektive og brukervennlige digitale løsninger.
    //           </p>
    //           <p>
    //             Når det gjelder webapplikasjoner, utvikler vi kraftige og
    //             brukervennlige løsninger som er skreddersydd for dine behov. Vi
    //             fokuserer på funksjonalitet, design og ytelse.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex justify-center my-3 mt-8">
    //         <Link
    //           href={"/webapplikasjon"}
    //           className="w-60 bg-black flex justify-center transition-all duration-300 ease-in-out active:scale-95 text-white p-3 rounded-full"
    //         >
    //           Få Webapplikasjon
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className=" max-w-[1400px] mx-auto px-2 md:px-3 -mt-16 lg:-mt-28 mb-[3rem] ">
      <h2 className=" text-[2.8rem] mb-4 ">Hva vi tilbyr</h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <Card
          img={NewImg1}
          title="Nettside"
          btn="Få nettside"
          path="/nettside"
          description="Vi lager profesjonelle og brukervennlige nettsider som tilpasses dine behov. Enten det er en enkel landingsside eller en mer kompleks løsning, sørger vi for et moderne design og optimal funksjonalitet."
        />
        <Card
          img={NewImg2}
          title="Nettbutikk"
          btn="Få nettbutikk"
          path="/nettbuttik"
          description="Vår ekspertise innen utvikling av nettbutikker gir deg en komplett løsning for salg på nett. Vi fokuserer på brukervennlighet, sikkerhet og integrasjon med betalings- og fraktsystemer."
        />
        <Card
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

export default OfferSection;

const Card = ({ img, title, description, btn, path }) => {
  return (
    <Link href={`${path}`} className=" shadow-[0_0_5px_1px_rgba(128,128,128,0.6)] rounded-md group ">
      <div className=" w-full h-[17rem] md:h-[20rem] overflow-hidden  ">
        <Image
          src={img}
          alt="Service Img"
          loading="lazy"
          className=" w-full h-full object-cover group-hover:scale-110 rounded-t-md transition-scale duration-300 ease-in-out "
        />
      </div>
      <div className=" p-3 ">
        <h3 className=" text-[2rem] font-medium ">{title}</h3>
        <p className=" text-lg text-gray-500 ">{description}</p>
      <div className={` ${btn ? "" : "hidden"} group hover:text-[#035635] transition-all duration-300 ease-linear border-b-2 border-[#035635] w-fit mt-5 flex items-center gap-1  `}>
        <div className=" text-[1.1rem] font-light  " >{btn}</div>
        <MdArrowForward className=" mt-1 group-hover:ml-2 transition-all duration-200 ease-linear " />
        </div>
      </div>


    </Link>
  );
};
