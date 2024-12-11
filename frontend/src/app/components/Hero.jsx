import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
const Hero = () => {
  return (
    <div className="min-h-[100vh] max-w-[1280px] mx-auto text-white flex flex-col lg:flex-row lg:justify-between ">
      <div className="flex flex-col px-4  pt-10 lg:px-0 gap-10">
        <div className="space-y-2">
          <h1 className="text-[25px] lg:text-[62px] font-bold ">
            Øk vekst og synlighet med <br className="hidden lg:flex" /> en
            profesjonell nettside
          </h1>
          <h3 className="text-[18px] lg:text-[33px] font-bold ">
            Hos sidesone kan du spre dine digitale vinger!
          </h3>
        </div>

        <div>
          <Link
            href="#"
            className="border-2 rounded w-[280px] justify-center text-xl font-medium flex items-center gap-2 border-white p-3 transition-transform transform hover:scale-x-105 hover:origin-left group"
          >
            Trenger du en nettside?
            <IoIosArrowRoundForward
              size={30}
              className="transition-transform transform group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
      <div class="w-[375px] lg:w-[500px] h-[50vh] lg:h-[100vh]  bg-contain bg-no-repeat bg-right-bottom lg:bg-left-bottom bg-[url('/person.png')]"></div>
      {/* <div className="flex items-end justify-start">
        <figure className="w-full h-auto">
          <Image src={"/person.png"} width={400} height={800} />
        </figure>
      </div> */}
    </div>
  );
};

export default Hero;
