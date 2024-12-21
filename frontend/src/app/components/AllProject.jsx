"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
const AllProject = () => {
  const [referencesData, setReferencesData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/get-blog");
    setReferencesData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="pb-10 ">
      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-2 lg:gap-4 ">
        {referencesData.map((reference) => (
          <BlogCard reference={reference} key={reference._id} />
        ))}
      </div>
    </div>
  );
};

export default AllProject;
