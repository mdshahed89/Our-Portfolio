"use client";
import axios from "axios";
import BlogCard from "./BlogCard";
import { FaDatabase } from "react-icons/fa";
import { useEffect, useState } from "react";

// const fetchReferencesData = async () => {
//   try {
//     const { data } = await axios.get(
//       `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-blog`
//     );
//     return data.data;
//   } catch (error) {
//     console.error("Failed to fetch references data:", error);
//     return [];
//   }
// };

const AllProject = () => {
  const [referencesData, setReferencesData] = useState([]);
  // const referencesData = await fetchReferencesData();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-blog`
      );
      // referencesData = data.data
      setReferencesData(data?.data)
    } catch (error) {
      console.log(`Failed to fetch projects`);
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pb-10">
      {referencesData.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[400px]  rounded-xl">
          <FaDatabase size={50} className="text-gray-400 mb-4" />
          <p className="text-2xl font-bold text-gray-600">
            Ingen data tilgjengelig
          </p>
          <p className="text-gray-500 text-center mt-2">
            Det virker som det ikke er noen prosjekter å vise akkurat nå.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {referencesData.map((reference) => (
            <BlogCard reference={reference} key={reference._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProject;

// export const SliderComponent = ({ item, index }) => {
//   const router = useRouter();

//   return (
//     <div
//       target="_blank"
//       onClick={() => router.push(item?.url || "#")}
//       className="group relative mx-2 z-10 hover:z-50 flex flex-col items-center justify-center
//      overflow-hidden rounded-xl bg-red-500 shadow-lg
//      lg:hover:scale-125 hover:scale-[1.15] border-2 border-[#7BDCB5]
//      transition-transform duration-500 ease-in-out transform-gpu cursor-pointer"
//     >
//       <figure className="h-[250px] md:h-[300px] w-[300px] md:w-[400px] overflow-hidden">
//         <Image
//           loading="lazy"
//           placeholder="blur"
//           blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
//           src={item.image}
//           alt={item.title}
//           width={400}
//           height={300}
//           className="w-full h-full object-cover rounded-md"
//         />
//       </figure>

//       <div
//         className="absolute bottom-0 flex items-center justify-center w-full p-4
//        text-lg font-medium text-white bg-[#035635]
//        opacity-60 group-hover:opacity-100 transition-opacity duration-500"
//       >
//         {item?.title}
//       </div>
//     </div>
//   );
// };
