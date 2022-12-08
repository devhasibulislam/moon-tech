import React from "react";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
  const { data } = useProducts();
  console.log(data);

  return <section className="container mx-auto">This is Home route</section>;
};

export default Home;
