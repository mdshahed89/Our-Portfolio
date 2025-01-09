import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

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
    <div>
      <div className="bg-white overflow-hidden rounded-md ">
        <div>
          <Link href={`/referanser/${reference?._id}`}>
            <figure
              className=" w-full h-auto lg:h-[350px]  "
            >
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
          <h2 className="text-2xl font-semibold">
            {reference?.title || "Untitled Blog"}
          </h2>
          <h2 className="text-sm font-medium text-gray-600">
            {formatDate(reference?.createdAt)}
          </h2>
          <div className="line-clamp-3 py-2 text-[20px] text-gray-600">
            {sliceContent(getParagraphContent(reference?.content).join(" "))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
