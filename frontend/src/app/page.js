import Booking from "./components/Booking";
import CookieBanner from "./components/CookieBannerssss";
import Hero from "./components/Hero";
import OfferSection from "./components/OfferSection";
import Reference from "./components/Reference";
import Slider from "./components/Slider";
import Team from "./components/Team";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <div>
      <div className="bg-[#035635] lg:pb-0  ">
        <Hero></Hero>
      </div>
      <Slider></Slider>
      <OfferSection></OfferSection>
      <div className="bg-[#035635]">
        <Team></Team>
      </div>
      <div>
        <Tools></Tools>
      </div>
      <div>
        <Booking></Booking>
      </div>
      <div>
        <Reference title={"Referanser"}></Reference>
      </div>
      {/* <CookieBanner /> */}
    </div>
  );
}
