import Image from "next/image";
import React from "react";
import Service7 from "@/assets/Service7.webp";
import ChatbotIcon1 from "@/assets/ChatbotIcon1.webp";
import Link from "next/link";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { AiChatbotPackage } from "@/utils/UtilityComponent";

const page = () => {
  return (
    <div className=" min-h-[100vh] pt-[150px] 2xl pb-[4rem] px-3 ">
      <h3 className=" text-[1.5rem] font-semibold mb-[3rem] text-gray-500 ">
        Skreddersydd KI-chatbot
      </h3>
      <div className=" max-w-[1200px] mx-auto ">
        <h3 className=" font-semibold text-[1.5rem] ">KI-Chatbot</h3>
        <p className=" mt-[1rem] mb-[2rem] text-gray-600 ">
          Vi utvikler intelligente og skreddersydde Kl-chatboter som
          effektiviserer kundeservice og gir brukerne en sømløs opplevelse. Med
          fokus på naturlig språkforståelse og automatiserte prosesser, bygger
          vi løsninger som tilpasses din bransje og dine behov. Spar tid,
          forbedre kundedialogen og vær tilgjengelig 24/7.
        </p>

        <div className=" flex md:flex-row flex-col  ">
          <div className=" flex-1 ">
            <Image
              src={Service7}
              alt="Service single page img"
              className=" md:h-[25rem] object-cover "
            />
          </div>
          <div className=" flex-1 border-y md:border-l-0 border-l border-r border-[#E0B9AD] flex flex-col justify-between py-[2.5rem] px-[1rem] md:px-[1.5rem] ">
            <h3 className=" text-[2rem] font-semibold leading-tight ">
              Skreddersydd KI-chatbot
            </h3>
            <p className=" text-gray-500 md:my-[1rem] my-[2rem] ">
              Vi bygger chatboten ved hjelp av OpenAI sin avanserte
              ChatGPT-teknologi og tilpasser den til din bedrifts behov. Enten
              du trenger en chatbot for kundeservice, bookingsystem eller
              rådgivning, skreddersyr vi både språk, tone og funksjonalitet.
              Resultatet er en intelligent assistent som snakker som en av dine
              egne og jobber for deg, døgnet rundt.
            </p>
            <div className=" flex items-center justify-between ">
              <div className="  border-2 pl-1 pr-8 rounded-md border-green-600 ">
                <div className=" flex items-center gap-3 h-[40px] relative ">
                  <Image
                    src={ChatbotIcon1}
                    alt="Openai icon"
                    className=" h-full w-auto "
                  />
                  <span className=" font-semibold ">Med GPT-4.5</span>
                </div>
              </div>
              <Link
                href={`/#kontakt`}
                className={`p-2 border-[#17DB4F] border-2 rounded-full text-[1.3rem] text-[#17DB4F] `}
              >
                <IoIosArrowForward size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className=" mt-[2rem] mb-[4rem] ">
          <h3 className=" text-[1.5rem] font-semibold ">
            Hvorfor bør din bedrift implementere KI?
          </h3>
          <div className=" mt-[1rem] space-y-[1.5rem] text-gray-600 ">
            <p className="  ">
              Kunstig intelligens (KI) er ikke lenger fremtiden - den er
              allerede en del av hverdagen, og bedrifter som tar det i bruk i
              dag, ligger et skritt foran. Ved å implementere KI i din
              virksomhet kan du automatisere tidkrevende og repeterende
              oppgaver, frigjøre tid for ansatte og levere raskere og mer
              presise svar til kundene dine.
            </p>
            <p>
              KI gjør det mulig å analysere store mengder data på sekunder, slik
              at du kan ta smartere og mer informerte beslutninger. Det åpner
              også for personlige kundeopplevelser, der kommunikasjon og tilbud
              tilpasses den enkeltes behov - helt automatisk.
            </p>
            <p>
              Enten du ønsker å bruke en chatbot for kundeservice, automatisere
              e-postdialog, analysere kundedata eller forbedre interne
              prosesser, finnes det en løsning som kan skreddersys for din
              bedrift. Med riktig bruk av KI kan du redusere kostnader, øke
              effektiviteten og skape bedre relasjoner med kundene dine -
              samtidig som du styrker konkurranseevnen i et marked som stadig
              blir mer digitalt og krevende.
            </p>
          </div>
        </div>

        <AiChatbotPackage />
      </div>
      {/* <p className=" text-gray-400 mt-2 ">Tast / for å velge en blokk</p> */}
    </div>
  );
};

export default page;

