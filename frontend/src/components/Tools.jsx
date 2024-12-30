import T1 from "@/assets/T1.png";
import T2 from "@/assets/T2.png";
import T3 from "@/assets/T3.png";
import T4 from "@/assets/T4.png";
import T5 from "@/assets/T5.png";
import Image from "next/image";

const toolsData = [
  {
    imgSrc: T1,
    imgAlt: "Nettsideutvikling",
    title: "Nettsideutvikling",
    description: "Lage dynamiske nettsider for din digitale suksesss",
  },
  {
    imgSrc: T2,
    imgAlt: "Driftsavtale",
    title: "Driftsavtale",
    description:
      "Stabile og pålitelige driftsavtaler som sikrer nettsiden din.",
  },
  {
    imgSrc: T3,
    imgAlt: "Responsive design",
    title: "Responsive design",
    description:
      "Responsivt design for best mulig brukeropplevelse på alle enheter.",
  },
  {
    imgSrc: T4,
    imgAlt: "Vedlikehold",
    title: "Vedlikehold",
    description: "Vedlikehold som sikrer stabilitet og optimal ytelse.",
  },
  {
    imgSrc: T5,
    imgAlt: "SEO",
    title: "SEO",
    description: "SEO som forbedrer synligheten og rangeringen på nettet.",
  },
];

const Tools = () => {
  return (
    <div className="grid md:grid-cols-5 py-5 bg-[#fff]  lg:justify-between px-3 lg:px-0 gap-2 lg:gap-5 ">
      {toolsData.map((tool, index) => (
        <div key={index} className="flex flex-col md:items-center md:gap-3 ">
          <div className="flex md:items-center flex-row md:flex-col gap-4 md:gap-1  ">
            <div className=" md:mt-0 mt-1 md:w-[50px] w-[30px] h-[30px] md:h-[50px]">
              <figure className="overflow-hidden w-[30px] h-[30px] md:w-[50px] md:h-[50px]">
                <Image
                  src={tool.imgSrc}
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
                  loading="lazy"
                  placeholder="blur"
                  alt={tool.imgAlt}
                  className="h-full w-full object-contain"
                />
              </figure>
            </div>
            <div className=" md:pb-0 pb-8 md:mb-0 mb-4 md:text-center md:border-none border-b-2 border-[#000] ">
              <h2 className=" text-lg md:text-2xl font-semibold text-gray-900">
                {tool.title}
              </h2>
              <p className="text-gray-600 md:hidden block text-lg">{tool.description}</p>
            </div>
          </div>
          <div className="text-center md:block hidden">
            <p className="text-gray-600 text-xl">{tool.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tools;
