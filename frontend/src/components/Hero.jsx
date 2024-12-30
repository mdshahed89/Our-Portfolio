import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import "@/styles//style.css";
const Hero = () => {
  return (
    <div className=" relative h-[680px] lg:h-[750px] max-w-[1400px]  mx-auto text-white flex flex-col lg:flex-row  lg:justify-between ">
      <div className="  flex mt-[140px] lg:mt-[170px]  flex-col z-50  px-3 max-w-[40rem] lg:max-w-[50rem] ">
        <div className="space-y-2   ">
          <h1 className=" text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-tight font-semibold ">
            Øk vekst og synlighet med en profesjonell nettside
          </h1>
          <h3 className="text-[25px] py-3 lg:text-[33px] text-[#e9e9e9] font-medium leading-tight ">
            Hos sidesone kan du spre dine digitale vinger!
          </h3>
        </div>

        <div className="mt-5">
          <Link
            href="/nettside"
            className="border-2 px-2 md:px-0 whitespace-none md:whitespace-normal rounded w-[225px] md:w-[250px] lg:w-[300px] justify-center text-base lg:text-lg font-medium flex items-center gap-1 md:gap-2 border-white p-2 md:p-2 transition-transform transform hover:scale-x-105 hover:origin-left group"
          >
            Trenger du en nettside?
            <IoIosArrowRoundForward
              size={30}
              className="transition-transform transform group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
      <div className=" absolute h-full w-full flex items-end justify-end  ">
        <div
          className={` -mt-20  w-full  mx-auto lg:order-2 order-1 lg:pt-0  lg:mt-8 h-[400px] md:h-[500px] lg:h-[600px]   bg-no-repeat  bg-hero-image`}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
