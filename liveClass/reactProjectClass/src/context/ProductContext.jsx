import React, { createContext, useContext } from "react";
import useProductData from "../hook/useProductData";
import useCartHandelar from "../hook/useCartHandler";
import useSignUp from "../hook/useSignUp";

const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const ProductData = useProductData();
  const cartData = useCartHandelar()
  const formData = useSignUp()

  const contextValue = {
    ...ProductData,
    ...cartData,
    ...formData,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useBookContext must be used within a BooksContextProvider"
    );
  }
  return context;
};
