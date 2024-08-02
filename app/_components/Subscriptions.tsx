import React from "react";

type Props = {};

const Subscriptions = (props: Props) => {
  return (
    <div className="mt-6 bg-[#fdfcce] ">
      <div className="flex flex-col items-center pb-3">
        <button className="border p-2 rounded-lg border-green-600 mb-2">Pause subscription</button>
        <p className="font-bold underline">Cancel subscription</p>
      </div>

      <div className="bg-[#741bff] text-center text-white py-4">
        <p>Rated ⭐️⭐️⭐️⭐️⭐️ on Shopify App Store</p>
        <h1 className="mt-4 mb-6 text-5xl font-bold tracking-tighter">
          This store is powered by Loop subscriptions!
        </h1>
        <p>Turn your customers into subscribers and drive recurring revenue for your DTC brand</p>
        <button className="bg-[#0c062a] px-5 py-3 rounded-md mt-2">Book a Demo</button>
      </div>
    </div>
  );
};

export default Subscriptions;
