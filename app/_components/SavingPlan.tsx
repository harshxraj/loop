import React from "react";

type Props = {};

const Savingplan = (props: Props) => {
  return (
    <div className="py-8">
      <div className="flex justify-between  items-center my-5">
        <p className="text-2xl mt-2">Saving plan details</p>
        <div className="flex gap-6">
          <button className="border border-green-700 py-2 px-5 rounded-xl">Upcoming Orders</button>
          <button className="border border-green-700 py-2 px-5 rounded-xl">Orders history</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="flex border gap-6 justify-betwee p-5 bg-[#f5f6b4] rounded-2xl border-black/20">
          <div className="">
            <img
              className="w-[130px] rounded-md"
              src="https://cdn.shopify.com/s/files/1/0654/7079/1899/products/Strawberry_BananaandEggs.jpg?v=1660731111"
              alt=""
            />
          </div>
          <div className="text-green-700 flex flex-col tracking-tighter">
            <p>Banana & Eggs</p>
            <p className="text-sm">Subscription discount (25%)</p>
            <p className="text-sm">VIP Discount</p>
            <div className="flex items-center justify-between mt-5">
              <p>$13.00</p>
              <button className="bg-green-700 text-yellow-200 text-sm px-2 rounded-md">edit</button>
            </div>
          </div>
        </div>
        <div className="flex border gap-6 justify-betwee p-5 bg-[#f5f6b4] rounded-2xl border-black/20">
          <div className="">
            <img
              className="w-[130px] rounded-md"
              src="https://cdn.shopify.com/s/files/1/0654/7079/1899/products/Strawberry_BananaandEggs.jpg?v=1660731111"
              alt=""
            />
          </div>
          <div className="text-green-700 flex flex-col tracking-tighter">
            <p>Banana & Eggs</p>
            <p className="text-sm">Subscription discount (25%)</p>
            <p className="text-sm">VIP Discount</p>
            <div className="flex items-center justify-between mt-5">
              <p>$13.00</p>
              <button className="bg-green-700 text-yellow-200 text-sm px-2 rounded-md">edit</button>
            </div>
          </div>
        </div>

        <div className="border border-black/40 p-6 rounded-2xl text-green-700">
          <p className="font-bold mb-2">Subscription plan</p>
          <p>Deliver every 1 week</p>
        </div>

        <div className=" border border-black/40 p-6 rounded-2xl text-green-700">
          <p className="mb-4 font-bold">Discount code</p>
          <div>
            <span className="bg-gray-300 px-3 rounded-lg py-1 text-black">LPBNDLko92f</span>
          </div>
          <div className="flex items-center mt-3">
            <input type="text" placeholder="Discount code" className="w-full p-1 rounded-lg" />
            <button className="bg-green-700 text-yellow-200 text-sm px-1 rounded-md">Apply</button>
          </div>
        </div>

        <div className=" border border-black/40 p-6 rounded-2xl text-green-700">
          <p className="mb-4 font-bold">Payment details</p>
          <p>Visa ending in 4242</p>
          <p>Expires 1/25</p>
          <div className="flex items-center mt-3 gap-2">
            <button className="bg-green-700 text-yellow-200 text-sm px-1 rounded-md">Update</button>
            <button className="border-2 border:bg-green-800 text-green-700 text-sm px-1 rounded-md">
              Change
            </button>
          </div>
        </div>

        <div className=" border border-black/40 p-6 rounded-2xl text-green-700">
          <p className="mb-4 font-bold">Shipping addresss</p>
          <p>Les 1100 Van Ness Avenue</p>
          <p>San Francisco, California, 94109</p>
          <p>United States</p>
          <div className="flex items-center mt-3 gap-2">
            <button className="bg-green-700 text-yellow-200 text-sm px-1 rounded-md">Edit</button>
            <button className="border-2 border:bg-green-800 text-green-700 text-sm px-1 rounded-md">
              Change delivery method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savingplan;
