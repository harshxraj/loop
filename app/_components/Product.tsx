import React from "react";
import { FaPlusCircle } from "react-icons/fa";

type Props = {};
const products = [
  {
    name: "Coconut electrolyte",
    d_price: 8.5,
    price: 10.0,
    image: "https://cdn.shopify.com/s/files/1/0654/7079/1899/files/6.jpg?v=1721999553",
  },
  {
    name: "Curacao electrolyte",
    d_price: 9.0,
    price: 11.5,
    image: "https://cdn.shopify.com/s/files/1/0654/7079/1899/files/8.jpg?v=1721999780",
  },
  {
    name: "Guava electrolyte",
    d_price: 7.8,
    price: 9.5,
    image: "https://cdn.shopify.com/s/files/1/0654/7079/1899/files/2.jpg?v=1721999630",
  },
  {
    name: "Lime electrolyte",
    d_price: 9.2,
    price: 12.0,
    image: "https://cdn.shopify.com/s/files/1/0654/7079/1899/files/7.jpg?v=1721999744",
  },
  {
    name: "Mango electrolyte",
    d_price: 8.9,
    price: 10.5,
    image: "https://cdn.shopify.com/s/files/1/0654/7079/1899/files/4.jpg?v=1721999692",
  },
];

const Product = (props: Props) => {
  return (
    <div className="grid grid-cols-5 gap-10">
      {products.map((product) => (
        <div key={product.name} className="text-green-800">
          <img src={product.image} alt="" className="border border-black/40 rounded-lg" />
          <p className="mt-3 mb-2">{product.name}</p>
          <div className="flex items-center justify-between">
            <p className="flex gap-3">
              ${product.d_price} <span className="line-through">${product.price}</span>
            </p>

            <FaPlusCircle size={20} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
