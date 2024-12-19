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
    <div className="grid lg:grid-cols-5 my-16  lg:justify-between px-3 lg:px-0 gap-5 ">
      {toolsData.map((tool, index) => (
        <div key={index} className="flex flex-col items-center  space-y-2">
          <div className="flex items-center flex-col ">
            <div className="w-[60px] h-[60px]">
              <figure
                className="overflow-hidden"
                style={{
                  height: "60px",
                  width: "60px",
                }}
              >
                <Image
                  src={tool.imgSrc}
                  alt={tool.imgAlt}
                  className="h-full w-full object-contain"
                />
              </figure>
            </div>
            <div className="text-center space-y-2 pt-2">
              <h1 className="text-2xl font-semibold text-gray-900">
                {tool.title}
              </h1>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-lg">{tool.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tools;
