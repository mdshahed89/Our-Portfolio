import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import Marquee from "react-fast-marquee";
async function getReferencesData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get-three-blog`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Kunne ikke hente referansedata");
  }

  const data = await res.json();
  return data.data || [];
}

export default async function Reference({ title }) {
  const referencesData = await getReferencesData();

  function getParagraphContent(htmlContent = "") {
    const matches = htmlContent.match(/<p>(.*?)<\/p>/gs);
    return matches ? matches.map((match) => match.replace(/<[^>]+>/g, "")) : [];
  }

  function sliceContent(content = "", maxLength = 100) {
    const plainText = content.replace(/<[^>]+>/g, "");
    return plainText.length > maxLength
      ? plainText.slice(0, maxLength) + "..."
      : plainText;
  }

  // console.log(referencesData);
  

  return (
    <div>
      {referencesData.length > 0 && (
        <div className="pb-10 mt-6 px-3 lg:px-5 ">
          <div className="mx-auto">
            <div className="text-[2rem] lg:text-[3rem] py-3 font-medium">
              {title}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {referencesData.slice(0, 3).map((reference, index) => (
              <div key={index} className="overflow-hidden group w-full h-full ">
                <Link
                  href={`/referanser/${reference?._id}`}
                  className=" w-full h-full "
                >
                  <div className=" relative w-full h-[300px] lg:[250px] xl:h-[350px] ">
                    <Image
                      loading="lazy"
                      src={reference?.coverImage}
                      alt={reference?.title || "Blog Image"}
                      fill
                      // width={16}
                      // height={9}
                      className="w-full h-full object-cover "
                    />
                  </div>
                </Link>

                <div className="px-3 py-3 space-y-3">
                  <div className="text-2xl font-semibold">
                    {reference?.title || "Untitled Blog"}
                  </div>
                  <div className="line-clamp-3 py-2 text-[22px] text-gray-600">
                    {sliceContent(
                      getParagraphContent(reference?.content).join(" "),
                      150
                    )}
                  </div>
                  <div>
                    <Link
                      className="text-black group flex items-center gap-2 border-b-2 border-[#035635] w-fit pb-1 transition-all duration-300 ease-in-out active:scale-95 font-medium text-lg"
                      href={`/referanser`}
                    >
                      Se Prosjektet{" "}
                      <MdArrowForward className=" mt-1 group-hover:ml-2 transition-all duration-200 ease-linear " />
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
}

export const Slider = async () => {
  let projects = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-project`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    projects = data?.data || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <div>
      {projects.length > 0 ? (
        <div className="  z-[100] -translate-y-20 lg:-translate-y-28">
          <Marquee
            speed={100}
            className=" h-auto py-5 lg:min-h-[400px] overflow-visible "
            pauseOnHover={true}
            autoFill
          >
            {projects?.map((item, index) => (
              <Link
                target="_blank"
                href={`${item?.url || "#"}`}
                key={index}
                className="group relative mx-2 z-10 hover:z-50  flex flex-col items-center justify-center 
                 overflow-hidden  rounded-xl bg-red-500 shadow-lg 
                 lg:hover:scale-125 hover:scale-[1.15]  border-2 border-[#7BDCB5] 
                 transition-transform duration-500 ease-in-out transform-gpu "
              >
                <figure className="h-[250px] md:h-[300px] w-[300px] md:w-[400px] overflow-hidden">
                  <Image
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmM2Y0ZjUiLz48L3N2Zz4="
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-md"
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
        <div className="h-60"></div>
      )}
    </div>
  );
};
