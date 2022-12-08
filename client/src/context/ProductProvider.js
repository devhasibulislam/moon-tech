import React, { createContext, useContext, useEffect, useReducer } from "react";
import actionTypes from "../state/productActionTypes";
import { initializer, reducer } from "../state/productReducer";

export const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initializer);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("https://moon-tech-ssr.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        if (data.status)
          dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data.data });
      })
      .catch(() => dispatch({ type: actionTypes.FETCHING_END }));
  }, []);

  const values = { state, dispatch };
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
