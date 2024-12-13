import Link from "next/link";

const page = () => {
  const referencesData = [
    {
      title: "REAL PARTNER AS",
      description:
        "Eiendomsselskapet Real Partner as ble etablert i 1989 og har dermed lang historie som tilrettelegger…",
      image: "/r1.png",
      date: "November 30, 2024",
      url: "https://realpartner.com",
      projectLink: "#",
    },
    {
      title: "Konsulenttorget",
      date: "November 30, 2024",
      description:
        "Kontakt frilansere og konsulenter direkte på vår åpne talentplattform. Vi viser alltid frem kvalifikasjoner, slik…",
      image: "/r2.png",
      url: "https://konsulenttorget.com",
      projectLink: "#",
    },
    {
      title: "Instacall",
      date: "November 30, 2024",
      description:
        "InstaCall er et ledende tele-marketing byrå som spesialiserer seg på kundeservice, møtebooking og salgsløsninger. Vi kombinerer…",
      image: "/r3.png",
      url: "https://instacall.com",
      projectLink: "#",
    },
  ];

  return (
    <div className="bg-[#EDFCF7] min-h-screen">
      <div className="px-5 max-w-[1280px]  mx-auto lg:px-0">
        <div className="pt-40 pb-5">
          <h1 className="text-[#1E293B] text-[40px] md:text-[76px] font-bold">
            Prosjekter
          </h1>
        </div>
        <div>
          <div className="max-w-[1280px] pb-10 px-5 lg:px-0 mx-auto">
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-8">
              {referencesData.map((reference, index) => (
                <div key={index} className="bg-white">
                  <div>
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
                  <div className=" px-5 py-3 space-y-3">
                    <h1 className="text-2xl font-semibold ">
                      {reference.title}
                    </h1>
                    <h1 className="text-sm font-medium text-gray-600">
                      {reference.date}
                    </h1>
                    <div className="min-h-[160px]">
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
