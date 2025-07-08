import React from "react";
import Navbar from "../components/Navbar.jsx";
import egg from "../assets/egg.png";
import ProductCard from "../components/ProductCard.jsx";
import Footer from "../components/footer.jsx";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Egg",
      price: 10,
      image: egg,
    },
    {
      id: 1,
      name: "Egg",
      price: 10,
      image: egg,
    },
    {
      id: 1,
      name: "Egg",
      price: 10,
      image: egg,
    },
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
      <div className="p-10 gap-y-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center">
        {products.map((product) => {
        return(
        <ProductCard name={product.name } price={product.price} image={product.image} />
        );
      })}
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
