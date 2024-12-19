import Link from "next/link";
import React from "react";
import Team from "@/assets/team.jpg";
import Image from "next/image";
const page = () => {
  return (
    <div className="pt-40 px-5">
      <div>
        <h1 className="text-3xl py-3 font-semibold">REAL PARTNER AS</h1>
        <div className="text-blue-600  text-sm font-medium">
          <Link href={"#"}>Av Sidesone AS </Link> / november 30, 2024
        </div>
        <div className="py-5">
          <figure className=" max-w-[1400px] mx-auto h-[500px]">
            <Image src={Team} alt="" className="object-cover  h-full w-full" />
          </figure>
        </div>
        <div className="py-3 space-y-5">
          <p className="text-xl font-normal text-slate-600">
            Eiendomsselskapet Real Partner as ble etablert i 1989 og har dermed
            lang historie som tilrettelegger gjennom oppgraderinger, design og
            innredning for « det gode liv « i et hjem, fritidsbolig, et lite
            hotell, eller i et næringslokalet som passer akkurat for deg og
            dine. Gjennom et svært aktivt eierskap driver selskapet med kjøp,
            salg, utleie og rådgivning. Det er avgjørende å ha kontroll i alle
            ledd, bare da kan vi være sikre på at produktet vi tilbyr vil
            tilfredstille de høyeste kravene til kvalitet og trivsel.
          </p>
          <p className="text-xl font-normal text-slate-600">
            Her er et forslag til blogginnlegget om prosjektet for{" "}
            <span className="text-2xl font-semibold">Real Partner AS:</span>
          </p>
        </div>
        <div>
          <h1 className="text-3xl py-3 font-semibold">
            Real Partner AS: Perfeksjon og estetikk i fokus
          </h1>
          <p className="text-xl py-3 font-normal text-slate-600">
            Når vi fikk muligheten til å samarbeide med Real Partner AS og deres
            grunnlegger, Per Ove Bakke, visste vi at vi måtte levere noe helt
            spesielt. Per Ove er kjent for sin estetiske sans og perfeksjonisme,
            og vårt mål var å skape en nettside som reflekterte disse verdiene.
            Resultatet? En elegant og sofistikert nettside som setter Real
            Partner AS i et perfekt lys.
          </p>
        </div>

        <div>
          <h1 className="text-3xl py-3 font-semibold">
            Real Partner AS - Et etablert navn siden 1989
          </h1>
          <p className="text-xl py-3 font-normal text-slate-600">
            Real Partner AS har vært en aktør i sin bransje i over tre tiår, og
            deres rykte for kvalitet og profesjonalitet er velkjent. For å bygge
            videre på dette omdømmet, fokuserte vi på å levere en nettside som
            kombinerer både tradisjon og moderne estetikk.
          </p>
        </div>

        <div>
          <h1 className="text-3xl py-3 font-semibold">
            Samarbeidet med Per Ove Bakke
          </h1>
          <p className="text-xl py-1  font-normal text-slate-600">
            Per Ove Bakke er en perfeksjonist som vet hva han vil ha, og det var
            inspirerende å jobbe med ham gjennom hele prosessen. Hans visjon
            handlet om å skape en nettside som var:
          </p>

          <p className="text-xl py-1 pt-3 font-normal text-slate-600">
            <span className="font-bold">Estetisk tiltalende:</span> Fokus på
            detaljer, harmoni i design og et luksuriøst preg.
          </p>
          <p className="text-xl py-1 font-normal text-slate-600">
            <span className="font-bold">Brukervennlig:</span> Enkel navigasjon
            for besøkende, samtidig som det visuelle skulle være i høysetet.
          </p>
          <p className="text-xl py-1 font-normal text-slate-600">
            <span className="font-bold">Tidløs, men moderne:</span> En balanse
            mellom klassisk design og moderne teknologi.s
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
