import React from "react";

const ProductForm = ({ handleProducts }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const ProductName = e.target.name.value;
    const Price = e.target.price.value;
    const Quantity = e.target.quantity.value;

    const newProduct = {
      ProductName,
      Price,
      Quantity,
    };
    handleProducts(newProduct);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="enter product name" />
        <br />
        <input type="text" name="price" placeholder="enter product price" />
        <br />
        <input
          type="number"
          name="quantity"
          placeholder="enter product quantity"
        />
        <br />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default ProductForm;
