import AllProject from "../../components/AllProject";

const page = () => {
  return (
    <div className="bg-[#EDFCF7] min-h-[100vh] px-3 lg:px-5 ">
      <div className="">
        <div className="pt-40 pb-5">
          <h1 className="text-[#1E293B] text-[40px] md:text-[76px] font-bold">
            Prosjekter
          </h1>
        </div>
        <div>
          <AllProject />
        </div>
      </div>
    </div>
  );
};

export default page;
