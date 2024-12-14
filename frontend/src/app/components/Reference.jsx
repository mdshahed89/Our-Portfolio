import Link from "next/link";

const Reference = ({ title }) => {
  const referencesData = [
    {
      title: "REAL PARTNER AS",
      description:
        "Eiendomsselskapet Real Partner as ble etablert i 1989 og har dermed lang historie som tilrettelegger…",
      image: "/r1.png",
      url: "https://realpartner.com",
      projectLink: "#",
    },
    {
      title: "Konsulenttorget",
      description:
        "Kontakt frilansere og konsulenter direkte på vår åpne talentplattform. Vi viser alltid frem kvalifikasjoner, slik…",
      image: "/r2.png",
      url: "https://konsulenttorget.com",
      projectLink: "#",
    },
    {
      title: "Instacall",
      description:
        "InstaCall er et ledende tele-marketing byrå som spesialiserer seg på kundeservice, møtebooking og salgsløsninger. Vi kombinerer…",
      image: "/r3.png",
      url: "https://instacall.com",
      projectLink: "#",
    },
  ];

  return (
    <div className="max-w-[1280px] pb-10 px-5 lg:px-0 mx-auto">
      <div>
        <h1 className="text-[25px] lg:text-[56px] py-3 font-semibold">
          {title}
        </h1>
      </div>

      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-8">
        {referencesData.map((reference, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-lg">
            <div className=" ">
              <Link target="_blank" href={reference.url}>
                <figure
                  style={{
                    height: "230px",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={reference.image}
                    alt={reference.title}
                    className="object-cover h-full w-full"
                  />
                </figure>
              </Link>
            </div>
            <div className=" px-5 py-3 space-y-3 bg-slate-50">
              <h1 className="text-2xl font-semibold ">{reference.title}</h1>
              <div className="min-h-[130px]">
                <p className="text-[20px] text-gray-700">
                  {reference.description}
                </p>
              </div>
              <Link
                href={reference.projectLink}
                className="text-lg font-medium  "
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
