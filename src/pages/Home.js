import React from "react";
import Product from "../components/Product";
const Home = () => {
  return (
    <div>
      <h2 className="heading">Welocome to the Redux toolkit Store </h2>
      <section>
        <h3>Products</h3>
        <Product />
      </section>
    </div>
  );
};

export default Home;
