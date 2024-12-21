const OfferSection = () => {
  const offers = [
    {
      title: "Nettside",
      fontColor: "text-gray-600",
      description: `
        Vi utvikler nettsider som er funksjonelle, moderne og brukervennlige.
        Når det gjelder nettsider, bygger vi informative og brukervennlige
        sider som er skreddersydd for dine behov og tilpasset det norske
        markedet. Øk vekst og synlighet med en profesjonell nettside.
      `,
      buttonText: "Få nettside",
      backgroundColor: "#7BDCB5",
    },
    {
      title: "Nettbutikk",
      fontColor: "text-gray-600",
      description: `
        Vi tilbyr nettbutikker som gir en enkel og effektiv handelsopplevelse
        for kundene dine. Vi fokuserer på å skape et attraktivt design som
        fremhever produktene dine og gir en smidig handleopplevelse for kundene.
        Vi sørger for riktig fargepalett, tydelig produktinformasjon og optimal
        navigasjon.
      `,
      buttonText: "Få nettbuttik",
      backgroundColor: "#FFD0F9",
    },
    {
      title: "Webapplikasjon",
      fontColor: "text-gray-100",
      description: `
        Vi tilbyr skreddersydde webapplikasjoner som gir bedriften din effektive
        og brukervennlige digitale løsninger. Når det gjelder webapplikasjoner,
        utvikler vi kraftige og brukervennlige løsninger som er skreddersydd for
        dine behov. Vi fokuserer på funksjonalitet, design og ytelse.
      `,
      buttonText: "Få Webapplikasjon",
      backgroundColor: "#0B2927",
      textColor: "text-white",
    },
  ];
  return (
    <div className="px-3 -mt-24 lg:-mt-40 lg:px-0 max-w-[1600px] mx-auto">
      <div>
        <h1 className="font-bold px-4 py-3 text-[40px]">Hva vi tilbyr</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-5 items-center ">
        <div className={`p-5  lg:max-w-[520px] bg-[#7BDCB5]`}>
          <h1 className="text-[34px]  pb-5 font-semibold">Nettside</h1>
          <div className="lg:min-h-[180px]">
            <p
              className={`text-lg text-gray-600 leading-tight whitespace-pre-line`}
            >
              Vi utvikler nettsider som er funksjonelle, moderne og
              brukervennlige. <br /> <br />
              Når det gjelder nettsider, bygger vi informative og brukervennlige
              sider som er skreddersydd for dine behov og tilpasset det norske
              markedet. Øk vekst og synlighet med en profesjonell nettside.
            </p>
          </div>
          <div className="flex justify-center my-3 mt-6">
            <button className="w-60 bg-black text-white p-3 rounded-full">
              Få nettside
            </button>
          </div>
        </div>

        <div className={`p-5 lg:max-w-[520px] bg-[#FFD0F9]`}>
          <h1 className="text-[34px]  pb-5 font-semibold">Nettbutikk</h1>
          <div className="lg:min-h-[180px]">
            <p
              className={`text-lg text-gray-600 leading-tight whitespace-pre-line`}
            >
              Vi tilbyr nettbutikker som gir en enkel og effektiv
              handelsopplevelse for kundene dine. <br /> <br />
              Vi fokuserer på å skape et attraktivt design som fremhever
              produktene dine og gir en smidig handleopplevelse for kundene. Vi
              sørger for riktig fargepalett, tydelig produktinformasjon og
              optimal navigasjon.
            </p>
          </div>
          <div className="flex justify-center my-3 mt-6">
            <button className="w-60 bg-black text-white p-3 rounded-full">
              Få nettbuttik
            </button>
          </div>
        </div>

        <div className={`p-5 lg:max-w-[520px] bg-[#0B2927]`}>
          <h1 className="text-[34px]  pb-5 font-semibold text-white">
            Nettbutikk
          </h1>
          <div className="lg:min-h-[180px]">
            <p
              className={`text-lg text-gray-100 leading-tight whitespace-pre-line`}
            >
              Vi tilbyr skreddersydde webapplikasjoner som gir bedriften din
              effektive og brukervennlige digitale løsninger. <br /> <br />
              Når det gjelder webapplikasjoner, utvikler vi kraftige og
              brukervennlige løsninger som er skreddersydd for dine behov. Vi
              fokuserer på funksjonalitet, design og ytelse.
            </p>
          </div>
          <div className="flex justify-center my-3 mt-6">
            <button className="w-60 bg-black text-white p-3 rounded-full">
              Få Webapplikasjon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
