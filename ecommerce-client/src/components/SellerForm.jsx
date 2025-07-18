import React, { useState } from "react";

const SellerForm = ({ addProduct, products }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [description,setDescription]=useState("")
  const [countInStock,setCountInStock]=useState(1)

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    const productDetail = {
      id:  Date.now(),
      name,
      description,
      price: parseFloat(price),
      image,
      countInStock
    };
    products((prev) => [...prev, productDetail]);
    addProduct(false);
  };
  const handleCancel = () => {
    addProduct(false);
  };

  return (
    <div className="card bg-base-100 p-5 self-center justify-self-center absolute w-11/12 xl:w-6/12">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 items-center justify-center"
      >
        <h1>Product Details</h1>
        <div className="flex flex-col gap-4 p-5">
          <div className="grid grid-cols-2 ">
            <label className="label">Name </label>
            <input
              type="text"
              required
              className="input"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 ">
            <label className="label">description</label>
            <input
              type="text"
              required
              className="input"
              placeholder="Add description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2">
            <label className="label">Price</label>
            <input
              type="text"
              required
              className="input"
              placeholder="Product Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
          <div className="grid grid-cols-2">
            <label className="label">Count</label>
            <input
              type="text"
              required
              className="input"
              placeholder="Quantity"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            ></input>
          </div>
          <div className="grid grid-cols-2">
            <label className="label">Image </label>
            <input
              type="text"
              className="input"
              value={image}
              placeholder="Image Link"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <button className="btn btn-primary" type="submit">
            Add
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SellerForm;
