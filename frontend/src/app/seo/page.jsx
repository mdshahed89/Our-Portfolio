import React from "react";
import Seo1 from "@/assets/seo.webp";
import Seo2 from "@/assets/s2.webp";
import Image from "next/image";
import Link from "next/link";
import { IoKeyOutline } from "react-icons/io5";
import { AiOutlineFontSize } from "react-icons/ai";
import { HiLink } from "react-icons/hi2";
import { RiSearchLine } from "react-icons/ri";

const page = () => {
  return (
    <div className="  h-full mt-[160px]  ">
      <div className=" px-3 flex items-center xl:flex-row flex-col xl:gap-0 gap-7  ">
        <div className=" flex-1 xl:order-1 order-2  ">
          <div className=" flex flex-col gap-8 justify-between lg:px-3 ">
            <div className=" xl:text-[2rem] text-[1.7rem]  font-semibold ">
              Søkemotoroptimalisering
            </div>
            <div>
              <p className=" text-[1.2rem] lg:text-[1.4rem] font-semibold ">
                Hva er SEO, og hvordan jobber Sidesone med det?
              </p>
              <p className=" text-base md:text-lg text-gray-500 ">
                SEO (søkemotoroptimalisering) handler om å øke synligheten til
                nettsiden din i Google og andre søkemotorer, slik at du får mer
                organisk trafikk. Hos Sidesone bruker vi verktøyet Seobility for
                å analysere nettstedet ditt, identifisere forbedringsområder og
                lage en skreddersydd strategi. Vi fokuserer på
                nøkkelordoptimalisering, riktig tekstformat, god struktur og
                andre tiltak som hjelper siden din å rangere høyere.
              </p>
            </div>
            <div>
              <h4 className=" text-[1.2rem] md:text-[1.4rem] font-semibold ">
                Hvorfor er SEO viktig?
              </h4>
              <p className=" text-base md:text-lg text-gray-500 ">
                God SEO handler ikke bare om å rangere nettsiden din høyere, men
                også om å gjøre den brukervennlig og tilpasset effektiv
                markedsføring. Dette gir bedre opplevelser for kundene dine,
                bygger tillit og sikrer vekst uten kostnadene ved annonsering.
                Med Sidesone kan du styrke din digitale tilstedeværelse og få
                resultater som varer.
              </p>
            </div>
            <div className=" flex md:justify-start justify-center ">
              <Link
                href="mailto:kontakt@sideson.no"
                className=" bg-[#000] px-10 py-2 rounded-md text-[#fff] font-medium "
              >
                Ta kontakt for et uforpliktende tilbud.
              </Link>
            </div>
          </div>
        </div>
        <div className=" xl:order-2 order-1 w-full xl:w-[50%] h-auto items-stretch ">
          <Image
            loading="lazy"
            placeholder="blur"
            src={Seo1}
            alt="Seo"
            className=" w-full xl:min-h-[500px] h-full object-cover rounded-md "
          />
        </div>
      </div>

      <div className=" text-[#fff] bg-[#035635] py-10 mt-10 ">
        <div className=" flex lg:flex-row flex-col ">
          <h5 className=" md:px-3 text-[1.4rem] font-semibold lg:mb-6  flex-1 ">
            Hvordan gjør vi nettsiden din mer synlig på nett?
          </h5>
          <p className=" md:px-3  text-[1.2rem] font-light lg:mb-6  flex-1 ">
            Usikker hvor seo resultatene dine? så kan du sjekke de{" "}
            <span className=" border-b-2 border-[#fff] ">
              her
            </span>
            .
          </p>
        </div>
        <div className=" px-2 flex items-center xl:flex-row flex-col xl:gap-3 gap-7 mt-10  ">
          <div className=" w-full lg:w-[50%] h-auto ">
            <div className="  w-full  h-auto items-stretch ">
              <Image
                loading="lazy"
                placeholder="blur"
                src={Seo2}
                alt="Seo img"
                className=" w-full xl:min-h-[568px] h-full object-cover rounded-md border-2 border-[#0ea76cd7] "
              />
              
            </div>
          </div>

          <div className=" flex-1  ">
            <div className=" flex flex-col gap-8 justify-between ">
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5  ">
                <Group
                  icon={<RiSearchLine />}
                  title="Teknisk SEO"
                  description="Sørg for at nettsiden er teknisk optimalisert med rask lastetid, mobilvennlighet, sikkerhet (HTTPS), og korrekt strukturert data som hjelper søkemotorer å forstå innholdet."
                />
                <Group
                  icon={<IoKeyOutline />}
                  title="Nøkkelord og innholdsoptimalisering"
                  description="Bruk relevante nøkkelord strategisk i tekst, titler, metabeskrivelser og overskrifter. Skap høykvalitetsinnhold som svarer på brukernes spørsmål og er enkelt å lese."
                />
                <Group
                  icon={<AiOutlineFontSize />}
                  title="Riktig oppsett av tekstformat"
                  description="Riktig oppsett av tekstformat er viktig både for brukeropplevelse og for søkemotoroptimalisering (SEO). Her er noen prinsipper for å sikre optimal tekststruktu"
                />
                <Group
                  icon={<HiLink />}
                  title="Lenkebygging (Backlinks)"
                  description="Bygg autoritet ved å få andre relevante og pålitelige nettsteder til å lenke til ditt. Kvalitetslenker er en av de viktigste faktorene for høy rangering i søkemotorer."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" flex justify-center bg-[#04301eee] py-8 ">
          <Link
            href="mailto:kontakt@sideson.no"
            className=" bg-[#fff] px-10 py-2 text-[#000] rounded-md font-medium "
          >
            Ta kontakt for et uforpliktende tilbud.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

const Group = ({ icon, title, description }) => {
  return (
    <div className=" flex flex-col  gap-5 bg-[#0b462ece] p-3 rounded-md ">
      <div className=" text-[1.7rem] 2xl:text-[2rem] ">{icon}</div>
      <h3 className=" text-[1.3rem] 2xl:text-[1.6rem] font-semibold ">{title}</h3>
      <p className=" text-base 2xl:text-lg text-[#e7e7e7] ">{description}</p>
    </div>
  );
};
