import React from "react";
import Navbar from "../components/Navbar.jsx";
import egg from "../assets/egg.png";
import ProductCard from "../components/ProductCard.jsx";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Egg",
      price: 10,
      image: egg,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="flex p-10">
        {products.map((product) => {
        return(
        <ProductCard name={product.name } price={product.price} image={product.image} />
        );
      })}
      </div>
      
    </div>
  );
};

export default Home;
