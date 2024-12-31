import React from "react";
import Service3 from "@/assets/A.jpg";
import Service2 from "@/assets/B.png";
import Service1 from "@/assets/C.jpg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className=" pt-[112px] flex flex-col md:gap-0 gap-5  ">
      <div className=" flex items-center md:flex-row flex-col ">
        <div className=" flex-1 md:order-1 order-2 py-5   ">
          <div className=" px-3 ">
            <h2 className=" text-[1.8rem] lg:text-[2.2rem] font-semibold ">
              Markedsføring
            </h2>
            <p className=" text-lg lg:text-xl text-gray-600 ">
              Markedsføring handler om å bygge relasjoner med potensielle kunder
              og skape verdi gjennom riktige kanaler. Hos Sidesone utvikler vi
              helhetlige markedsføringsstrategier som inkluderer digital
              annonsering, innholdsproduksjon og sosiale medier. Vi bruker
              innsikt og analyser til å forstå målgruppen din og skape budskap
              som treffer. Gjennom nøye planlegging og kreative kampanjer
              hjelper vi deg med å øke synlighet, bygge engasjement og oppnå
              ønskede resultater.
            </p>
            <div className=" flex  ">
              <Link
                href={"/markedsforing"}
                className=" px-10 py-2 rounded-full bg-[#000] text-[#fff] font-medium mt-8 "
              >
                Start din vekst!
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex-1 w-full h-auto md:h-[33rem] lg:h-[30rem] md:order-2 order-1 ">
          <Image
            loading="lazy"
            placeholder="blur"
            src={Service1}
            alt="Service Img"
            className=" w-full h-full object-contain lg:object-cover "
          />
        </div>
      </div>
      <div className=" flex  items-center  md:flex-row flex-col ">
        <div className=" flex-1 w-full h-auto md:h-[33rem] lg:h-[30rem] ">
          <Image
            loading="lazy"
            placeholder="blur"
            src={Service2}
            alt="Service Img"
            className=" w-full h-full object-contain lg:object-cover "
          />
        </div>
        <div className=" flex-1  ">
          <div className=" px-3 py-5 ">
            <h2 className=" text-[1.8rem] lg:text-[2.2rem] font-semibold ">
              Søkemotoroptimalisering
            </h2>
            <p className=" text-lg lg:text-xl text-gray-600 ">
              Hva er SEO, og hvordan jobber Sidesone med det?
            </p>
            <p className=" text-lg lg:text-xl text-gray-600 ">
              SEO (søkemotoroptimalisering) handler om å øke synligheten til
              nettsiden din i Google og andre søkemotorer, slik at du får mer
              organisk trafikk. Hos Sidesone bruker vi verktøyet Seobility for å
              analysere nettstedet ditt, identifisere forbedringsområder og lage
              en skreddersydd strategi. Vi fokuserer på nøkkelordoptimalisering,
              riktig tekstformat, god struktur og andre tiltak som hjelper siden
              din å rangere høyere..
            </p>
            <div className="pt-8">
              <Link
                href={"/seo"}
                className=" px-10 py-2 rounded-full bg-[#000] text-[#fff] font-medium mt-8 "
              >
                Øk synligheten din!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex items-center md:flex-row flex-col ">
        <div className=" flex-1 md:order-1 order-2 py-5   ">
          <div className=" px-3  ">
            <h2 className=" text-[1.8rem] lg:text-[2.2rem] font-semibold ">
              Grafisk design
            </h2>
            <p className=" text-lg lg:text-xl text-gray-600 ">
              Grafisk design er kunsten å formidle budskap visuelt, ved hjelp av
              designprinsipper som farger, typografi og layout. Dette gjør det
              mulig å skape en sterk visuell identitet som resonnerer med
              målgruppen din. Hos Sidesone kombinerer vi kreativitet og strategi
              for å levere skreddersydde løsninger som logoer, visuelle
              profiler, trykksaker og digitale design. Gjennom tett samarbeid
              med deg utvikler vi design som ikke bare ser bra ut, men også
              støtter merkevarens verdier og mål.
            </p>
            <div className=" flex  ">
              <Link
                href={"/logo"}
                className=" px-10 py-2 rounded-full bg-[#000] text-[#fff] font-medium mt-8 "
              >
                Start din vekst!
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex-1 w-full h-auto md:h-[33rem] lg:h-[30rem] md:order-2 order-1 ">
          <Image
            loading="lazy"
            placeholder="blur"
            src={Service3}
            alt="Service Img"
            className=" w-full h-full object-contain lg:object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default page;
