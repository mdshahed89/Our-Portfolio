import { FaDatabase } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import BlogPageProjects from "@/components/BlogPageProjects";
const page = async () => {

  let referencesData = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-client-blogs`, {
        next: {revalidate: 60}
      }
    );

    if (!response.ok) {
      console.log("Faield to client blogs");
      return
    }
    const data = await response.json();
    referencesData = data?.data || [];
  } catch (error) {
    console.log(error)
  }

  let projects = [];
  let visibleProjects = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-project`,
      { next: { revalidate: 60 } }
    );

    if (!response.ok) {
      console.log("Faield to get projects");
      return [];
    }

    const data = await response.json();
    
    visibleProjects = data?.data?.filter(project => project?.isVisible !== true) || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  

  return (
    <div className="mt-[112px]">
      <div className=" bg-[#035635] py-[5rem] text-[#fff]  ">
        <div className=" max-w-[40rem] mx-auto text-center ">
        <h2 className=" text-[3rem] ">Prosjekter og Blogger</h2>
        <p className=" text-[#ebebeb] text-lg ">Oppdag våre nyeste prosjekter og innsiktsfulle blogginnlegg, som viser innovative ideer, utviklingsprosesser og bransjetrender.</p>
        </div>
      </div>
      <div className=" px-3 lg:px-5 mt-2 ">
        <div className=" text-[3rem] text-center mb-2 font-medium ">
          <div>Prosjekter</div>
        </div>
        <BlogPageProjects projects={visibleProjects} />
      </div>
      <div className="bg-[#fff] px-3 lg:px-5 mt-20 ">
        <div>
        <div className=" text-[3rem] text-center mb-7 font-medium ">
          <div>Blogger</div>
        </div>
          <AllProject referencesData={referencesData} />
        </div>
    </div>
    </div>
  );
};

export default page;

const AllProject = ({referencesData}) => {

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

const BlogCard = ({ reference }) => {
  function formatDate(isoDate) {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  function getParagraphContent(htmlContent) {
    const matches = htmlContent?.match(/<p>(.*?)<\/p>/gs);
    return matches ? matches.map((match) => match.replace(/<[^>]+>/g, "")) : [];
  }

  function sliceContent(content, maxLength) {
    const textContent = parse(content);
    return textContent.length > maxLength
      ? textContent.slice(0, maxLength) + "..."
      : textContent;
  }

  return (
    <div className=" h-full  ">
      <div className="bg-white h-full overflow-hidden rounded-md ">
        <div>
          <Link href={`/referanser/${reference?._id}`}>
            <figure className=" w-full h-auto md:h-[350px]  ">
              <Image
                loading="lazy"
                placeholder="blur"
                src={`${reference?.coverImage}`}
                alt={`${reference?.title}` || "Blog Image"}
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
                width={400}
                height={230}
                className="object-cover h-full w-full"
              />
            </figure>
          </Link>
        </div>
        <div className="px-3 py-3 space-y-3 pb-[2rem]">
          <div className="text-2xl font-semibold">
            {reference?.title || "Untitled Blog"}
          </div>
          <div className="text-sm font-medium text-gray-600">
            {formatDate(reference?.createdAt)}
          </div>
          <div className="line-clamp-3 py-2 text-[20px] text-gray-600">
            {sliceContent(getParagraphContent(reference?.content).join(" "))}
          </div>
        </div>
      </div>
    </div>
  );
};




