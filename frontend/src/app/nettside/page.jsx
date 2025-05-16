
import Person from "@/assets/Person.webp";
import Image from "next/image";
import NettsideForm from "../../components/NettsideForm";
import WSlider1 from "@/assets/WSlider1.webp";
import WSlider2 from "@/assets/WSlider2.webp";
import WSlider3 from "@/assets/WSlider3.webp";
import WSlider4 from "@/assets/WSlider4.webp";
import WSlider5 from "@/assets/WSlider5.webp";
import WSlider6 from "@/assets/WSlider6.webp";
import WSlider7 from "@/assets/WSlider7.webp";
import WSlider8 from "@/assets/WSlider8.webp";
import WSlider9 from "@/assets/WSlider9.webp";
import WSlider10 from "@/assets/WSlider10.webp";
// import { useEffect, useState } from "react";

const Slider1 = [WSlider1, WSlider2, WSlider3, WSlider4, WSlider5];
const Slider2 = [WSlider6, WSlider7, WSlider8, WSlider9, WSlider10];

const page = () => {
  return (
    <div>
      <div className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row  px-3 2xl:max-w-[1600px] max-w-[1400px] py-36 mx-auto  justify-between">
        <div className="lg:w-[32%] space-y-8">
          <div>
            <figure>
              <Image
                loading="lazy"
                placeholder="blur"
                src={Person}
                alt=""
                className="object-cover w-[400px] mx-auto lg:h-full lg:w-full"
              />
            </figure>
          </div>
          <div className="text-center">
            <div className="text-lg font-medium  text-gray-500">
              Send oss dine krav, så tar vi kontakt med deg innen 1 arbeidsdag!
            </div>
          </div>
          <div className="bg-[#F9F9F9] flex flex-col gap-8 items-center justify-between p-5">
            <div className="flex justify-between gap-5">
              <div className="flex items-start">
                <div className="text-4xl font-bold text-[#7BDCB5]">1</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-500">
                  Send inn kontaktskjema
                </div>
                <p>
                  Vi vil deretter ta kontakt med deg for å tilby hjelp og
                  veiledning i å finne den optimale løsningen som passer best
                  for deg - og det er helt uforpliktende!s
                </p>
              </div>
            </div>
            <div className="flex  gap-4">
              <div className="flex items-start">
                <div className="text-4xl font-bold text-[#7BDCB5]">2</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-500">
                  Del dine ønsker og behov for din nye nettside
                </div>
                <p>
                  Når du har valgt din nettsidepakke, sender du over informasjon
                  om hva du ønsker å ha med på din nye nettside.
                </p>
              </div>
            </div>
            <div className="flex  gap-4">
              <div className="flex items-start">
                <div className="text-4xl font-bold text-[#7BDCB5]">3</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-500">
                  Vi lager din nye nettside
                </div>
                <p>
                  Vårt team designer en attraktiv og brukervennlig nettside for
                  dine kunder. Vi skriver også teksten basert på den
                  informasjonen du deler med oss.
                </p>
              </div>
            </div>
            <div className="flex  gap-4">
              <div className="flex items-start">
                <div className="text-4xl font-bold text-[#7BDCB5]">4</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-500">
                  Du godkjenner, vi lanserer
                </div>
                <p>
                  Vi samarbeider med deg gjennom hele prosessen, og vi lanserer
                  ikke nettsiden før du er fornøyd og har gitt din godkjennelse.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden lg:flex lg:w-[10%] items-center justify-center mx-auto">
          <div className="h-full border-l border-gray-300"></div>
        </div>
        <div className="lg:w-[58%]">
          <div>
            <div className="text-3xl font-semibold">
              Fortell oss om din{" "}
              <span className="text-[#7BDCB5]">nettside</span>
            </div>
            <p className="pt-8 text-lg font-normal">
              Når det gjelder nettsider, bygger vi informative og brukervennlige
              sider som er skreddersydd for dine behov og tilpasset det norske
              markedet. Vi fokuserer på å skape et design som både tiltrekker
              besøkende og reflekterer din merkevare. Vi legger stor vekt på å
              velge riktig fargepalett, bruke effektiv tekst og sørge for at
              alle elementene på nettsiden fungerer harmonisk sammen. Vi
              prioriterer god kommunikasjon med kundene våre for å sikre at vi
              sammen kan skape den drømmesiden du ønsker.
            </p>
          </div>
          <div className="pt-10">
            <NettsideForm />
          </div>
        </div>
        <WebSlider />
      </div>
    </div>
  );
};

export default page;

export const WebSlider = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkScreen = () => {
  //     setIsMobile(window.innerWidth < 1024); 
  //   };

  //   checkScreen();
  //   window.addEventListener("resize", checkScreen);
  //   return () => window.removeEventListener("resize", checkScreen);
  // }, []);

  return (
    <div>
      {/* Desktop - Vertical Double Sliders */}
      {/* {!isMobile && ( */}
        <div className=" lg:flex hidden justify-center gap-[1rem] marquee-columns lg:pl-[2rem]">
          {[Slider1, Slider2].map((slider, colIdx) => (
            <div
              key={colIdx}
              className="vertical-marquee-wrapper h-[30rem] lg:h-[80vh] w-[12rem] relative before:absolute before:w-full before:top-0 before:left-0 before:h-[15rem] before:bg-gradient-to-b before:from-white before:to-transparent before:z-50 after:absolute after:w-full after:bottom-0 after:left-0 after:h-[15rem] after:bg-gradient-to-b after:from-transparent after:to-white after:z-50"
            >
              <div
                className={`vertical-marquee-column ${
                  colIdx === 0 ? "scroll-down" : "scroll-up"
                }`}
              >
                {[...slider, ...slider].map((img, index) => (
                  <div
                    key={`${colIdx}-${index}`}
                    className="py-2 flex justify-center"
                  >
                    <Image
                      src={img}
                      alt={`Slider Image ${index}`}
                      draggable="true"
                      className="w-full h-auto object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      {/* )} */}

      {/* {isMobile && ( */}
        <div className=" lg:hidden block overflow-x-hidden relative h-[16rem] w-full before:absolute before:w-[5rem] before:top-0 before:left-0 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-50 after:absolute after:w-[5rem] after:top-0 after:right-0 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-50 ">
          <div className="flex w-max animate-scroll-horizontal gap-3">
            {[...Slider1, ...Slider1].map((img, index) => (
              <div
                key={`mobile-${index}`}
                className="w-[13rem] h-[15rem] rounded-md flex justify-center items-center"
              >
                <Image
                  src={img}
                  alt={`Mobile Slider ${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      {/* )} */}
    </div>
  );
};
