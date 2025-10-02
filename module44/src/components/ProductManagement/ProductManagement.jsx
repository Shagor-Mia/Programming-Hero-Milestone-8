import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const handleProducts = (newProduct) => {
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  };

  return (
    <div>
      <ProductForm handleProducts={handleProducts} />
      <ProductTable products={products} />
    </div>
  );
};

export default ProductManagement;
