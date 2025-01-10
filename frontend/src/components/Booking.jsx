import Link from "next/link";
import booking from "@/assets/Booking.webp";
import Image from "next/image";
const Booking = () => {
  return (
    <div className=" lg:mb-0 z-50 relative  lg:px-0 grid lg:grid-cols-2 ">
      <div className="order-2 lg:order-1  ">
        <div className="w-full h-auto md:h-[700px] overflow-hidden ">
          <Image
            loading="lazy"
            placeholder="blur"
            src={booking}
            alt={"Booking Img"}
            width={800}
            height={800}
            className="w-full h-full object-cover "
          />
        </div>
      </div>

      <div className="bg-[#7BDCB5] py-10  order-1  lg:order-2 flex items-center justify-center text-center">
        <div className="space-y-5 leading-tight">
          <h3 className="text-[40px] lg:text-[56px] font-medium">Spørsmål?</h3>
          <div>
          <p className="text-[24px] lg:text-[32px] font-medium">
            Ring oss: +47 13 65 07
          </p>
          <p className="text-[24px] lg:text-[32px] font-medium">
            Mail oss: Kontakt@sidesone.no
          </p>
          </div>
          <p className="text-[24px] lg:text-[32px] font-medium">Eller</p>
          <p className="text-[24px] lg:text-[32px] font-medium">
            Book en konsultasjon
          </p>
          <div className="flex justify-center py-5 lg:my-3 mt-6">
            <Link
              href={"/book-now"}
              className="w-60 bg-black transition-all duration-300 ease-in-out active:scale-95 text-white p-3 rounded-full"
            >
              Book Møte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
