import Image from "next/image";
import Link from "next/link";
import NewImg1 from "@/assets/newImg1.webp";
import NewImg2 from "@/assets/newImg2.webp";
import NewImg3 from "@/assets/newImg3.webp";
import { MdArrowForward } from "react-icons/md";

const OfferSection = () => {
  

  
  return (
    

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
    <Link href={`${path}`} title={`Les mer om ${title}`} tabIndex={0} className=" shadow-[0_0_5px_1px_rgba(128,128,128,0.6)] rounded-md group ">
      <div className=" w-full h-[17rem] md:h-[20rem] overflow-hidden  ">
        <Image
          src={img}
          alt={`${title} illustrasjon`}
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
