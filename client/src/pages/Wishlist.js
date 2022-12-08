import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Wishlist = () => {
  const {
    state: { wishlist, loading, error },
  } = useProducts();

  let content = null;
  if (loading) content = <p>Loading...</p>;
  if (error) content = <p>Something went wrong...</p>;
  if (!loading && !error && wishlist?.length === 0)
    content = <p>Nothing to show...</p>;
  if (!loading && !error && wishlist?.length)
    content = wishlist
      .map((list) => <ProductCard key={list._id} product={list} />)
      .reverse();

  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-8 my-10">
      {content}
    </section>
  );
};

export default Wishlist;
