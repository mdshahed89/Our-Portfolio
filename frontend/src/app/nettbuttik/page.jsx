import Person from "@/assets/Person.webp";
import NettsideForm from "@/components/NettsideForm";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row  px-3 lg:px-0 2xl:max-w-[1400px] max-w-[1200px] py-36 mx-auto  justify-between">
        <div className="lg:w-[32%] space-y-5">
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
            <p className="text-lg font-medium  text-gray-500">
              Send oss dine krav, så tar vi kontakt med deg innen 1 arbeidsdag!
            </p>
          </div>
          <div className="bg-[#F9F9F9] flex flex-col gap-8 items-center justify-between p-5">
            <div className="flex justify-between gap-5">
              <div className="flex items-start">
                <h3 className="text-4xl font-bold text-[#7BDCB5]">1</h3>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-500">
                  Send inn kontaktskjema
                </p>
                <p>
                  Vi vil deretter ta kontakt med deg for å tilby hjelp og
                  veiledning i å finne den optimale løsningen som passer best
                  for deg - og det er helt uforpliktende!s
                </p>
              </div>
            </div>
            <div className="flex  gap-4">
              <div className="flex items-start">
                <h3 className="text-4xl font-semibold text-[#7BDCB5]">2</h3>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-500">
                  Del dine ønsker og behov for din nye nettside
                </h3>
                <p>
                  Når du har valgt din nettsidepakke, sender du over informasjon
                  om hva du ønsker å ha med på din nye nettside.
                </p>
              </div>
            </div>
            <div className="flex  gap-4">
              <div className="flex items-start">
                <h3 className="text-4xl font-semibold text-[#7BDCB5]">3</h3>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-500">
                  Vi lager din nye nettside
                </h4>
                <p>
                  Vårt team designer en attraktiv og brukervennlig nettside for
                  dine kunder. Vi skriver også teksten basert på den
                  informasjonen du deler med oss.
                </p>
              </div>
            </div>
            <div className="flex  gap-4">
              <div className="flex items-start">
                <h3 className="text-4xl font-bold text-[#7BDCB5]">4</h3>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-500">
                  Du godkjenner, vi lanserer
                </p>
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
            <h3 className="text-3xl font-semibold">
              Fortell oss om din nye{" "}
              <span className="text-[#7BDCB5]">nettbutikk</span>
            </h3>
            <p className="pt-8 text-lg font-normal">
              Når det gjelder nettbutikker, utvikler vi brukervennlige og
              profesjonelle løsninger som er tilpasset dine behov og det norske
              markedet. Vi fokuserer på å skape et attraktivt design som
              fremhever produktene dine og gir en smidig handleopplevelse for
              kundene. Vi sørger for riktig fargepalett, tydelig
              produktinformasjon og optimal navigasjon, slik at butikken både
              ser bra ut og fungerer effektivt. Gjennom tett samarbeid og god
              kommunikasjon med deg som kunde, skaper vi en nettbutikk som både
              er funksjonell og tiltrekkende for målgruppen din.
            </p>
          </div>

          <div className="pt-10">
            <NettsideForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
