import R1 from "@/assets/R1.png";
import R2 from "@/assets/R2.png";
import R3 from "@/assets/R3.png";
import Image from "next/image";
import Link from "next/link";

const Reference = ({ title }) => {
  const referencesData = [
    {
      title: "REAL PARTNER AS",
      description:
        "Eiendomsselskapet Real Partner as ble etablert i 1989 og har dermed lang historie som tilrettelegger…",
      image: R1,
      date: "November 30, 2024",
      url: "https://realpartner.com",
      projectLink: "#",
    },
    {
      title: "Konsulenttorget",
      date: "November 30, 2024",
      description:
        "Kontakt frilansere og konsulenter direkte på vår åpne talentplattform. Vi viser alltid frem kvalifikasjoner, slik…",
      image: R2,
      url: "https://konsulenttorget.com",
      projectLink: "#",
    },
    {
      title: "Instacall",
      date: "November 30, 2024",
      description:
        "InstaCall er et ledende tele-marketing byrå som spesialiserer seg på kundeservice, møtebooking og salgsløsninger. Vi kombinerer…",
      image: R3,
      url: "https://instacall.com",
      projectLink: "#",
    },
  ];

  return (
    <div className="pb-10 px-3 lg:px-5 ">
      <div className=" mx-auto">
        <h1 className="text-[25px] lg:text-[56px] py-3 font-semibold">
          {title}
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 items-center justify-center gap-5">
        {referencesData.map((reference, index) => (
          <div key={index} className=" overflow-hidden shadow-lg">
            <div className=" ">
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
            <div className=" px-3 py-3 space-y-3 bg-slate-50">
              <h1 className="text-2xl font-semibold ">{reference.title}</h1>
              <div className="lg:min-h-[130px]">
                <p className="text-lg text-gray-600 ">
                  {reference.description}
                </p>
              </div>
              <Link
                href={reference.projectLink}
                className="text-lg mt-4 lg:mt-0 font-medium  "
              >
                Se Prosjektet →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reference;
