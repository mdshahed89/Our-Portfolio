import { LogoForm } from "@/components/NettsideForm";
import React from "react";

const page = () => {
  return (
    <div className=" min-h-[100vh] px-3 lg:px-0 2xl:max-w-[1400px] max-w-[1200px] mx-auto mt-[150px] ">
      <div className="space-y-10">
        <h3 className="text-3xl md:text-4xl text-gray-700 font-medium">
        Vi Lager Grafisk Design og Logoer som Passer Dine Behov
        </h3>
        <p className="text-[20px] font-normal text-gray-500">
        Enten du driver en liten bedrift, en stor virksomhet, eller har et personlig prosjekt, kan vi hjelpe deg! Vi tilbyr ikke bare logoer, men også grafisk design for nettsider, sosiale medier, annonser, og andre visuelle plattformer.
        </p>
        <p className="text-[20px] font-normal text-gray-500">
        Har du allerede en nettside, eller trenger du design for sosiale medier? Uansett tilpasser vi designet slik at det matcher dine ønsker og behov. Vi lager alt fra logoer og visuelle elementer til innlegg for Instagram, Facebook, LinkedIn eller andre plattformer. Designet ditt vil reflektere din visjon med nøye utvalgte skrifttyper, fargepaletter og grafiske elementer som er tilpasset din merkevare.
        </p>
        <p className="text-[20px] font-normal text-gray-500">
        Vi tilbyr design som skaper en helhetlig og profesjonell digital identitet, enten det er for nettsider, sosiale medier eller trykksaker. Fra logoer til ferdige innlegg, har vi kompetansen til å levere det perfekte designet som tiltrekker seg oppmerksomhet.
        </p>
        <p className="text-[20px] text-gray-800">
        Prisen varierer etter behov og kompleksitet, men uansett jobber vi for å sikre at du får et resultat som er både funksjonelt og visuelt tiltalende.
        </p>
        <p className="text-[20px] font-semibold text-gray-800">
        Kontakt oss via skjemaet nedenfor, så hjelper vi deg i gang med design som er skreddersydd for ditt behov.
        </p>
      </div>
      <div className="my-20">
        <LogoForm />
      </div>
    </div>
  );
};

export default page;
