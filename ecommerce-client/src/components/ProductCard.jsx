import React from "react";
import { Link } from "react-router";
import { HiShoppingCart } from "react-icons/hi"

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{price} Rs</p>
    <div className="card-actions">
      <Link to="/product" className="btn btn-primary">Buy Now</Link>
      <button className="btn btn-secondary"><HiShoppingCart/></button>
    </div>
  </div>
</div>
  );
};

export default ProductCard;
