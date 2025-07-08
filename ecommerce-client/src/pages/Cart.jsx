import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CartList from "../components/CartList";
import egg from "../assets/egg.png";

const Cart = () => {
  const cartProducts = [
    {
      id: 1,
      name: "Egg",
      price: 10,
      image: egg,
      checked:true,

    },
    {
      id: 1,
      name: "Egg",
      price: 10,
      image: egg,
      checked:true,

    },
    {
      id: 1,
      name: "Egg",
      price: 10,
      image: egg,
      checked:true,

    },
    {
      id: 1,
      name: "Egg",
      price: 10,
      image: egg,
      checked:true,

    },
  ];
  return (
    <div>
      <Navbar />
      <div className="p-10">
        <ul className="list bg-base-200 rounded-box shadow-md ">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Your Cart Items
          </li>
          {cartProducts.map((product) => {
            return (
              <CartList
                name={product.name}
                price={product.price}
                image={product.image}
                checked={product.checked}
              />
            );
          })}
        </ul>
      </div>
      <h1 className="text-primary">Total Price : </h1>
    </div>
  );
};

export default Cart;
