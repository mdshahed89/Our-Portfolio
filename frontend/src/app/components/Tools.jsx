const toolsData = [
  {
    imgSrc: "/t1.png",
    imgAlt: "Nettsideutvikling",
    title: "Nettsideutvikling",
    description: "Lage dynamiske nettsider for din digitale suksesss",
  },
  {
    imgSrc: "/t2.png",
    imgAlt: "Driftsavtale",
    title: "Driftsavtale",
    description:
      "Stabile og pålitelige driftsavtaler som sikrer nettsiden din.",
  },
  {
    imgSrc: "/t3.png",
    imgAlt: "Responsive design",
    title: "Responsive design",
    description:
      "Responsivt design for best mulig brukeropplevelse på alle enheter.",
  },
  {
    imgSrc: "/t4.png",
    imgAlt: "Vedlikehold",
    title: "Vedlikehold",
    description: "Vedlikehold som sikrer stabilitet og optimal ytelse.",
  },
  {
    imgSrc: "/t5.png",
    imgAlt: "SEO",
    title: "SEO",
    description: "SEO som forbedrer synligheten og rangeringen på nettet.",
  },
];

const Tools = () => {
  return (
    <div className="grid lg:grid-cols-5 my-16 max-w-[1280px] mx-auto lg:justify-between px-5 lg:px-0 gap-5 ">
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
                <img
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
