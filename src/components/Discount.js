import React from "react";

function Discount({img, text}) {
  return (
    <div className="flex w-full md:flex-col p-3 cursor-pointer group md:group-hover:bg-gray-300">
      <div className="w-1/2 md:w-full">
        <img src={img} alt="" className="w-full h-full object-contain"/>
      </div>
      <div className="w-1/2 p-3 md:w-full bg-gray-100 md:group-hover:bg-gray-500">
        <p className="text-md font-semibold md:text-sm md:group-hover:text-white">{text}</p>
      </div>
    </div>
  );
}

export default Discount;
