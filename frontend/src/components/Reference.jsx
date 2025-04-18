import Image from "next/image";
import Link from "next/link";
import { MdArrowForward, MdArrowForwardIos } from "react-icons/md";
import Marquee from "react-fast-marquee";
import AImg from "@/assets/A.jpg";
import BlogImg1 from "@/assets/BlogImg1.png";
import BlogImg2 from "@/assets/BlogImg2.png";
import BlogImg3 from "@/assets/BlogImg3.png";
import { IoIosArrowForward } from "react-icons/io";

async function getReferencesData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-three-blog`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    console.log("Faield to fetch fetch three blogs");
    return [];
  }

  const data = await res.json();
  return data?.data || [];
}

export default async function Reference({ title }) {
  const referencesData = await getReferencesData();

  function getParagraphContent(htmlContent = "") {
    const matches = htmlContent.match(/<p>(.*?)<\/p>/gs);
    return matches ? matches.map((match) => match.replace(/<[^>]+>/g, "")) : [];
  }

  function sliceContent(content = "", maxLength = 100) {
    const plainText = content.replace(/<[^>]+>/g, "");
    return plainText.length > maxLength
      ? plainText.slice(0, maxLength) + "..."
      : plainText;
  }

  const projects = [
    {
      img: BlogImg1,
      title: "Konsulenttorget",
      type: "Webapplikasjon",
      link: "konsulenttorget.no",
      color: "text-[#026DFB]",
      bgColor: "bg-[#026DFB]/20",
      path: "/prosjekter/67d9fd4ff74f550d6aa47b8b",
      description:
        "Konsulenttorget.no er en avansert webapplikasjon som kobler bedrifter med frilansere og konsulenter innen ulike fagfelt.",
    },
    {
      img: BlogImg3,
      title: "Bidder",
      type: "Nettside",
      link: "bidder.no",
      color: "text-[#008000]",
      bgColor: "bg-[#008000]/20",
      path: "/prosjekter/67db476cda6da85d4292bc7f",
      description:
        "Bidder er en pris og tjenestesammenligningsplattform hvor brukere kan finne de billigste skreddersydde tjenestene.",
    },
    {
      img: BlogImg2,
      title: "Amand",
      type: "Nettbutikk",
      link: "amand.no",
      color: "text-[#FF0000]",
      bgColor: "bg-[#FF0000]/20",
      path: "/prosjekter/67db362ada6da85d4292bc28",
      description:
        "Amand.no er en nettbutikk som spesialiserer seg på elegante kjoler og moteklær for kvinner",
    },
  ];

  // console.log(projects);

  const buttonTexts = [
    "Se Prosjektet",
    "Utforsk Mer",
    "Les Om Prosjektet",
    "Oppdag Arbeidet",
    "Se Detaljer",
  ];

  // console.log(referencesData);

  return (
    <div>
      <div className="pb-6 mt-6 px-3 lg:px-5 ">
        <div className="mx-auto">
          <div className=" text-center mb-[5rem] relative before:absolute before:w-[10rem] before:h-1 before:bg-[#035635] before:left-1/2 before:bottom-[-2rem] before:transform before:-translate-x-1/2 ">
            <h2 className=" text-[2rem] lg:text-[3rem] py-3 font-medium leading-none ">
              Våre Prosjekter og Løsninger
            </h2>
            <p className=" text-lg md:text-xl ">
              Utforsk våre gjennomførte prosjekter og hvordan vi har løst
              utfordringer for våre kunder.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden group w-full h-full block"
            >
              <Link href={`${project.path}`}>
                <div className="relative w-full h-[250px] xl:h-[350px]">
                  <Image
                    loading="lazy"
                    src={project?.img}
                    alt={project?.title || "Prosjekter Image"}
                    fill
                    className="w-full h-full object-cover rounded-md"
                  />
                  <span className=" absolute sr-only ">{project?.title || "View Project"}</span>
                </div>
              </Link>

              <div className="px-1 md:px-3 py-3 text-black">
                <Link
                  href={`${project.path}`}
                  className="flex items-center justify-between pb-2 md:pb-3"
                >
                  <h3 className="text-2xl font-semibold text-nowrap">
                    {project?.title || "Untitled Prosjekter"}
                  </h3>
                  <h4
                    className={`text-base md:text-lg font-medium rounded-md ${project.color} ${project.bgColor} px-2 md:px-3`}
                  >
                    {project?.type} <span className=" sr-only ">Prosjekter</span>
                  </h4>
                </Link>

                <div className="flex items-center justify-between gap-4">
                  <div className=" flex flex-col md:gap-2 gap-1 ">
                    <Link
                      href={`${project.path}`}
                    >
                      <h5 className="font-medium text-gray-600">{project.description}</h5>
                    </Link>
                    <Link
                      href={`https://${project.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="text-xl z-50 font-medium text-[#17DB4F]">{project.link}</h6>
                    </Link>
                  </div>

                  <Link
                    href={`${project.path}`}
                    className="border-[#17DB4F] border-2 p-2 rounded-full text-[1.3rem] text-[#17DB4F]"
                  >
                    <IoIosArrowForward />
                    <span className="sr-only">{project?.title} {project?.type}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-3 flex justify-end pr-3 ">
          <Link
            href={`/alle-prosjekter`}
            className="px-5 py-1 group text-lg md:text-xl flex items-center gap-2 md:py-2 transition-colors duration-300 ease-in-out rounded-full text-[#17DB4F]"
          >
            <span className="flex-shrink-0">Se alle prosjekter</span>
            <MdArrowForwardIos className=" mt-[4px] transition-transform duration-300 ease-linear transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Slider = async () => {
  let projects = [];
  let visibleProjects = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-project`,
      { next: { revalidate: 60 } }
    );

    if (!response.ok) {
      console.log("Failed to get projects");
      return [];
    }

    const data = await response.json();

    // projects = data?.data || [];
    visibleProjects =
      data?.data?.filter((project) => project?.isVisible === true) || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  // console.log(visibleProjects);

  return (
    <div className="  ">
      {visibleProjects.length > 0 ? (
        <div className="  z-[100] -translate-y-20 lg:-translate-y-28">
          <Marquee
            speed={100}
            className=" h-auto py-5 lg:min-h-[400px] overflow-visible "
            pauseOnHover={true}
            autoFill
          >
            {visibleProjects?.map((item, index) => (
              <Link
                href={`${item?._id ? `/prosjekter/${item?._id}` : "#"}`}
                key={item?._id}
                className="group relative mx-2 z-10 hover:z-50  flex flex-col items-center justify-center 
                 overflow-hidden  rounded-xl  shadow-lg 
                 lg:hover:scale-125 hover:scale-[1.15]  border-2 border-[#7BDCB5] 
                 transition-transform duration-500 ease-in-out transform-gpu "
              >
                <figure className="h-[217px] md:h-[300px] w-[290px] md:w-[400px] overflow-hidden">
                  <Image
                    // loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmM2Y0ZjUiLz48L3N2Zz4="
                    src={item?.coverImg || AImg}
                    alt={item?.title || "Uten tittel"}
                    width={400}
                    height={300}
                    priority
                    className="w-full h-full object-contain object-top rounded-md"
                  />
                </figure>

                <div
                  className="absolute bottom-0 flex items-center justify-center w-full p-4 
                    text-white bg-[#035635] 
                   opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="text-lg font-medium">{item.title}</div>
                  <span className="sr-only">{item?.url}</span>
                </div>
              </Link>
            ))}
          </Marquee>
        </div>
      ) : (
        <div className="h-60 flex text-[1.4rem] justify-center pt-20 ">
    Ingen prosjekter funnet.
  </div>
      )}
    </div>
  );
};
