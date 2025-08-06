import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh] w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-blue-600 font-medium text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;
