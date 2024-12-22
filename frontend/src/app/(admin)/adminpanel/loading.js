import React from "react";

const loading = () => {
  return (
    <div className=" h-[100vh] bg-white flex items-center justify-center ">
      <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-green-400 border-t-green-700"></div>
    </div>
  );
};

export default loading;
