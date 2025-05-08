import { LogoForm } from "@/components/NettsideForm";
import React from "react";
import Client1 from "@/assets/Client1.png";
import Client2 from "@/assets/Client2.png";
import Client3 from "@/assets/Client3.png";
import Client4 from "@/assets/Client4.png";
import Client5 from "@/assets/Client5.png";
import Client6 from "@/assets/Client6.png";
import Client7 from "@/assets/Client7.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const page = () => {
  const clients = [
    Client1,
    Client2,
    Client3,
    Client4,
    Client5,
    Client6,
    Client7,
  ];

  return (
    <div className=" min-h-[100vh] px-3 lg:px-0 2xl:max-w-[1400px] max-w-[1200px] mx-auto mt-[150px] ">
      <div className="space-y-10">
        <h3 className="text-3xl md:text-4xl text-gray-700 font-medium">
          Vi Lager Grafisk Design og Logoer som Passer Dine Behov
        </h3>
        <p className="text-[20px] font-normal text-gray-500">
          Enten du driver en liten bedrift, en stor virksomhet, eller har et
          personlig prosjekt, kan vi hjelpe deg! Vi tilbyr ikke bare logoer, men
          også grafisk design for nettsider, sosiale medier, annonser, og andre
          visuelle plattformer.
        </p>
        <p className="text-[20px] font-normal text-gray-500">
          Har du allerede en nettside, eller trenger du design for sosiale
          medier? Uansett tilpasser vi designet slik at det matcher dine ønsker
          og behov. Vi lager alt fra logoer og visuelle elementer til innlegg
          for Instagram, Facebook, LinkedIn eller andre plattformer. Designet
          ditt vil reflektere din visjon med nøye utvalgte skrifttyper,
          fargepaletter og grafiske elementer som er tilpasset din merkevare.
        </p>
        <p className="text-[20px] font-normal text-gray-500">
          Vi tilbyr design som skaper en helhetlig og profesjonell digital
          identitet, enten det er for nettsider, sosiale medier eller
          trykksaker. Fra logoer til ferdige innlegg, har vi kompetansen til å
          levere det perfekte designet som tiltrekker seg oppmerksomhet.
        </p>
        <p className="text-[20px] text-gray-800">
          Prisen varierer etter behov og kompleksitet, men uansett jobber vi for
          å sikre at du får et resultat som er både funksjonelt og visuelt
          tiltalende.
        </p>

        <Marquee autoFill direction="right" className=" py-[2rem] relative before:absolute before:left-0 before:top-0 before:w-[10rem] md:before:w-[20rem] before:h-full before:bg-gradient-to-r before:from-[#fff] before:to-transparent before:z-50 after:absolute after:right-0 after:top-0 after:w-[10rem] md:after:w-[20rem] after:h-full after:bg-gradient-to-r after:from-transparent after:to-[#fff] after:z-50  ">
            <div className=" px-3 md:px-5 ">
              <Image
                src={Client1}
                alt="Client Logo"
                draggable="true"
                className=" w-[15rem] h-auto object-cover rounded-md "
              />
            </div>
            <div className=" px-3 md:px-5 ">
              <Image
                src={Client2}
                alt="Client Logo"
                draggable="true"
                className=" w-[15rem] h-auto object-cover rounded-md "
              />
            </div>
            <div className=" px-3 md:px-5 ">
              <Image
                src={Client3}
                alt="Client Logo"
                draggable="true"
                className=" w-[18rem] h-auto object-cover rounded-md "
              />
            </div>
            <div className=" px-3 md:px-5 ">
              <Image
                src={Client4}
                alt="Client Logo"
                draggable="true"
                className=" w-[10rem] h-auto object-cover rounded-md "
              />
            </div>
            <div className=" px-3 md:px-5 ">
              <Image
                src={Client5}
                alt="Client Logo"
                draggable="true"
                className=" w-[10rem] h-auto object-cover rounded-md "
              />
            </div>
            <div className=" px-3 md:px-5 ">
              <Image
                src={Client6}
                alt="Client Logo"
                draggable="true"
                className=" w-[7rem] h-auto object-cover rounded-md "
              />
            </div>
            <div className=" px-3 md:px-5 ">
              <Image
                src={Client7}
                alt="Client Logo"
                draggable="true"
                className=" w-[15rem] h-auto object-cover rounded-md "
              />
            </div>
        </Marquee>

        <h3 className="text-[20px] font-semibold text-gray-800">
          Kontakt oss via skjemaet nedenfor, så hjelper vi deg i gang med design
          som er skreddersydd for ditt behov.
        </h3>
      </div>
      <div className="my-20">
        <LogoForm />
      </div>
    </div>
  );
};

export default page;
