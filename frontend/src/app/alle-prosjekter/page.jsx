import { AllProjectCard } from "@/components/BlogPageProjects";
import { FetchDataLoading } from "@/components/Loading";

const page = async () => {
  let projects = [];

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

    projects = data?.data || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <div className="mt-[112px] min-h-[90vh] ">
      <div className=" bg-[#035635] py-[5rem] text-[#fff]  ">
        <div className=" max-w-[30rem] mx-auto text-center ">
          <h2 className=" text-[3rem] ">Prosjekter</h2>
          <p className=" text-[#ebebeb] text-lg ">
            Oppdag våre nyeste prosjekter, som viser innovative ideer,
            utviklingsprosesser og bransjetrender.
          </p>
        </div>
      </div>
      <div className=" px-3 lg:px-5 mt-5 py-5 ">
        {projects &&
        Array.isArray(projects) &&
        projects.length > 0 ? (
          <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 ">
            {projects.map((project, idx) => (
              <div key={idx}>
                <AllProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          //   <div className=" flex justify-center items-center py-[5rem] text-xl text-gray-600 ">Det er ingen prosjekter å vise</div>
          <div className=" py-[6rem] relative ">
            <FetchDataLoading />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
