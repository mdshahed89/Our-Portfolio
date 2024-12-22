import Link from "next/link";
import booking from "@/assets/Booking.webp";
import Image from "next/image";
const Booking = () => {
  return (
    <div className=" h-[100vh] mb-96 lg:mb-0  mt-16  lg:px-0 grid lg:grid-cols-2 ">
      <div className="order-2 lg:order-1  h-[80vh] lg:h-[100vh] ">
        <figure className="w-full h-full overflow-hidden">
          <Image
            loading="lazy"
            placeholder="blur"
            src={booking}
            alt={"Booking"}
            width={800}
            height={800}
            className="w-full h-full object-cover "
          />
        </figure>
      </div>

      <div className="bg-[#7BDCB5] py-10  order-1  lg:order-2 flex items-center justify-center text-center">
        <div className="space-y-3">
          <h2 className="text-[40px] lg:text-[56px] font-bold">Spørsmål?</h2>
          <h2 className="text-[24px] lg:text-[32px] font-bold">
            Ring oss: +47 13 65 07
          </h2>
          <h2 className="text-[24px] lg:text-[32px] font-bold">
            Mail oss: Kontakt@sidesone.no
          </h2>
          <h2 className="text-[24px] lg:text-[32px] font-bold">Eller</h2>
          <h2 className="text-[24px] lg:text-[32px] font-bold">
            Book en konsultasjon
          </h2>
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
