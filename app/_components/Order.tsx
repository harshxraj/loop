import React from "react";

type Props = {};

const Order = (props: Props) => {
  return (
    <section className="bg-[#fdfcce] ">
      <div className="flex flex-col text-[#7d7617]">
        <h1 className="font-bold text-2xl">
          #11782521051{" "}
          <span className="w-6 h-6 bg-green-400 p-1 px-3 rounded-full text-xs font-normal">Active</span>
        </h1>

        <p className="font-bold">$71.00 + $0 shipping</p>
        <p>Deliver every 1 week</p>
      </div>
      <div className="bg-[#f5f59d] p-4 my-10 py-8 rounded-2xl text-green-800">
        <h2 className="text-2xl">
          Upcoming order : <span className="font-bold"> August 20, 2024</span>
        </h2>

        <div className="flex justify-between gap-6 mt-5 py-4">
          <button className="py-4 w-1/3 bg-green-800 rounded-full text-yellow-300">Order now</button>
          <button className="py-4 w-1/3 border border-green-800 rounded-full hover:text-yellow-300 hover:bg-green-800">
            Skip
          </button>
          <button className="py-4 w-1/3 border border-green-800 rounded-full  hover:text-yellow-300 hover:bg-green-800">
            Postpone
          </button>
        </div>

        <p>Last order was charged on July 30, 2024</p>
      </div>
      <div className="text-white border p-4 my-10 py-8 border-black rounded-2xl bg-gradient-to-tr from-blue-400 to-white">
        <p className="text-4xl font-semibold">Try something new!</p>
        <p className="text-xl tracking-tighter mt-3">
          Rehydrate and replenish with our newly launched electrolytes
        </p>
        <button className="bg-yellow-100 p-2 rounded-xl text-black mt-7">See all products</button>
      </div>
    </section>
  );
};

export default Order;
