import Reference, { Slider } from "../components/Reference";
import Tools, { Booking, Hero, OfferSection, Team } from "../components/Tools";

export default function Home() {
  return (
    <div>
      <div className="bg-[#035635]  ">
        <Hero />
      </div>
      <Slider />
      <OfferSection />
      <div>
        <Tools />
      </div>
      <div className="bg-[#035635]">
        <Team />
      </div>
      <div>
        <Booking />
      </div>
      <div>
        <Reference title={"Referanser"} />
      </div>
    </div>
  );
}
