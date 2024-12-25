const page = () => {
  return (
    <div className="bg-gradient-to-b mt-20 from-blue-100 to-white min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5">
            Informasjonskapsler (Cookies)
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-5">
            <li>
              <span className="font-bold">Hva er cookies?</span>
              <p className="ml-5">
                Informasjonskapsler er små tekstfiler lagret på brukerens enhet
                for å forbedre brukeropplevelsen.
              </p>
            </li>
            <li>
              <span className="font-bold">Hvordan vi bruker cookies:</span>
              <ul className="list-disc list-inside ml-10 space-y-2">
                <li>
                  Sidesone AS bruker cookies kun til datainnsamling for
                  analyseformål.
                </li>
                <li>
                  Cookies brukes ikke til markedsføring eller personlig sporing.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Samtykke:</span>
              <p className="ml-5">
                Når du besøker vår nettside, kan du velge å godta, avvise eller
                tilpasse informasjonskapsler. Samtykke kan når som helst trekkes
                tilbake ved å oppdatere innstillingene.
              </p>
            </li>
            <li>
              <span className="font-bold">Ansvar:</span>
              <p className="ml-5">
                Vi lager ingen cookies fra nettsidene vi lager for våre kunder.
                Kunden er selv ansvarlig for å implementere og vedlikeholde
                cookie-policy på sine nettsider.
              </p>
            </li>
          </ol>
          <h3 className="text-xl font-semibold text-gray-800 mt-10">Tillegg</h3>
          <p className="text-gray-700 mt-2">
            Dersom du har spørsmål eller trenger ytterligere informasjon,
            vennligst kontakt oss på{" "}
            <a
              href="mailto:kontakt@sidesone.no"
              className="text-blue-500 underline"
            >
              kontakt@sidesone.no
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
