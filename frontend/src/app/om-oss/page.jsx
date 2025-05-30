import HomeImg from "@/assets/HeroImg.webp";
import figma from "@/assets/Figma.png";
import mern from "@/assets/mern.png";
import web from "@/assets/web.png";
import Image from "next/image";
import React from "react";
import "../../styles/style.css";
import { Values } from "@/utils/UtilityComponent";
const toolsData = [
  {
    imgSrc: figma,
    imgAlt: "Figma",
    title: "Figma",
    description:
      "Vi bruker Figma for å lage brukervennlige og estetiske design som oppfyller både funksjonelle og visuelle behov.",
  },
  {
    imgSrc: mern,
    imgAlt: "MERN",
    title: "WordPress eller Mern",
    description:
      "Avhengig av prosjektets kompleksitet bruker vi enten WordPress, som er ideelt for fleksible og skalerbare nettsider, eller MERN-stack (MongoDB, Express, React, Node.js) for mer komplekse og skreddersydde webapplikasjoner.",
  },
  {
    imgSrc: web,
    imgAlt: "Webhotell",
    title: "Webhotell",
    description:
      "Vi tilbyr en dedikert serverbase eksklusivt for våre kunder, som sikrer høy hastighet, pålitelighet og sikkerhet.",
  },
];

const page = () => {
  return (
    <div>
      <div className=" 2xl:max-w-[1400px] max-w-[1200px] mx-auto">

        <div className="flex md:h-[40rem]   items-center mt-[142px]  justify-between">
          <div className="md:w-[35%] w-[80%] ">
            <div className="flex w-full md:h-full items-center md:items-end justify-center">
              <Image
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
                src={HomeImg}
                alt="Person"
                className=" w-auto  md:w-full h-auto scale-125 md:scale-[1.15] z-10 object-contain"
              />
            </div>
          </div>
          <div className="md:w-[55%] w-full  z-50 md:bg-transparent md:py-0 py-3 md:pr-3 pr-0 md:px-0 px-2  ">
            <div className="text-[1rem]  text-center md:text-start md:text-[1.8rem] lg:text-[2.3rem] font-semibold">
              «Å utvikle digitale løsninger som både ser bra ut og skaper
              resultater for kundene våre, er det som driver oss hver dag.»
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col md:h-[40rem]  md:flex-row items-center mt-[110px] lg:mt-[142px]  justify-between">
          <div className="md:w-[35%] ">
            <div className="flex w-full md:h-full items-center md:items-end justify-center">
              <Image
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
                src={HomeImg}
                alt="Person"
                className=" w-auto  md:w-full h-auto md:scale-[1.15] z-10 object-contain"
              />
            </div>
          </div>
          <div className="md:w-[55%] w-full md:mt-0 -mt-[13rem] z-50 md:bg-transparent bg-slate-50 md:py-0 py-3 md:pr-3 pr-0 md:px-0 px-2  ">
            <div className="text-[1rem]  text-center md:text-start md:text-[1.8rem] lg:text-[2.3rem] font-semibold">
              «Å utvikle digitale løsninger som både ser bra ut og skaper
              resultater for kundene våre, er det som driver oss hver dag.»
            </div>
          </div>
        </div> */}
      </div>
      <div className="bg-[#035635] z-50 relative">
        <div className="grid  items-center  lg:grid-cols-2 mb-16 text-white ">
          <div className=" py-10 px-3 text-center ">
            <div className="text-[30px] mb-10  font-medium ">
              Teamet bak Sidesone har omfattende erfaring innen nettsidedesign
              og utvikling.
            </div>
            <div className=" space-y-7 ">
            <p className="text-gray-100 text-[18px]">
              Hos Sidesone er vi en dedikert webutviklingsbedrift som jobber
              tett med både enkeltpersoner og bedrifter for å skape
              skreddersydde digitale løsninger. Vi er opptatt av å forstå våre
              kunders behov og levere resultater som gir varig verdi. Fra idé
              til lansering og videre oppfølging, sørger vi for at hver prosess
              er personlig og grundig.
            </p>

            <p className="text-[20px] text-gray-100">
              Vi spesialiserer oss på WordPress for fleksible og brukervennlige
              nettsider, og{" "}
              <span className="text-[20px] text-gray-100 font-semibold">
                MERN-stack
              </span>{" "}
              for mer komplekse webapplikasjoner. I tillegg tilbyr vi tjenester
              som SEO, digital markedsføring og grafisk design for å sikre at
              din nettside både presterer og ser profesjonell ut.
            </p>
            <p className="text-[20px] text-gray-100">
              Vi har hatt gleden av å jobbe med både små og store bedrifter,
              samt enkeltpersoner som har hatt ambisjoner om å bygge sin
              digitale tilstedeværelse. Uansett størrelse på prosjektet, er vår
              tilnærming alltid den samme: å levere skreddersydde løsninger som
              møter de spesifikke behovene til hver kunde
            </p>
            <p className="text-[20px] text-gray-100">
              For en trygg og rask brukeropplevelse benytter vi dedikert hosting
              med egne servere. Hos Sidesone er vi stolte av å være en pålitelig
              partner som hjelper din virksomhet å vokse digitalt, uansett
              størrelse eller bransje.
            </p>
            </div>
          </div>
          <div className=" h-full bg-image2"></div>
        </div>
      </div>

      <div>
        <Values />
      </div>

      <ToolsGrid />
    </div>
  );
};

export default page;

const ToolsGrid = () => {
  const highlightKeywords = (text, keywords) => {
    const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");
    return text.split(regex).map((part, index) =>
      keywords.includes(part) ? (
        <span key={index} className="font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const keywordsToBold = ["Figma", "WordPress", "MERN-stack"];

  return (
    <div className=" pb-10 max-w-[1400px] mx-auto px-3 ">
      <div className="flex flex-col gap-2 items-center justify-center mb-10">
        <div className=" text-[2rem] lg:text-[3rem] leading-tight text-gray-800">Verktøy</div>
        <p className=" text-[1.3rem] text-gray-600 text-center ">Verktøyene vi bruker for å skape innovative og effektive nettsider.</p>
      </div>
      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-6">
        {toolsData.map((tool, index) => (
          <div
            key={index}
            className="shadow-[0px_1px_10px_rgba(0,0,0,0.15)] py-[2.5rem] px-[1rem] md:px-[2rem] rounded-xl"
          >
            <div className="  ">
              <div className=" flex items-center gap-4 ">
              <figure
                className={` ${
                  tool.imgAlt === "MERN" ? "w-[90px]" : "w-[40px]"
                } overflow-hidden`}
              >
                <Image
                  src={tool.imgSrc}
                  alt={tool.imgAlt}
                  className="object-contain h-full w-full"
                />
              </figure>
                <div className="text-[1.4rem] font-semibold">{tool.title}</div>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-500 mt-5 text-[1.1rem]">
                {highlightKeywords(tool.description, keywordsToBold)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
