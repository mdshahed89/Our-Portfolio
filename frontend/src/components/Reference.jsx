import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

async function getReferencesData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get-blog`, {
    next: { revalidate: 60 }, 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch references data");
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

  return (
    <div>
      {referencesData.length > 0 && (
        <div className="pb-10 px-3 lg:px-5 ">
          <div className="mx-auto">
            <h2 className="text-[25px] lg:text-[56px] py-3 font-semibold">
              {title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 items-center justify-center gap-5">
            {referencesData.slice(0, 3).map((reference, index) => (
              <div key={index} className="overflow-hidden">
                <div>
                  <Link href={`/referanser/${reference?._id}`}>
                    <figure className="h-[230px] w-full overflow-hidden">
                      <Image
                        loading="lazy"
                        src={reference?.coverImage}
                        alt={reference?.title || "Blog Image"}
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
                      getParagraphContent(reference?.content).join(" "),
                      150
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
}