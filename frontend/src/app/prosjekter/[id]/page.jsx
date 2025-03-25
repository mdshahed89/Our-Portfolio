import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Konsulenttorget from "@/assets/R2.png";

const page = async ({ params }) => {
  const { id } = await params;

  let project = {};
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/single-project/${id}`
    );

    if (!response.ok) {
      console.log("Faield to get projects");
      return {};
    }

    const data = await response.json();

    project = data?.data || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }


  return (
    <div className=" mt-[120px] py-5 ">
      <div className=" max-w-[1400px] px-3 mx-auto ">
        <Link
          href={/^https?:\/\//.test(project?.url) ? project?.url : `https://${project?.url}`}
          className=" flex items-center text-[1.4rem] gap-2 text-[#17DB4F] mb-5 "
        >
          <span>{project?.url.replace(/^(https?:\/\/)?(www\.)?/, '')}</span>
          <FaExternalLinkAlt />
        </Link>
        <div className=" flex items-center lg:flex-row flex-col  gap-2 ">
          <div className=" flex-1 lg:order-1 order-2 ">
            <p className=" text-[2rem] lg:mt-0 mt-3 md:text-[2.5rem] font-medium ">
              {project?.projectName}
            </p>
            <div className=" font-medium my-[1rem] ">
              <h5 className=" text-[#525252] ">
                Project Start{" "}
                <span className=" text-[#000] font-semibold ">
                  {project?.projectStart}
                </span>
              </h5>
              <h5 className=" text-[#525252] ">
                Nettside Levert{" "}
                <span className=" text-[#000] font-semibold ">
                  {project?.projectEnd}
                </span>
              </h5>
              <h5 className=" text-[#525252] ">
                Type{" "}
                <span className=" text-[#000] font-semibold ">
                  {project?.type}
                </span>
              </h5>
              <h5 className=" text-[#525252] ">
                Status{" "}
                <span
                  className={`${
                    project?.status === "Online"
                      ? "text-[#17DB4F]"
                      : project?.status === "Offline"
                      ? "text-yellow-500"
                      : "text-orange-500"
                  } font-semibold`}
                >
                  {project?.status}
                </span>
              </h5>
            </div>
            <div className=" ">
              <p className=" text-[1.3rem] font-medium ">
                Kort om nettside/bedriften
              </p>
              {project?.briefAboutWebsite}
            </div>
          </div>
          <div className=" flex-1  lg:order-2 order-1 border-2 relative h-[350px] rounded-md border-[#17DB4F] ">
            <Image
              src={project?.mainImgUrl || Konsulenttorget}
              alt="Nettside img"
              fill
              className=" w-full h-full object-cover "
            />
          </div>
        </div>
      </div>

      <SecondPart project={project} />
      <ThirdPart project={project} />
      
      {
        project?.reviewerImgUrl && project?.reviewMessage && project?.rating && <ForthPart project={project} />
      }
      <div>
        <Link
          href={`/#reviews`}
          className=" mt-[5rem] text-[1.2rem] font-medium flex items-center justify-center gap-2 "
        >
          <span>Les google review</span>
          <FaExternalLinkAlt />
        </Link>
      </div>
      <KontaktSection project={project} />
    </div>
  );
};

export default page;

import FigmaIcon from "@/assets/Figma.png";
import { GiCheckMark } from "react-icons/gi";

const SecondPart = ({ project }) => {
  return (
    <div className=" my-8  ">
      <h3 className=" text-center text-[1.5rem] bg-[#eeeeee] w-fit px-5 py-1 mx-auto rounded-t-2xl ">
        Verktøy brukt
      </h3>
      <div className=" bg-[#eeeeee] pt-3 pb-5 flex items-center justify-center gap-5 ">
        {project?.toolImgs &&
        Array.isArray(project?.toolImgs) &&
        project.toolImgs.length > 0 ? (
          project.toolImgs.map((prjct, idx) => (
            <div key={idx} className=" flex flex-col items-center gap-2 ">
              {/* <h5>Design fason</h5> */}
              <div className=" relative w-[3rem] h-[4rem] ">
                <Image
                  src={prjct || FigmaIcon}
                  className=" w-[3rem] object-contain "
                  fill
                  alt="Figma icon"
                />
              </div>
            </div>
          ))
        ) : (
          <div className=" flex flex-col items-center gap-2 ">
            <h5>Design fason</h5>
            <Image
              src={FigmaIcon}
              className=" w-[3rem] object-contain "
              alt="Figma icon"
            />
          </div>
        )}
      </div>

      <div className=" max-w-[1400px] mx-auto mt-[2rem] mb-[3rem] px-2 ">
        <p className=" text-center text-[1.5rem] font-medium mb-5 ">
          Vi brukte følgende ferdigheter i utviklingen av denne tjenesten
        </p>
        <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 ">
          {project?.skills &&
            Array.isArray(project?.skills) &&
            project.skills.length > 0 &&
            project.skills.map((skill, idx) => (
              <div key={idx} className=" bg-[#eeeeee] flex items-center gap-1 justify-center text-center py-1 rounded-md font-medium text-[1.3rem] ">
                <GiCheckMark className=" text-[#17DB4F] " />
                {skill}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const ThirdPart = ({ project }) => {
  return (
    <div className=" max-w-[1400px] mx-auto px-3 ">
      <div className=" min-h-[8rem] ">
        <h2 className=" text-[2rem] md:text-[2.5rem] text-center font-medium ">
          Detaljert beskrivelse
        </h2>
        <p className=" mt-5 ">{project?.detailedDescription}</p>
        {/* <p className=" mt-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          expedita, corporis illum nesciunt magni illo quas at praesentium,
          dolore, ea et doloremque itaque quae. Nulla temporibus ad officia eum
          saepe consequuntur. Dolore, delectus tempore culpa consequuntur
          officiis maiores explicabo nam!
        </p> */}
      </div>
      <div>
        <h3 className=" text-[2rem] text-center font-medium mt-5 ">Galleri</h3>
        <div className=" flex justify-center gap-2 md:gap-4 mt-5 ">
          {/* <div>
            <Image
              src={Konsulenttorget}
              alt="Konsulettorget Img"
              className=" w-[17rem] h-[11rem] object-cover rounded-md lg:mx-0 mx-auto "
            />
          </div> */}

          {project?.gellaryImgs &&
          Array.isArray(project?.gellaryImgs) &&
          project.gellaryImgs.length > 0 ? 
          <div className=" flex gap-5 flex-wrap mx-auto justify-center ">
            {
              project.gellaryImgs.map((img, idx) => (
                <div
                  key={idx}
                  className=" relative w-[12rem] h-[8rem] rounded-md "
                >
                  <Image
                    src={img || Konsulenttorget}
                    className="  object-contain rounded-md lg:mx-0 mx-auto "
                    fill
                    alt="Gallery Img"
                  />
                </div>
              ))
            }
          </div> : (
            <div className=" text-lg text-gray-600 ">
              Galleri bilde ikke funnet eller eksisterer ikke.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import MessageIcon from "@/assets/MessageIcon.jpg";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { KontaktSection } from "@/utils/UtilityComponent";

const ForthPart = ({ project }) => {

  
  return (
    <div className=" mt-10 mb-14 ">
      <div>
        <h3 className=" text-[2rem] md:text-[2.5rem] font-medium text-center ">
          Kunde
        </h3>
        <h4 className=" text-[1.5rem] md:text-[2rem] font-medium text-center ">
          Kunde anmeldelse
        </h4>
      </div>
      <div className=" relative max-w-[30rem] mx-auto shadow-[0px_1px_10px_rgba(0,0,0,0.15)] px-6 pt-14 pb-20 rounded-md mt-20 ">
        <div className=" absolute -top-[3rem] w-full left-0 flex justify-center  ">
          <div className=" relative w-[5rem] h-[5rem] rounded-full ">
            <Image
              src={project?.reviewerImgUrl || MessageIcon}
              alt="Review Img"
              fill
              className=" w-full h-full object-cover rounded-full "
            />
          </div>
        </div>
        <p>{project?.reviewMessage}</p>
        <div className=" absolute -bottom-[1.35rem] left-0 flex justify-center w-full ">
          <div className=" flex items-center gap-2 text-[1.5rem] text-yellow-500 bg-[#035635] px-5 h-[2.7rem] rounded-md ">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star}>
                {project?.rating >= star ? <IoStar /> : <IoStarOutline />}
              </span>
            ))}
            {/* <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
