import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CartList from "../components/CartList";
import egg from "../assets/egg.png";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const {productCount,setProductCount} =useCart()

 

  const [cartProducts, setCartProducts] = useState([
    {
      id: 1,
      name: "Egg",
      price: 10,
      image: egg,
    },
    {
      id: 2,
      name: "Egg",
      price: 10,
      image: egg,
    },
    {
      id: 3,
      name: "Egg",
      price: 10,
      image: egg,
    },

  ]);
 useEffect(()=>{
    setProductCount(cartProducts.length)
  },[cartProducts])
  const totalCost = cartProducts.reduce((sum, item) => sum + item.price, 0);
  const handleDelete = (id) => {
    setCartProducts((products) =>
      products.filter((product) => product.id !== id)
    );
  };

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
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                onDelete={handleDelete}
              />
            );
          })}
        </ul>
      </div>
      <div className="flex flex-row gap-5 items-center justify-center">
        <h1 className="text-secondary">
          Total Price : <span className="text-base-content">{totalCost}</span>{" "}
          Rs
        </h1>
        <button className="btn btn-primary"> Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;
