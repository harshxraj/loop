import React from "react";

type Props = {};

const Bonus = (props: Props) => {
  return (
    <div className="border p-5 py-8 border-green-700/70 rounded-xl bg-[#f3de5e]">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-7xl font-bold text-green-800">Wellness Bonus</h1>
        <img
          src="https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_stamp_1.svg?v=1721371853"
          alt=""
          className="w-[100px]"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 text-green-800 font-bold">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_01.svg?v=1721371642"
            alt=""
          />
          <p>40% off on your first order</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_01.svg?v=1721371642"
            alt=""
          />
          <p>A gift after 2 orders</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_01.svg?v=1721371642"
            alt=""
          />
          <p>20% off on your next orders</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_01.svg?v=1721371642"
            alt=""
          />
          <p>Sneak peek into our new product launchesr</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_01.svg?v=1721371642"
            alt=""
          />
          <p>Free consultation with our nutrition expert</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_01.svg?v=1721371642"
            alt=""
          />
          <p>Unlock VIP benefits on 8th order</p>
        </div>
      </div>
    </div>
  );
};

export default Bonus;
