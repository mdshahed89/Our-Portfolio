"use client";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import axios from "axios";

const page = () => {
  const [referencesData, setReferencesData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/get-blog");
    setReferencesData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-[#EDFCF7] px-3 lg:px-5 ">
      <div className="">
        <div className="pt-40 pb-5">
          <h1 className="text-[#1E293B] text-[40px] md:text-[76px] font-bold">
            Prosjekter
          </h1>
        </div>
        <div>
          <div className="pb-10 ">
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-2 lg:gap-4 ">
              {referencesData.map((reference) => (
                <BlogCard reference={reference} key={reference._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
