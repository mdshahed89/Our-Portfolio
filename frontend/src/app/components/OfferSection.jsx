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
    <div className="px-5 lg:px-0 max-w-[1400px] mx-auto">
      <div>
        <h1 className="font-bold text-[40px]">Hva vi tilbyr</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`p-5 min-h-[550px] md:min-h-[350px] rounded-xl  lg:min-h-[530px] ${
              offer.textColor || "text-black"
            }`}
            style={{ backgroundColor: offer.backgroundColor }}
          >
            <h1 className="text-[34px]  lg:pb-5 font-semibold">
              {offer.title}
            </h1>
            <div className="min-h-[360px] md:min-h-[180px] lg:min-h-[320px]">
              <p
                className={`text-[20px] ${offer.fontColor} whitespace-pre-line`}
              >
                {offer.description}
              </p>
            </div>
            <div className="flex justify-center my-3 mt-6">
              <button className="w-60 bg-black text-white p-3 rounded-full">
                {offer.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
