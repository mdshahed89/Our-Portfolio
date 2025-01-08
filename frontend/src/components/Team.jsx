import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import coding from "@/assets/coding.webp";
import { TbUsersGroup } from "react-icons/tb";
import SatisfactionIcon from "@/assets/SatisfactionIcon.png"

const Team = () => {
  return (
    <>
      <div className="grid  lg:px-0 lg:grid-cols-2 text-white ">
        <div className=" flex flex-col justify-center gap-3 p-2 md:p-3">
          <div className=" bg-[#0b462ece] p-5 rounded-md ">
            <TbUsersGroup className=" text-[2rem] mb-1 " />
            <h3 className="text-[34px]   pb-5 font-semibold">
              Teamet bak sidesone
            </h3>
            <p className="text-[20px] text-gray-100">
              Hos Sidesone er vi eksperter på å skape digitale løsninger som
              gjør en forskjell for både enkeltpersoner og bedrifter. Vi forstår
              at behovene kan variere - fra små bedrifter og gründere som
              trenger en funksjonell og tiltalende nettside, til større
              virksomheter som krever avanserte webapplikasjoner og helhetlige
              digitale strategier. Uansett hvem du er, eller hvilken bransje du
              opererer i, er vårt mål alltid det samme: å levere løsninger som
              overgår forventningene.
            </p>
          </div>
          <div className=" bg-[#0b462ece] p-5 rounded-md  ">
            <p className="text-[20px] text-gray-100">
              Vi er en webutviklingsbedrift som setter samarbeid i sentrum.
              Gjennom tett dialog med kundene våre skreddersyr vi løsninger som
              er tilpasset deres spesifikke behov. Vi følger deg nøye opp
              gjennom hele prosessen - fra de første planleggingsmøtene til
              lansering og langt inn i driftsfasen. For oss er det ikke bare
              viktig å levere et ferdig produkt; vi ønsker å bygge langsiktige
              relasjoner og være en partner som du kan stole på.
            </p>
            <div className="flex justify-center items-center">
              <Link
                href="/om-oss"
                className="border-2 my-8 rounded-sm w-[280px] justify-center text-base lg:text-lg font-medium flex items-center gap-2 border-white p-3 transition-transform transform hover:scale-x-105 hover:origin-left group"
              >
                Les mer om sidesone
                <IoIosArrowRoundForward
                  size={30}
                  className="transition-transform transform group-hover:translate-x-2"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className=" md:min-h-[50vh]">
          <figure className="w-full h-full overflow-hidden">
            <Image
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
              src={coding}
              alt={"Coding"}
              width={400}
              height={300}
              className="w-full h-full object-contain md:object-cover "
            />
          </figure>
        </div>
      </div>
      <Satisfaction />
    </>
  );
};

export default Team;


const Satisfaction = () => {
  return(
    <div  className=" relative bg-[#fff] text-center leading-tight pt-[1rem] pb-[2rem] ">
      <div className=" flex justify-center ">
      <div className=" absolute z-10 max-w-[1400px] -bottom-[40%] md:-bottom-[55%]  w-full mx-auto flex justify-end  ">
        <Image src={SatisfactionIcon} alt="Satisfaction Icon" loading="lazy" className=" w-[17rem] object-contain opacity-30  " />
      </div>
      </div>
      <h2 className=" text-[2rem] sm:text-[3rem] md:text-[4rem] font-medium relative z-50 ">100% Fornøydgaranti</h2>
      <p className=" text-lg text-gray-500 mt-5 relative z-50 ">Vi er dedikerte til å levere et resultat du er stolt av. Derfor tilbyr vi en garanti for at du blir helt fornøyd med nettsiden.Du kan gjøre</p>
      <p className=" text-lg text-gray-500 relative z-50 ">endringer og justeringer til du er 100% tilfreds, før vi går live.</p>
    </div>
  )
}
