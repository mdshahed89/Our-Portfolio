import ReviewComponent from "@/components/ReviewComponent";
import Reference, { Slider } from "../components/Reference";
import Tools, { ContactUs, Hero, NeedProfessitionSite, OfferSection, Team } from "../components/Tools";

export default function Home() {
  return (
    <div>
      <div className="bg-[#035635]  ">
        <Hero />
      </div>
      <Slider />
      <NeedProfessitionSite />
      <OfferSection />
      <div>
        <Tools />
      </div>
      <div>
        <Reference title={"Referanser"} />
      </div>
      <div className="bg-[#035635]">
        <Team />
      </div>
      <div>
        <ReviewComponent />
      </div>
      <div>
        <ContactUs />
      </div>

    </div>
  );
}
