import React from "react";

const page = () => {
  return (
    <div className="bg-gradient-to-b mt-20 from-blue-100 to-white min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <div className="text-2xl md:text-4xl font-extrabold text-[#035635] mb-6 text-center">
            Personvern policy
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Denne personvernpolicyen forklarer hvordan nettstedet vårt bruker og
            beskytter informasjonen du gir oss ved bruk av nettstedet.
          </p>

          <section className="mb-8">
            <div className="text-2xl font-semibold text-[#035635] mb-4">
              Informasjon vi samler inn
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Ditt navn og kontaktinformasjon</li>
              <li>Demografisk informasjon</li>
              <li>Andre opplysninger relevante for undersøkelser og tilbud</li>
            </ul>
          </section>

          <section className="mb-8">
            <div className="text-2xl font-semibold text-[#035635] mb-4">
              Hvordan vi bruker informasjonen
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Interne registre</li>
              <li>Forbedring av produkter og tjenester</li>
              <li>
                Utsendelse av kampanjemateriell om nye produkter, tilbud, eller
                informasjon som kan være av interesse for deg
              </li>
              <li>
                Kontakt for markedsundersøkelser via e-post, telefon, eller post
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <div className="text-2xl font-semibold text-[#035635] mb-4">
              Sikkerhet
            </div>
            <p className="text-gray-600">
              Vi er opptatt av å sikre at informasjonen din er trygg. Vi har
              innført passende fysiske, elektroniske og ledelsesmessige
              prosedyrer for å beskytte informasjonen vi samler inn online.
            </p>
          </section>

          <section className="mb-8">
            <div className="text-2xl font-semibold text-[#035635] mb-4">
              Cookies
            </div>
            <p className="text-gray-600 mb-4">
              Cookies er små filer som plasseres på harddisken din etter
              tillatelse. Disse hjelper oss med å analysere netttrafikk og gir
              tilpassede opplevelser. En cookie gir oss ingen tilgang til
              datamaskinen din eller informasjon utover det du velger å dele.
            </p>
            <p className="text-gray-600">
              Ved å bruke cookies kan vi forbedre nettsiden og skreddersy
              innholdet etter dine preferanser.
            </p>
          </section>

          <section className="mb-8">
            <div className="text-2xl font-semibold text-[#035635] mb-4">
              Lenker til andre nettsteder
            </div>
            <p className="text-gray-600">
              Nettstedet vårt kan inneholde lenker til andre nettsteder. Når du
              forlater vårt nettsted, er vi ikke ansvarlige for personvernet
              eller innholdet på disse sidene. Sjekk alltid personvernpolicyen
              til det aktuelle nettstedet.
            </p>
          </section>

          <section>
            <div className="text-2xl font-semibold text-[#035635] mb-4">
              Kontroll over din personlige informasjon
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                Du kan begrense innsamling og bruk av din personlige informasjon
                når som helst ved å kontakte oss.
              </li>
              <li>
                Vi vil ikke selge, distribuere eller leie ut din informasjon
                uten tillatelse eller lovpålegg.
              </li>
              <li>
                Du kan be om detaljer om informasjon vi har om deg ved å
                kontakte oss på [e-postadresse].
              </li>
              <li>
                Eventuelle feil i informasjonen vil bli rettet opp umiddelbart.
              </li>
            </ul>
          </section>

          <footer className="mt-8 text-center text-gray-500">
            <p>Denne personvernpolicyen kan endres uten varsel.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default page;
