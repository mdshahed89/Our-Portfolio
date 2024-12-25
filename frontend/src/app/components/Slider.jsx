"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import PageLoading from "./PageLoading";

const Slider = () => {
  const [projects, setProject] = useState([]);
  const [isClientReady, setIsClientReady] = useState(false);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-project`
      );
      setProject(data.data);
    };
    fetchData();
  }, []);

  if (!isClientReady) {
    return <PageLoading />;
  }

  return (
    <div>
      {projects.length > 0 ? (
        <div className=" -translate-y-28 lg:-translate-y-40">
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
                <figure className="h-[250px] md:h-[300px] w-[300px] md:w-[400px] overflow-hidden">
                  <Image
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
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
      ) : (
        <div className="h-60">
          <PageLoading />
        </div>
      )}
    </div>
  );
};

export default Slider;
