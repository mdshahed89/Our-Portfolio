"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Slider = () => {
  const [projects, setProject] = useState([]);
  console.log(projects);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/get-project");
      setProject(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className=" -translate-y-24 lg:-translate-y-40">
      <Marquee
        speed={50}
        className="min-h-[400px] "
        pauseOnHover={true}
        autoFill
      >
        {projects?.map((item, index) => (
          <Link
            target="_blank"
            href={`${item?.url}`}
            key={index}
            className="group relative mx-2 z-10 hover:z-50  flex flex-col items-center justify-center 
                 overflow-hidden rounded-xl bg-white shadow-lg 
                 hover:scale-125  hover:border-2 hover:border-[#7BDCB5] 
                 transition-transform duration-500 ease-in-out"
          >
            <figure className="h-[300px] w-[400px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-xl"
              />
            </figure>

            <div
              className="absolute bottom-0 flex items-center justify-center w-full p-4 
                   text-lg font-medium text-white bg-[#035635] 
                   opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            >
              {item.title}
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider;
