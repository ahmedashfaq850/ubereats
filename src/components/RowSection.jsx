import React from "react";

const RowSection = () => {
  return (
    <div className="max-w-[1100px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="relative rounded-xl hover:cursor-pointer hover:scale-105 duration-300">
        {/* overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Chicken Burger</p>
          <p className="px-2">Newly Add</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[180px] lg:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>

      {/* card 2 */}
      <div className="relative rounded-xl hover:cursor-pointer hover:scale-105 duration-300">
        {/* overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">BBQ Platter</p>
          <p className="px-2">Newly Add</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[180px] lg:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/5175631/pexels-photo-5175631.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="/"
        />
      </div>

      {/* card 3 */}
      <div className="relative rounded-xl hover:cursor-pointer hover:scale-105 duration-300">
        {/* overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Loaded Fries</p>
          <p className="px-2">Newly Add</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[180px] lg:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/4589139/pexels-photo-4589139.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="/"
        />
      </div>
    </div>
  );
};

export default RowSection;
