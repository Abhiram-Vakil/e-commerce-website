import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SellerForm from "../components/SellerForm";

import egg from "../assets/egg.png";
import SellerList from "../components/SellerList";

const Seller = () => {
  const [addProduct, setAddProduct] = useState(false);
  const [products, setProducts] = useState([]);
  console.log(products);

  const addHandler = () => {
    setAddProduct(true);
  };
  return (
    <div>
      <Navbar />
      <div className="p-10">
        <ul className="list bg-base-200 rounded-box shadow-md ">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            {products.length!==0?"your Products":"Add your first item"}
          </li>
          {products.map((product) => {
            return (
              <SellerList
                name={product.name}
                price={product.price}
                image={egg}
              />
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center p-10 gap-7">
        <button onClick={addHandler} className="btn btn-secondary">
          Add your product
        </button>
      </div>
      {addProduct && (
        <div className="fixed inset-0 backdrop-blur-sm z-40 flex justify-center items-center">
          <SellerForm products={setProducts} addProduct={setAddProduct} />
        </div>
      )}
    </div>
  );
};

export default Seller;
