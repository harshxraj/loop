import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoBagHandleOutline } from "react-icons/io5";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex items-center justify-between py-6 px-[120px] text-slate-600 h-[60px] bg-gray-200 fixed top-0 w-full">
      <div className="flex items-center gap-6">
        <img src="https://demo.loopwork.co/cdn/shop/files/Vector.png?v=1707344688&width=90" alt="" />
        <ul className="flex gap-5 tracking-tight">
          <li>Shop Subscription</li>
          <li>Bundles</li>
          <li>Manage Subscriptions</li>
          <li>Recharge Alternative</li>
        </ul>
      </div>
      <div className="flex gap-2">
        <IoIosSearch size={30} />
        <CgProfile size={25} />
        <IoBagHandleOutline size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
