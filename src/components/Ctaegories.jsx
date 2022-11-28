import React from "react";
import { categories } from "../data/data.js";

const Ctaegories = () => {
  return (
    <div className="max-w-[1100px] mx-auto p-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">
        {" "}
        Ctaegories
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 hover:cursor-pointer hover:scale-105 duration-300  rounded-lg bg-gray-100 "
          >
            <h2>{item.name}</h2>
            <img className="w-20" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ctaegories;
