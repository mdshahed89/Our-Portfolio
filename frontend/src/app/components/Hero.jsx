import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import "../../styles/style.css";
const Hero = () => {
  return (
    <div className=" h-[88vh] md:h-[600px] lg:min-h-[800px] max-w-[1400px] mx-auto text-white flex flex-col lg:flex-row  lg:justify-between ">
      <div
        className="  flex justify-center 
      mt-[120px] lg:mt-0 flex-col   px-3 "
      >
        <div className="space-y-2   ">
          <h1 className=" text-[1.75rem] md:text-[2.5rem] lg:text-[3.5rem] leading-tight font-bold ">
            Øk vekst og synlighet med en profesjonell nettside
          </h1>
          <h3 className="text-[18px] py-3 lg:text-[33px] font-medium ">
            Hos sidesone kan du spre dine digitale vinger!
          </h3>
        </div>

        <div className="mt-5">
          <Link
            href="/nettside"
            className="border-2 px-2 md:px-0 whitespace-none md:whitespace-normal rounded w-[215px] md:w-[250px] lg:w-[300px] justify-center text-sm lg:text-xl font-medium flex items-center gap-1 md:gap-2 border-white p-1 md:p-3 transition-transform transform hover:scale-x-105 hover:origin-left group"
          >
            Trenger du en nettside?
            <IoIosArrowRoundForward
              size={30}
              className="transition-transform transform group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
      <div
        className={` -mt-20  w-full lg:w-[500px] mx-auto lg:order-2 order-1 lg:pt-0  lg:mt-8   h-[500px] lg:h-auto bg-no-repeat  bg-hero-image`}
      >
        {/* Content */}
      </div>
    </div>
  );
};

export default Hero;
