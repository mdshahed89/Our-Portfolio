"use client";

import React, { useEffect, useRef, useState } from "react";

import Service1 from "@/assets/Service1.webp";
import Service2 from "@/assets/Service2.webp";
import Service3 from "@/assets/Service3.webp";
import Service4 from "@/assets/Service4.webp";
import Service5 from "@/assets/Service5.webp";
import Service6 from "@/assets/Service6.webp";
import Link from "next/link";
import Image from "next/image";
import {
  MdArrowBackIos,
  MdArrowForward,
  MdArrowForwardIos,
} from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Services = () => {
  const scrollRef = useRef(null);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setDisableLeft(el.scrollLeft <= 0);
    setDisableRight(el.scrollLeft + el.offsetWidth >= el.scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const handleScroll = (direction) => {
    const isMediumScreen = window.innerWidth >= 768; // Tailwind's 'md' breakpoint
    const scrollAmount = isMediumScreen ? 500 : 400;
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 300);
  };

  //   <div className="relative w-full h-[40rem]">
  //   <Image src={HfaqImg} className="object-cover w-full h-full" alt="Background Image" />

  //   <div className="absolute inset-0 flex items-center justify-center">
  //     <div className="w-full overflow-x-auto flex space-x-4 px-4 py-6 scrollbar-hide">
  //       <div className="flex gap-7 md:mx-[25%]  flex-nowrap">
  //         <HfeedbackCard className="shrink-0 w-64" />
  //         <HfeedbackCard className="shrink-0 w-64" />
  //         <HfeedbackCard className="shrink-0 w-64" />
  //         <HfeedbackCard className="shrink-0 w-64" />
  //         <HfeedbackCard className="shrink-0 w-64" />
  //         {/* <HfeedbackCard className="shrink-0 w-64" /> */}
  //       </div>
  //     </div>
  //   </div>
  // </div>

  return (
    <section
      id="offers"
      className="scroll-mt-40 mx-auto px-2 md:px-3 mt-[3rem] lg:mt-[6rem] mb-[3rem]"
    >
      <h2 className="text-[2rem] lg:text-[3rem] py-3 font-medium leading-none text-center mb-[3rem] relative before:absolute before:w-[7rem] before:h-1 before:bg-[#035635] before:left-1/2 before:bottom-[-1rem] before:transform before:-translate-x-1/2">
        Hva vi tilbyr
      </h2>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          <div className="flex gap-4 py-[2rem] xl:mx-[14%] ">
            <Card
              img={Service3}
              title="Nettside"
              btn="Få nettside"
              path="/nettside"
              description="Vi lager profesjonelle nettsider som tilpasses dine behov. Fra enkle landingssider til mer komplekse løsninger, med fokus på moderne design, funksjonalitet, brukeropplevelse og synlighet for å øke vekst."
            />
            <Card
              img={Service5}
              title="Nettbutikk"
              btn="Få nettbutikk"
              path="/nettbuttik"
              description="Vi utvikler brukervennlige og sikre nettbutikker med fokus på enkel betalingsintegrasjon, fraktsystemer, og optimal brukeropplevelse, og gir deg en komplett løsning for effektivt salg på nettet."
            />
            <Card
              img={Service1}
              title="Webapplikasjon"
              btn="Start markedsføringen din"
              path="/markedsforing"
              description="Vi bygger skreddersydde webapplikasjoner med MERN-stack, som effektiviserer arbeidsflyten og dekker spesifikke behov for dynamiske og komplekse løsninger som hjelper virksomheten din å vokse."
            />
            <Card
              img={Service4}
              title="Markedsføring"
              btn="Start markedsføringen din"
              path="/markedsforing"
              description="Vi hjelper deg med målrettet markedsføring gjennom strategier for sosiale medier, annonsering, e-postkampanjer og SEO, for å oppnå målbare resultater og økt engasjement hos dine kunder."
            />
            <Card
              img={Service2}
              title="SEO"
              btn="Optimaliser synligheten din"
              path="/seo"
              description="Vår SEO-tjeneste sørger for at nettsiden din får høyere rangering i søkeresultater gjennom teknisk SEO, innhold, lenkebygging og optimalisering, som øker organisk trafikk og synlighet."
            />
            <Card
              img={Service6}
              title="Grafisk design"
              btn="Få et unikt designuttrykk"
              path="/logo"
              description="Vi skaper visuelt imponerende grafiske design for virksomheten din, inkludert logoer, visuelle profiler og trykksaker, med fokus på estetikk, funksjonalitet og merkevarebygging for et sterkt førsteinntrykk."
            />
          </div>
        </div>

        <div className=" max-w-[1200px] 2xl:max-w-[1400px] mx-auto flex justify-end gap-4 mt-3">
          <button
            onClick={() => handleScroll("left")}
            disabled={disableLeft}
            className={`border-[#17DB4F] border-2 p-2 rounded-full text-[1.3rem] text-[#17DB4F] ${
              disableLeft ? "opacity-30" : "hover:bg-gray-100"
            }`}
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={disableRight}
            className={`p-2 border-[#17DB4F] border-2 rounded-full text-[1.3rem] text-[#17DB4F] ${
              disableRight ? "opacity-30" : "hover:bg-gray-100"
            }`}
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

const Card = ({ img, title, description, btn, path }) => {
  return (
    <div className=" min-w-[400px] max-w-[400px] md:min-w-[500px] md:max-w-[500px] flex flex-col shadow-[0_0_5px_1px_rgba(128,128,128,0.6)] rounded-md">
      {/* Image Section: fixed height */}
      <div className="w-full h-[20rem] md:h-[25rem] overflow-hidden rounded-t-md">
        <Image
          src={img}
          alt={`${title} illustrasjon`}
          loading="lazy"
          className="w-full h-full object-fill"
        />
      </div>

      {/* Content Section: take remaining space equally */}
      <div className="flex flex-col justify-between flex-grow px-4 pb-4 pt-2 ">
        <div>
          <p className="text-[1.7rem] md:text-[2rem] font-medium">{title}</p>
          <p className="md:text-lg text-gray-500 ">{description}</p>
        </div>
        <Link
          href={path}
          className={`${
            btn ? "" : "hidden"
          } group hover:text-[#035635] transition-all duration-300 ease-linear border-b-2 border-[#035635] w-fit mt-3 md:mt-5 flex items-center gap-1`}
        >
          <div className="text-[1.1rem] font-light">{btn}</div>
          <MdArrowForward className="mt-1 group-hover:ml-2 transition-all duration-200 ease-linear" />
        </Link>
      </div>
    </div>
  );
};
