import React from "react";

const Loading = () => {
  return <div>Loading</div>;
};

export default Loading;

export const ButtonLoading = () => {
  return (
    <div className=" absolute left-0 top-0 w-full h-full flex items-center justify-center ">
      <div className=" py-2 w-8 h-8 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-[#17DB4F] border-[#fff] "></div>
    </div>

  );
};


export const FetchLoading = () => {
  return (
    <div className=" absolute bg-black/50 left-0 top-0 w-full h-full flex rounded-sm items-center justify-center ">
      <div className=" py-2 w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-[#17DB4F] border-[#fff] "></div>
    </div>

  );
};