import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const Slider = async () => {
  let projects = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-project`
    );
    const data = await response.json();
    projects = data.data || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <div>
      {projects.length > 0 ? (
        <div className="  z-[100] -translate-y-20 lg:-translate-y-28">
          <Marquee
            speed={50}
            className=" h-auto py-5 lg:min-h-[400px] "
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
                 hover:scale-125  border-2 border-[#7BDCB5] 
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
        <div className="h-60"></div>
      )}
    </div>
  );
};

export default Slider;
