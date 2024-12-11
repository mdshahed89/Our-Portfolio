const OfferSection = () => {
  return (
    <div className="px-5 lg:px-0">
      <div>
        <h1 className="font-bold text-[40px]">Hva vi tilbyr</h1>
      </div>
      <div className="grid   lg:grid-cols-3 gap-5 ">
        <div className="bg-[#7BDCB5] p-5 min-h-[550px]">
          <h1 className="text-[34px] pb-5 font-semibold">Nettside</h1>
          <div className="min-h-[340px]">
            <p className="text-[22px]">
              Vi utvikler nettsider som er funksjonelle, moderne og
              brukervennlige. <br />
              <br />
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
        <div className="bg-[#FFD0F9] min-min-h-[550px]  p-5">
          <h1 className="text-[34px] pb-5 font-semibold">Nettbutikk</h1>
          <div className="min-h-[340px]">
            <p className="text-[22px] ">
              Vi tilbyr nettbutikker som gir en enkel og effektiv
              handelsopplevelse for kundene dine. <br /> <br /> Vi fokuserer på
              å skape et attraktivt design som fremhever produktene dine og gir
              en smidig handleopplevelse for kundene.Vi sørger for riktig
              fargepalett, tydelig produktinformasjon og optimal navigasjon
            </p>
          </div>

          <div className="flex justify-center my-3 mt-6">
            <button className="w-60 bg-black text-white p-3 rounded-full">
              Få nettbuttik
            </button>
          </div>
        </div>
        <div className="bg-[#0B2927]  min-h-[550px] text-white p-5">
          <h1 className="text-[34px] pb-5 font-semibold">Nettside</h1>
          <div className="min-h-[340px]">
            <p className="text-[22px] ">
              Vi tilbyr skreddersydde webapplikasjoner som gir bedriften din
              effektive og brukervennlige digitale løsninger. <br /> <br /> Når
              det gjelder webapplikasjoner, utvikler vi kraftige og
              brukervennlige løsninger som er skreddersydd for dine behov. Vi
              fokuserer på funksjonalitet, design og ytelse
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
