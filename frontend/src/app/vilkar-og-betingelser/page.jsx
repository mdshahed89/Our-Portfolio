const page = () => {
  return (
    <div className="bg-gradient-to-b mt-20 from-blue-100 to-white min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <div className="text-2xl md:text-[35px] text-gray-600 font-semibold">
            Vilkår og betingelser for Sidesone AS
          </div>
          <p className="font-medium py-2 text-gray-800 text-xl md:text-2xl">
            Generell informasjon
          </p>
          <div>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
              <li className="text-xl gap-3 ">
                <span className="font-bold text-gray-800">Firma: </span>Sidesone
                AS
              </li>
              <li className="text-xl gap-3">
                <span className="font-bold text-gray-800">
                  Kontaktinformasjon:{" "}
                </span>
                <ul className="list-disc pl-6 text-lg text-gray-600">
                  {" "}
                  <li className="text-xl gap-3">E-post: kontakt@sidesone.no</li>
                  <li className="text-xl gap-3">Telefon: +47 13 65 07</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-lg py-5">
              Sidesone AS tilbyr skreddersydde løsninger for utvikling av
              nettsider, nettbutikker og webapplikasjoner, samt tjenester innen
              webdesign, hosting, SEO og vedlikehold. Våre tjenester er rettet
              mot både bedrifter og privatpersoner i Norge, med mulighet for
              internasjonale kunder med tilknytning til Norge.
            </p>
          </div>

          {/* Tjenester og priser */}
          <section className="mt-8">
            <h3 className="font-medium text-gray-800 text-2xl">
              Tjenester og priser
            </h3>
            <p className="text-gray-600 text-lg py-5">
              <strong>Tjenestebeskrivelse:</strong> Vi tilbyr:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>Nettsider</li>
              <li>Nettbutikker</li>
              <li>Webapplikasjoner</li>
              <li>Logo-design, SEO og markedsføring som tilleggstjenester.</li>
            </ul>

            <p className="text-gray-600 text-lg py-5">
              <strong>Priser og variasjoner:</strong>
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>
                Prisene varierer avhengig av prosjektets omfang og kundens
                behov.
              </li>
              <li>Startprisen for enkle nettsider er 8 000 kr.</li>
              <li>
                Hosting og vedlikeholdskostnader avhenger av prosjektet, hvor
                kostnadene vanligvis er høyere for nettbutikker og
                webapplikasjoner.
              </li>
              <li>
                Kunden fyller ut et skjema på vår nettside der de oppgir
                kontaktinformasjon og beskriver visjonen for prosjektet. Dette
                skjemaet hjelper oss med å fastsette en spesifikk pris.
              </li>
            </ul>

            <p className="text-gray-600 text-lg py-5">
              <strong>Betalingsbetingelser:</strong>
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>
                I noen tilfeller betales hele beløpet ved prosjektstart, som
                deretter følges av månedlige kostnader for hosting og
                vedlikehold.
              </li>
              <li>
                Dersom prisen for prosjektet er høy, kan vi gjøre unntak og dele
                opp betalingen i milepæler, eller mellom en start- og
                sluttbetaling.
              </li>
            </ul>

            <p className="text-gray-600 text-lg py-5">
              <strong>Betalingsmetoder:</strong>
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>Faktura (sendes på e-post eller Messenger).</li>
              <li>
                Stripe-lenker for hosting og vedlikeholdsabonnement, som sendes
                etter at nettstedet er lansert.
              </li>
            </ul>

            <p className="text-gray-600 text-lg py-5">
              <strong>Manglende betaling:</strong>
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>
                Hvis månedlige betalinger for hosting ikke gjennomføres, blir
                nettstedet deaktivert til betalingen er mottatt.
              </li>
              <li>
                Vi varsler kunden ved manglende betaling og gir rimelig tid til
                å løse situasjonen.
              </li>
            </ul>

            <p className="text-gray-600 text-lg py-5">
              <strong>Avbestilling og refusjon:</strong>
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>
                Vi tilbyr ingen refusjon etter at prosjektet er startet eller
                levert.
              </li>
              <li>
                Hosting-abonnement kan avsluttes når som helst uten bindingstid.
                Kunden må i så fall kjøpe nettstedet og ordne ny hosting selv
                for å holde det aktivt.
              </li>
            </ul>
          </section>

          {/* Levering og kommunikasjon */}
          <section className="mt-8">
            <h3 className="font-medium text-gray-800 text-2xl">
              Levering og kommunikasjon
            </h3>
            <p className="text-gray-600 text-lg py-5">
              <strong>Leveringstid:</strong>
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>
                Vi oppgir en estimert leveringstid når vi svarer på
                forespørselen. Leveringstiden kan variere avhengig av
                prosjektets kompleksitet.
              </li>
            </ul>

            <p className="text-gray-600 text-lg py-5">
              <strong>Kundens rolle:</strong>
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>
                Kunden kan sende inn logo, bilder og annet relevant innhold i
                skjemaet eller via e-post/Messenger.
              </li>
              <li>
                Vi holder tett kontakt med kunden gjennom hele prosessen via:
                <ul className="list-disc pl-6 pt-2 list-inside">
                  <li>Messenger</li>
                  <li>E-post</li>
                  <li>Telefon/SMS</li>
                </ul>
              </li>
              <li>
                Endringer eller tilbakemeldinger kan gis når som helst i
                prosessen.
              </li>
            </ul>
          </section>

          {/* Ansvar og begrensninger */}
          <section className="mt-8">
            <h3 className="font-medium text-gray-800 text-2xl">
              Ansvar og begrensninger
            </h3>
            <p className="text-gray-600 text-lg py-5">
              <strong>Ansvar:</strong>
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>
                Vi garanterer rask feilretting gjennom våre hosting- og
                vedlikeholdsavtaler.
              </li>
              <li>
                Vi tilbyr ingen refusjon for uforutsette problemer som kan
                oppstå.
              </li>
            </ul>

            <p className="text-gray-600 text-lg py-5">
              <strong>Ansvarsfraskrivelse:</strong>
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>
                Vi er ikke ansvarlige for tekniske problemer eller feil som
                oppstår på grunn av tredjeparts tjenester eller eksterne
                faktorer.
              </li>
            </ul>
          </section>

          {/* Personvern og informasjonskapsler */}
          <section className="mt-8">
            <h3 className="font-medium text-gray-800 text-2xl">
              Personvern og informasjonskapsler
            </h3>
            <p className="text-gray-600 text-lg py-5">
              <strong>Personvern:</strong>
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>
                Vi lagrer ingen personopplysninger. All kommunikasjon og
                datautveksling mellom oss og kunden behandles konfidensielt.
              </li>
            </ul>

            <p className="text-gray-600 text-lg py-5">
              <strong>Informasjonskapsler:</strong>
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>
                Informasjon om informasjonskapsler og vår policy kan leses i vår
                separate Cookie Policy.
              </li>
            </ul>
          </section>

          {/* Kontakt oss */}
          <section className="mt-8">
            <h3 className="font-medium text-gray-800 text-2xl">Kontakt oss</h3>
            <p className="text-gray-600 text-lg py-5">
              Har du spørsmål eller trenger ytterligere informasjon? Kontakt oss
              på
              <strong> kontakt@sidesone.no</strong> eller{" "}
              <strong>+47 13 65 07</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
