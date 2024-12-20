import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className=" min-h-[800px] max-w-[1400px] mx-auto text-white flex flex-col lg:flex-row  lg:justify-between ">
      <div className=" lg:order-1 order-2 flex justify-center lg:items-start items-center   flex-col   px-3 ">
        <div className="space-y-2  lg:text-left text-center  ">
          <h1 className=" text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-tight font-bold ">
            Øk vekst og synlighet med en profesjonell nettside
          </h1>
          <h3 className="text-[18px] py-3 lg:text-[33px] font-medium ">
            Hos sidesone kan du spre dine digitale vinger!
          </h3>
        </div>

        <div className="mt-5">
          <Link
            href="#"
            className="border-2 rounded w-[280px] lg:w-[300px] justify-center text-lg lg:text-xl font-medium flex items-center gap-2 border-white p-2 lg:p-3 transition-transform transform hover:scale-x-105 hover:origin-left group"
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
        className={`  w-full lg:w-[600px] mx-auto lg:order-2 order-1 lg:pt-0  mt-14 lg:mt-8 lg:h-auto h-[500px] bg-no-repeat  bg-hero-image`}
      >
        {/* Content */}
      </div>
    </div>
  );
};

export default Hero;
