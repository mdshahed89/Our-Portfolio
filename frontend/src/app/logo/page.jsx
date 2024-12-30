import React from "react";
import LogoForm from "../../components/LogoForm";

const page = () => {
  return (
    <div className=" min-h-[100vh] px-3 lg:px-0 max-w-[1400px] mx-auto mt-[150px] ">
      <div className="space-y-10">
        <h2 className="text-3xl md:text-4xl text-gray-700 font-medium">
          Vi Lager Logoer som Passer Dine Behov
        </h2>
        <p className="text-[20px] font-normal text-gray-500">
          Enten du driver en liten bedrift, en stor virksomhet eller bare ønsker
          en personlig logo, kan vi hjelpe deg! Vi tilbyr logoer som kan brukes
          på nettsider, sosiale medier, eller andre plattformer.
        </p>
        <p className="text-[20px] font-normal text-gray-500">
          Har du allerede en nettside, eller trenger du en ny? Uansett tilpasser
          vi logoen slik at den matcher dine ønsker og behov. Vi sørger for at
          designet reflekterer din visjon, med eksklusive skrifttyper, riktig
          bruk av fargepalett og muligheten til å tegne logoer, mønstre eller
          figurer helt fra bunnen av. Vi lager logoer som passer dine behov.
        </p>
        <p className="text-[20px] font-normal text-gray-500">
          Prisen varierer etter behov og kompleksitet, men uansett sikrer vi et
          resultat som skaper din digitale identitet.
        </p>
        <h2 className="text-[20px] font-semibold text-gray-800">
          Kontakt oss via skjemaet nedenfor, så hjelper vi deg i gang med en
          unik logo!
        </h2>
      </div>
      <div className="my-20">
        <LogoForm />
      </div>
    </div>
  );
};

export default page;
