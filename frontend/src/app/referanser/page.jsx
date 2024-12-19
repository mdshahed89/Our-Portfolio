import R1 from "../../assets/R1.png";
import R2 from "../../assets/R2.png";
import R3 from "../../assets/R3.png";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const referencesData = [
    {
      title: "REAL PARTNER AS",
      description:
        "Eiendomsselskapet Real Partner as ble etablert i 1989 og har dermed lang historie som tilrettelegger…",
      image: R1,
      date: "November 30, 2024",
      url: "http://localhost:3000/referanser/1",
      projectLink: "#",
    },
    {
      title: "Konsulenttorget",
      date: "November 30, 2024",
      description:
        "Kontakt frilansere og konsulenter direkte på vår åpne talentplattform. Vi viser alltid frem kvalifikasjoner, slik…",
      image: R2,
      url: "http://localhost:3000/referanser/2",
      projectLink: "#",
    },
    {
      title: "Instacall",
      date: "November 30, 2024",
      description:
        "InstaCall er et ledende tele-marketing byrå som spesialiserer seg på kundeservice, møtebooking og salgsløsninger. Vi kombinerer…",
      image: R3,
      url: "http://localhost:3000/referanser/3",
      projectLink: "#",
    },
  ];

  return (
    <div className="bg-[#EDFCF7] px-3 lg:px-5 ">
      <div className="">
        <div className="pt-40 pb-5">
          <h1 className="text-[#1E293B] text-[40px] md:text-[76px] font-bold">
            Prosjekter
          </h1>
        </div>
        <div>
          <div className="pb-10 ">
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-2 lg:gap-4 ">
              {referencesData.map((reference, index) => (
                <div key={index} className="bg-white overflow-hidden ">
                  <div>
                    <Link target="_blank" href={reference.url}>
                      <figure
                        style={{
                          height: "230px",
                          width: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={reference.image}
                          alt={reference.title}
                          className="object-cover h-full w-full"
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className=" px-3 py-3 space-y-3">
                    <h1 className="text-2xl font-semibold ">
                      {reference.title}
                    </h1>
                    <h1 className="text-sm font-medium text-gray-600">
                      {reference.date}
                    </h1>
                    <div className="min-h-[150px]">
                      <p className="text-[20px] text-gray-600">
                        {reference.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
