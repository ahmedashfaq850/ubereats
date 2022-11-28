import React from "react";
import { data } from "../data/data.js";
import { useState } from "react";

const FoodSections = () => {
  const [food, setFood] = useState(data);

  const filterType = (category) => {
    setFood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFood(
      food.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1100px] mx-auto p-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-5 text-orange-600">
        Top Rated Menu Items
      </h1>
      {/* filter section */}
      <div className="lg:flex justify-between">
        <div>
          <h3 className="font-bold mb-2">Filter Type</h3>
          <div className="flex gap-2 mb-4 overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap .scrollbar-hide">
            <button
              onClick={() => setFood(data)}
              className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white duration-300"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white duration-300"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white duration-300"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white duration-300"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white duration-300"
            >
              Chicken
            </button>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Filter Price</h3>
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => filterPrice("$")}
              className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white duration-300"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white duration-300"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white duration-300"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white duration-300"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* food container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {food.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border shadow-lg hover:cursor-pointer hover:scale-105 duration-300"
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="py-2 flex justify-between items-center p-4">
              <p className="font-bold">{item.name}</p>
              <p className=" bg-orange-600 rounded-full px-2 py-1 text-white">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodSections;
