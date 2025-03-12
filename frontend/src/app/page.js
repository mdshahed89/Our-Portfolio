import Reference, { Slider } from "../components/Reference";
import Tools, { Booking, Hero, OfferSection, Review, Team } from "../components/Tools";

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
        <Review />
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
