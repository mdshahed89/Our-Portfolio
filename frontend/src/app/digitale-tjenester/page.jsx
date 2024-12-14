import React from 'react'
import Service1 from "@/assets/Service1.jpg"
import Service2 from "@/assets/Service2.jpg"
import Service3 from "@/assets/Service3.jpeg"
import Image from 'next/image'

const page = () => {
  return (
    <div className=' min-h-[100vh] pt-[80px] flex flex-col md:gap-0 gap-5  '>
        <div className=' flex items-center md:flex-row flex-col '>
            <div className=' flex-1 md:order-1 order-2 py-5   '>
                <div className=' md:px-5 px-1 '>
                <h2 className=' text-[1.8rem] lg:text-[2.2rem] font-semibold '>Markedsføring</h2>
                <p className=' text-lg lg:text-xl text-gray-600 '>Markedsføring handler om å bygge relasjoner med potensielle kunder og skape verdi gjennom riktige kanaler. Hos Sidesone utvikler vi helhetlige markedsføringsstrategier som inkluderer digital annonsering, innholdsproduksjon og sosiale medier. Vi bruker innsikt og analyser til å forstå målgruppen din og skape budskap som treffer. Gjennom nøye planlegging og kreative kampanjer hjelper vi deg med å øke synlighet, bygge engasjement og oppnå ønskede resultater.</p>
                <div className=' flex  '>
                <button className=' px-10 py-2 rounded-full bg-[#000] text-[#fff] font-medium mt-8 '>Start din vekst!</button>
                </div>
                </div>
            </div>
            <div className=' flex-1 h-[33rem] lg:h-[30rem] md:order-2 order-1 '>
                <Image src={Service1} alt='Service Img' className=' w-full h-full object-cover ' />
            </div>
        </div>
        <div className=' flex items-center  md:flex-row flex-col '>
        <div className=' flex-1  h-[33rem] lg:h-[30rem] '>
                <Image src={Service2} alt='Service Img' className=' w-full h-full object-cover ' />
            </div>
            <div className=' flex-1  '>
                <div className=' md:px-5 px-1 py-5 '>
                <h2 className=' text-[1.8rem] lg:text-[2.2rem] font-semibold '>Søkemotoroptimalisering</h2>
                <p className=' text-lg lg:text-xl text-gray-600 '>Hva er SEO, og hvordan jobber Sidesone med det?</p>
                <p className=' text-lg lg:text-xl text-gray-600 '>SEO (søkemotoroptimalisering) handler om å øke synligheten til nettsiden din i Google og andre søkemotorer, slik at du får mer organisk trafikk. Hos Sidesone bruker vi verktøyet Seobility for å analysere nettstedet ditt, identifisere forbedringsområder og lage en skreddersydd strategi. Vi fokuserer på nøkkelordoptimalisering, riktig tekstformat, god struktur og andre tiltak som hjelper siden din å rangere høyere..</p>
                <button className=' px-10 py-2 rounded-full bg-[#000] text-[#fff] font-medium mt-8 '>Øk synligheten din!</button>
                </div>
            </div>
            
        </div>

        <div className=' flex items-center md:flex-row flex-col '>
            <div className=' flex-1 md:order-1 order-2 py-5   '>
                <div className=' md:px-5 px-1 '>
                <h2 className=' text-[1.8rem] lg:text-[2.2rem] font-semibold '>Markedsføring</h2>
                <p className=' text-lg lg:text-xl text-gray-600 '>Markedsføring handler om å bygge relasjoner med potensielle kunder og skape verdi gjennom riktige kanaler. Hos Sidesone utvikler vi helhetlige markedsføringsstrategier som inkluderer digital annonsering, innholdsproduksjon og sosiale medier. Vi bruker innsikt og analyser til å forstå målgruppen din og skape budskap som treffer. Gjennom nøye planlegging og kreative kampanjer hjelper vi deg med å øke synlighet, bygge engasjement og oppnå ønskede resultater.</p>
                <div className=' flex  '>
                <button className=' px-10 py-2 rounded-full bg-[#000] text-[#fff] font-medium mt-8 '>Start din vekst!</button>
                </div>
                </div>
            </div>
            <div className=' flex-1 w-full h-[33rem] lg:h-[30rem] md:order-2 order-1 '>
                <Image src={Service3} alt='Service Img' className=' w-full h-full object-cover ' />
            </div>
        </div>

    </div>
  )
}

export default page