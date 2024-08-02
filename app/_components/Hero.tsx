import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="pt-[90px] flex justify-center flex-col items-center text-center bg-gradient-to-t from-green-200 to-blue-900 text-white">
      <div>
        <p className="text-2xl mt-1">Loop Wellness Club</p>
        <h1 className="font-bold text-4xl mb-4">Welcome, Abel</h1>
      </div>
      <img
        className="w-[400px]"
        src="https://cdn.shopify.com/s/files/1/0654/7079/1899/files/electrolytesss.svg?v=1722001529"
        alt=""
      />
    </section>
  );
};

export default Hero;
