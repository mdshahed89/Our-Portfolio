import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import coding from "@/assets/coding.webp";
const Team = () => {
  return (
    <div className="grid  lg:px-0 lg:grid-cols-2 text-white ">
      <div className=" flex flex-col justify-center py-[1rem] px-3">
        <h3 className="text-[34px]   pb-5 font-semibold">
          Teamet bak sidesone
        </h3>
        <p className="text-[20px] text-gray-100">
          Hos Sidesone er vi eksperter på å skape digitale løsninger som gjør en
          forskjell for både enkeltpersoner og bedrifter. Vi forstår at behovene
          kan variere - fra små bedrifter og gründere som trenger en funksjonell
          og tiltalende nettside, til større virksomheter som krever avanserte
          webapplikasjoner og helhetlige digitale strategier. Uansett hvem du
          er, eller hvilken bransje du opererer i, er vårt mål alltid det samme:
          å levere løsninger som overgår forventningene.
        </p>
        <br />
        <br />
        <p className="text-[20px] text-gray-100">
          Vi er en webutviklingsbedrift som setter samarbeid i sentrum. Gjennom
          tett dialog med kundene våre skreddersyr vi løsninger som er tilpasset
          deres spesifikke behov. Vi følger deg nøye opp gjennom hele prosessen
          - fra de første planleggingsmøtene til lansering og langt inn i
          driftsfasen. For oss er det ikke bare viktig å levere et ferdig
          produkt; vi ønsker å bygge langsiktige relasjoner og være en partner
          som du kan stole på.
        </p>
        <div className="flex justify-center items-center">
          <Link
            href="/om-oss"
            className="border my-8 rounded-sm w-[280px] justify-center text-xl font-medium flex items-center gap-2 border-white p-3 transition-transform transform hover:scale-x-105 hover:origin-left group"
          >
            Les mer om sidesone
            <IoIosArrowRoundForward
              size={30}
              className="transition-transform transform group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
      <div className=" md:min-h-[50vh]">
        <figure className="w-full h-full overflow-hidden">
          <Image
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
            src={coding}
            alt={"Coding"}
            width={400}
            height={300}
            className="w-full h-full object-contain md:object-cover "
          />
        </figure>
      </div>
    </div>
  );
};

export default Team;
