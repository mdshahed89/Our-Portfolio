import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
const Hero = () => {
  return (
    <div className=" min-h-[100vh] max-w-[1280px] mx-auto text-white flex flex-col lg:flex-row lg:justify-between ">
      <div className=" px-4 pt-28 lg:pt-40 lg:px-0">
        <div className="space-y-2">
          <h1 className="text-[42px] lg:text-[62px] font-bold ">
            Øk vekst og synlighet med <br className="hidden lg:flex" /> en
            profesjonell nettside
          </h1>
          <h3 className="text-[18px] py-3 lg:text-[33px] font-bold ">
            Hos sidesone kan du spre dine digitale vinger!
          </h3>
        </div>

        <div className="mt-5">
          <Link
            href="#"
            className="border-2 rounded w-[260px] lg:w-[280px] justify-center text-lg lg:text-xl font-medium flex items-center gap-2 border-white p-2 lg:p-3 transition-transform transform hover:scale-x-105 hover:origin-left group"
          >
            Trenger du en nettside?
            <IoIosArrowRoundForward
              size={30}
              className="transition-transform transform group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
      <div class="w-full lg:w-[400px] min-h-[65vh] lg:min-h-[100vh] bg-no-repeat bg-right-bottom lg:bg-left-bottom bg-[url('/person.png')] -translate-x-[20%]"></div>
      {/* <div className="w-full lg:w-[400px] min-h-[100vh] bg-no-repeat bg-right-bottom lg:bg-left-bottom bg-[url('/person.png')]">
        <div className="bg-left-bottom bg-cover bg-no-repeat translate-x-[-40%]">
          <img src="/person.png" alt="person" className="hidden" />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
