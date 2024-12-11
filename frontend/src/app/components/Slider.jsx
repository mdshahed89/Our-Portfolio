"use client";
import Marquee from "react-fast-marquee";

const Slider = () => {
  const items = [
    { content: "Item 1" },
    { content: "Item 2" },
    { content: "Item 3" },
    { content: "Item 4" },
  ];

  return (
    <div className="-translate-y-20">
      <div>
        <Marquee speed={50} pauseOnHover={true}>
          {items.map((item, index) => (
            <div
              key={index}
              className="w-[430px] h-[330px] border-2 mx-4 flex items-center justify-center"
            >
              {item.content}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Slider;
