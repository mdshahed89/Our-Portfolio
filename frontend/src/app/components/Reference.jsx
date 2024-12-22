"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
const Reference = ({ title }) => {
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

  function getParagraphContent(htmlContent) {
    // Use a regex to match <p> tags and capture their content
    const matches = htmlContent?.match(/<p>(.*?)<\/p>/gs);
    return matches ? matches.map((match) => match.replace(/<[^>]+>/g, "")) : [];
  }

  function sliceContent(content, maxLength) {
    // Extract text content and apply the slice
    const textContent = parse(content);
    return textContent.length > maxLength
      ? textContent.slice(0, maxLength) + "..."
      : textContent;
  }

  return (
    <div>
      {referencesData.length > 0 && (
        <div className="pb-10 px-3 lg:px-5 ">
          <div className=" mx-auto">
            <h2 className="text-[25px] lg:text-[56px] py-3 font-semibold">
              {title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 items-center justify-center gap-5">
            {referencesData?.slice(0, 3).map((reference, index) => (
              <div key={index} className=" overflow-hidden ">
                <div className=" ">
                  <Link href={`/referanser/${reference?._id}`}>
                    <figure className="h-[230px] w-full overflow-hidden">
                      <Image
                        loading="lazy"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
                        placeholder="blur"
                        src={`${reference?.coverImage}`}
                        alt={`${reference?.title}` || "Blog Image"}
                        width={400}
                        height={230}
                        className="object-cover h-full w-full"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="px-3 py-3 space-y-3">
                  <h2 className="text-2xl font-semibold">
                    {reference?.title || "Untitled Blog"}
                  </h2>

                  <div className="line-clamp-3 py-2 text-[22px] text-gray-600">
                    {sliceContent(
                      getParagraphContent(reference?.content).join(" ")
                    )}
                  </div>
                  <div>
                    <Link
                      className="text-black p-3 transition-all duration-300 ease-in-out active:scale-95 font-medium text-lg"
                      href={`/referanser`}
                    >
                      Se Prosjektet→
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reference;
