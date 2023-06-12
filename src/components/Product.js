import React, { useState, useEffect } from "react";

const Product = () => {
  // eslint-disable-next-line
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");

      // eslint-disable-next-line
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="productsWrapper">
      {" "}
      {products.map((product) => (
        <div className="card" key={product.id}>
          {product.name}
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h4>{product.price}</h4>
          <button className="btn">Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
