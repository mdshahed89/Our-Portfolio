import HomeImg from "@/assets/HeroImg.webp";
import figma from "@/assets/Figma.png";
import mern from "@/assets/mern.png";
import web from "@/assets/web.png";
import Image from "next/image";
import React from "react";
import "../../styles/style.css";
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
      <div className="px-3 max-w-[1400px] mx-auto lg:px-0">
        <div className="flex flex-col  md:flex-row items-center mt-[110px] lg:mt-[142px]  justify-evenly">
          <div className="md:w-[50%]">
            <div className="flex md:h-[500px] items-center md:items-end justify-center">
              <Image
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
                src={HomeImg}
                alt="Person"
                className="w-full md:w-[350px]  object-contain"
              />
            </div>
          </div>
          <div className="md:w-[50%]  md:px-3 lg:pr-10">
            <h2 className="text-[16px]  text-center md:text-start md:text-[28px] lg:text-[40px] font-semibold">
              «Å utvikle digitale løsninger <br className="hidden lg:flex" />{" "}
              som både ser bra ut og skaper
              <br className="hidden lg:flex" />
              resultater for kundene våre, er
              <br className="hidden lg:flex" /> det som driver oss hver dag.»
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-[#035635]">
        <div className="grid  items-center  lg:grid-cols-2 mb-16 text-white ">
          <div className=" py-5 px-3">
            <h2 className="text-[30px] pb-5  font-semibold">
              Teamet bak Sidesone har omfattende erfaring innen nettsidedesign
              og utvikling.
            </h2>
            <p className="text-gray-100 text-[20px]">
              Hos Sidesone er vi en dedikert webutviklingsbedrift som jobber
              tett med både enkeltpersoner og bedrifter for å skape
              skreddersydde digitale løsninger. Vi er opptatt av å forstå våre
              kunders behov og levere resultater som gir varig verdi. Fra idé
              til lansering og videre oppfølging, sørger vi for at hver prosess
              er personlig og grundig.
            </p>
            <br />
            <br />
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
            <br />
            <p className="text-[20px] text-gray-100">
              Vi har hatt gleden av å jobbe med både små og store bedrifter,
              samt enkeltpersoner som har hatt ambisjoner om å bygge sin
              digitale tilstedeværelse. Uansett størrelse på prosjektet, er vår
              tilnærming alltid den samme: å levere skreddersydde løsninger som
              møter de spesifikke behovene til hver kunde
            </p>
            <br />
            <br />
            <p className="text-[20px] text-gray-100">
              For en trygg og rask brukeropplevelse benytter vi dedikert hosting
              med egne servere. Hos Sidesone er vi stolte av å være en pålitelig
              partner som hjelper din virksomhet å vokse digitalt, uansett
              størrelse eller bransje.
            </p>
          </div>
          <div className=" h-full bg-image2"></div>
        </div>
      </div>

      <ToolsGrid></ToolsGrid>
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
    <div className=" pb-10 ">
      <div className="flex items-center justify-center mb-5">
        <h2 className="font-semibold text-[37px] text-gray-800">Verktøy</h2>
      </div>
      <div className="grid px-5 md:grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-6">
        {toolsData.map((tool, index) => (
          <div
            key={index}
            className="border p-8 min-h-[350px] rounded-lg space-y-3"
          >
            <div className="space-y-3">
              <figure
                className={`h-[50px] ${
                  tool.imgAlt === "MERN" ? "w-[100px]" : "w-[50px]"
                } overflow-hidden`}
              >
                <Image
                  src={tool.imgSrc}
                  alt={tool.imgAlt}
                  className="object-contain h-full w-full"
                />
              </figure>
              <div>
                <h2 className="text-2xl font-semibold">{tool.title}</h2>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-[20px] text-gray-600 font-normal">
                {highlightKeywords(tool.description, keywordsToBold)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
