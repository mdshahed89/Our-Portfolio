import React from "react";

const PageLoading = () => {
  return (
    <div className=" fixed h-[100vh] z-[100] w-[100vw] bg-white flex items-center top-0 left-0 justify-center  ">
      <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-green-400 border-t-green-700"></div>
    </div>
  );
};

export default PageLoading;
