import React, { createContext, useContext, useEffect, useState } from "react";

export const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.error(err));
  }, []);

  const values = { data };
  return (
    <PRODUCT_CONTEXT.Provider value={values}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProductProvider;
