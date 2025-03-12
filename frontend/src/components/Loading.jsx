import React from "react";

const Loading = () => {
  return <div>Loading</div>;
};

export default Loading;

export const ButtonLoading = () => {
  return (
    <div className="absolute py-2 w-8 h-8 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-[#17DB4F] border-[#fff] "></div>

  );
};
