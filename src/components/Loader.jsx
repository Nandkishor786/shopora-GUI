import React from "react";

const Loader = ({text}) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="text-gray-600 text-lg">{text}</p>
    </div>
  );
};

export default Loader;
