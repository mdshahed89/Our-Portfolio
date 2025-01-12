import React from "react";
import Marketting1 from "@/assets/market.webp";
import Image from "next/image";
import { IoCheckmarkSharp } from "react-icons/io5";
import Link from "next/link";

const page = () => {
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

  return (
    <div className="  mt-[120px] 2xl:max-w-[1400px] max-w-[1200px] mx-auto px-3 ">
      <div>
        <div className=" text-[2.5rem] font-semibold text-center mb-4 ">
          Markedsføring
        </div>
        <div className=" flex gap-5 lg:flex-row flex-col items-stretch ">
          <div className=" w-full  lg:w-[30%] xl:w-[30rem] h-auto md:h-[40rem] lg:max-h-[32rem]    ">
            <Image
              loading="lazy"
              placeholder="blur"
              src={Marketting1}
              alt="Marketting Img"
              className=" w-full h-full object-cover rounded-md "
            />
          </div>
          <div className=" flex-1 flex flex-col justify-between gap-8 text-xl text-gray-600 md:pb-0 pb-5 lg:leading-8 ">
            <p>
              I dagens digitale landskap er effektiv markedsføring avgjørende
              for å skille seg ut og nå frem til de rette målgruppene. Vår
              markedsføringstjeneste hjelper deg med å bygge og implementere en
              skreddersydd strategi som gir resultater. Enten du vil øke
              merkevarekjennskap, drive trafikk til nettsiden din, eller øke
              konverteringer, har vi verktøyene og ekspertisen som skal til.
            </p>
            <p>
              Vi jobber tett sammen med deg for å forstå virksomhetens unike
              behov og mål. Gjennom hele prosessen prioriterer vi åpen
              kommunikasjon og tett oppfølging, slik at du alltid er oppdatert
              på fremgangen. Våre spesialister samarbeider for å sikre at hver
              del av strategien fungerer sømløst - fra innholdsproduksjon og
              annonsering til dataanalyse og optimalisering.
            </p>
            <p>
              Ved regelmessige møter og rapporteringer holder vi deg involvert
              og sikrer at tiltakene vi implementerer, gir ønskede resultater.
              Samtidig er vi fleksible og tilpasningsdyktige, slik at vi raskt
              kan justere strategien når markedet eller dine mål endrer seg.
              Målet vårt er enkelt: å skape en markedsføringsplan som ikke bare
              møter dine forventninger, men overgår dem, og hjelper deg med å
              oppnå varig suksess i en konkurransepreget digital verden.
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-16 mb-10 ">
        <div className=" text-center ">
          <div className=" text-[1.7rem] md:text-[2.2rem] leading-tight mb-3 font-semibold ">
            Velg den pakken som passe dine behov
          </div>
          <p className=" text-gray-600 font-medium ">
            Choose from our range of flexible pricing options that cater to your
            specific needs.
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 ">
          <Package
            packages={package1}
            title="Liten pakke"
            price="20 000kr/mnd"
          />
          <Package
            packages={package2}
            title="Medium pakke"
            price="40 000kr/mnd"
          />
          <Package
            packages={package3}
            title="Stor pakke"
            price="60 000kr/mnd"
          />
        </div>
      </div>
    </div>
  );
};

export default page;

const Package = ({ packages, title, price }) => {
  return (
    <div className=" bg-[#035635] text-[#fff] py-5 px-3 rounded-2xl flex flex-col justify-between ">
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
        <Link
          href="mailto:kontakt@sideson.no"
          className=" font-medium w-full py-2 px-8 transition-all duration-300 ease-in-out active:scale-95 rounded-full bg-[#fff] text-[#000] text-lg "
        >
          Ta Kontakt
        </Link>
      </div>
    </div>
  );
};
