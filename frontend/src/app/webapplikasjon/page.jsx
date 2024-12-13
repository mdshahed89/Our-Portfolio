import NettsideForm from "../components/AllForms/nettsideForm";

const page = () => {
  return (
    <div>
      <div className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row  px-5 lg:px-0 max-w-[1280px] py-36 mx-auto  justify-between">
        <div className="lg:w-[32%] space-y-5">
          <div>
            <figure>
              <img
                src="/ow.png"
                className="object-cover w-[400px] mx-auto lg:h-full lg:w-full"
              />
            </figure>
          </div>
          <div className="text-center">
            <h1 className="text-lg font-medium  text-gray-500">
              Send oss dine krav, så tar vi kontakt med deg innen 1 arbeidsdag!
            </h1>
          </div>
          <div className="bg-[#F9F9F9] flex flex-col gap-4 items-center justify-between p-5">
            <div className="flex justify-between gap-5">
              <div className="flex items-start">
                <h1 className="text-4xl font-bold text-[#7BDCB5]">1</h1>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-500">
                  Send inn kontaktskjema
                </h1>
                <p>
                  Vi vil deretter ta kontakt med deg for å tilby hjelp og
                  veiledning i å finne den optimale løsningen som passer best
                  for deg – og det er helt uforpliktende!s
                </p>
              </div>
            </div>
            <div className="flex  gap-4">
              <div className="flex items-start">
                <h1 className="text-4xl font-bold text-[#7BDCB5]">2</h1>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-500">
                  Del dine ønsker og behov for din nye nettside
                </h1>
                <p>
                  Når du har valgt din nettsidepakke, sender du over informasjon
                  om hva du ønsker å ha med på din nye nettside.
                </p>
              </div>
            </div>
            <div className="flex  gap-4">
              <div className="flex items-start">
                <h1 className="text-4xl font-bold text-[#7BDCB5]">3</h1>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-500">
                  Vi lager din nye nettside
                </h1>
                <p>
                  Vårt team designer en attraktiv og brukervennlig nettside for
                  dine kunder. Vi skriver også teksten basert på den
                  informasjonen du deler med oss.
                </p>
              </div>
            </div>
            <div className="flex  gap-4">
              <div className="flex items-start">
                <h1 className="text-4xl font-bold text-[#7BDCB5]">4</h1>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-500">
                  Du godkjenner, vi lanserer
                </h1>
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
            <h1 className="text-3xl font-semibold">
              Fortell oss om din nye
              <span className="text-[#7BDCB5]">webapplikasjon</span>
            </h1>
            <p className="pt-8 text-lg font-normal">
              Når det gjelder webapplikasjoner, utvikler vi kraftige og
              brukervennlige løsninger som er skreddersydd for dine behov. Vi
              fokuserer på funksjonalitet, design og ytelse for å sikre en app
              som oppfyller både dine krav og brukernes forventninger. Med
              riktig teknologi, som MERN-stack, skaper vi en responsiv og
              effektiv applikasjon. Gjennom tett samarbeid og tydelig
              kommunikasjon jobber vi sammen for å bygge en webapp som hjelper
              deg å nå dine mål.
            </p>
          </div>

          <div className="pt-10">
            <NettsideForm></NettsideForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
