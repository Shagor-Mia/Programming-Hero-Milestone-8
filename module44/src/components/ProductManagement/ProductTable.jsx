import React from "react";

const ProductTable = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h1 className="text-3xl">Products:{products.length}</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.ProductName}</td>
              <td>{product.Price}</td>
              <td>{product.Quantity}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
