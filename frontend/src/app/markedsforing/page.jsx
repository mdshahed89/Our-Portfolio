import React from "react";
import Market from "@/assets/market.webp";
import Marketting1 from "@/assets/Marketting1.jpg";
import Image from "next/image";
import { IoCheckmarkSharp } from "react-icons/io5";
import Link from "next/link";
import MarkettingIcon1 from "@/assets/MarkettingIcon1.png";
import MarkettingIcon2 from "@/assets/MarkettingIcon2.png";
import { MarkettingPackages } from "@/utils/UtilityComponent";

const page = () => {
  

  return (
    <div className="  mt-[120px] 2xl:max-w-[1400px] max-w-[1200px] mx-auto px-3 ">
      <div>
        <div className=" text-[2.5rem] font-semibold text-center ">
          Markedsføring
        </div>
        <div className=" mt-[2rem] flex gap-5 lg:flex-row flex-col items-stretch ">
          <div className=" w-full  lg:w-[30%] xl:w-[30rem] h-auto md:h-[40rem] lg:max-h-[32rem]    ">
            <Image
              loading="lazy"
              placeholder="blur"
              src={Market}
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

      <div className=" mt-[4rem] ">
        <div className=" text-[2rem] lg:text-[2.5rem] leading-tight font-semibold text-center ">
          Hvordan markedsfører Sidesone for deg?
        </div>
        <div className=" mt-[2rem] flex gap-5 lg:flex-row flex-col items-stretch ">
          <div className=" flex-1 flex flex-col justify-between gap-6 text-xl text-gray-600 md:pb-0 pb-5 lg:leading-8 ">
            <p>
              Hos Sidesone får du skreddersydd digital markedsføring som er
              strategisk, datadrevet og resultatorientert. Vi bruker Meta Ads og
              Google Ads for å nå de rette kundene med riktig budskap, og vi
              bygger kampanjer som er tilpasset dine mål enten det er synlighet,
              trafikk eller salg.
            </p>
            <div>
              <h3 className=" text-[1.2rem] lg:text-[1.5rem] leading-tight text-[#000] font-medium mb-[.6rem] ">
                Effektiv synlighet med Meta Ads
              </h3>
              <p>
                Gjennom Meta Ads når vi målgruppen din på Facebook Instagram og
                Messenger med visuelle og engasjerende annonser. Vi bruker
                detaljerte målgrupper basert på interesser demografi og atferd.
                Annonser optimaliseres for konverteringer eller engasjement og
                vi tester ulike formater og budskap for å finne det som gir
                høyest relevans og lavest kostnad per resultat.
              </p>
            </div>
            <div>
              <h3 className=" text-[1.2rem] lg:text-[1.5rem] leading-tight text-[#000] font-medium mb-[.6rem] ">
                Slik bygger vi lønnsomme Google Ads-kampanjer for deg
              </h3>
              <p>
                Vi starter med søkeordsanalyse for å finne relevante søk med høy
                kjøpsintensjon. Disse deles inn i annonsesett basert på tema for
                å sikre høy sammenheng mellom søkeord annonsetekst og
                landingsside. Vi skriver annonser med tydelig verdi og
                handlingsoppfordring og bruker utvidelser som adresse lenker og
                priser for å øke klikkraten.
              </p>
            </div>
            <p>
              Vi velger budstrategi ut fra kampanjemål enten det er lav CPA høy
              ROAS eller flest mulig klikk. Vi bruker nøyaktige og brede
              matchtyper negative søkeord for å unngå støy og smart bidding for
              å maksimere resultatene. Hele kontoen spores og optimaliseres
              løpende med fokus på kvalitetspoeng CPC og konverteringsrate.
            </p>
            <p>
              Med Sidesone får du annonser som gir mening og målbare resultater
              ikke bare synlighet men faktisk vekst.
            </p>
          </div>
          <div className=" w-full  lg:w-[30%] xl:w-[30rem] h-auto    ">
            <Image
              loading="lazy"
              placeholder="blur"
              src={Marketting1}
              alt="Marketting Img"
              className=" w-full h-auto object-cover rounded-md "
            />
            <div className=" relative flex items-center gap-2 mt-[3rem] px-2 ">
              <Image
                src={MarkettingIcon1}
                alt="Marketting icon 1"
                className=" flex-1 w-[14rem] h-auto object-contain "
              />
              <Image
                src={MarkettingIcon2}
                alt="Marketting icon 2"
                className=" flex-1 w-[10rem] h-auto object-contain "
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-16 mb-10 ">
        <div className=" text-center ">
          <div className=" text-[1.7rem] md:text-[2.2rem] leading-tight mb-3 font-semibold ">
            Velg den pakken som passer dine behov
            {/* Hvordan markedsfører Sidesone for deg? */}
          </div>
          <p className=" text-gray-600 font-medium ">
            Prisene inkluderer annonsebudsjettet som skal benyttes for å sette
            opp og administrere kampanjene dine.
          </p>
        </div>

        <MarkettingPackages />

        {/* <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 ">
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
        </div> */}
      </div>
    </div>
  );
};

export default page;

const Package = ({ packages, title, price }) => {
  return (
    <div className=" bg-[#035635] text-[#fff] pt-5 pb-[3rem] px-5 rounded-2xl flex flex-col justify-between ">
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
