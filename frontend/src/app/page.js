import ReviewComponent from "@/components/ReviewComponent";
import Reference, { Slider } from "../components/Reference";
import Tools, { ContactUs, Hero, NeedProfessitionSite, OfferSection, Team } from "../components/Tools";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <div className="bg-[#035635]  ">
        <Hero />
      </div>
      <Slider />
      <NeedProfessitionSite />
      {/* <OfferSection /> */}
      <Services />
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
