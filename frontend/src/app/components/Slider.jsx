"use client";
import Marquee from "react-fast-marquee";

const Slider = () => {
  const items = [
    { image: "/ow.png", title: "Title 1" },
    { image: "/ow.png", title: "Title 2" },
    { image: "/ow.png", title: "Title 3" },
    { image: "/ow.png", title: "Title 4" },
  ];

  return (
    <div className="-translate-y-20">
      <Marquee speed={50} pauseOnHover={true} autoFill >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[430px] hover:border group hover:border-[#7BDCB5] relative h-[330px] mx-4 flex flex-col items-center justify-center  overflow-hidden rounded-xl shadow-lg bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full transition-transform duration-500 transform group-hover:scale-105 rounded-xl  object-cover"
            />
            <div className="w-full   border-white absolute bottom-0 transition-transform duration-500 transform  group-hover:opacity-100 p-4 opacity-60  text-white flex items-center justify-center  bg-[#035635] text-lg font-medium">
              {item.title}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider;
