"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import { FaDatabase } from "react-icons/fa"; // Import FaDatabase for the no-data icon

const AllProject = () => {
  const [referencesData, setReferencesData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-blog`
    );
    setReferencesData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pb-10">
      {/* Check if referencesData is empty */}
      {referencesData.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[400px]  rounded-xl">
          <FaDatabase size={50} className="text-gray-400 mb-4" />
          <p className="text-2xl font-bold text-gray-600">No Data Available</p>
          <p className="text-gray-500 mt-2">
            It seems like there are no Prosjekter to display right now.
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
