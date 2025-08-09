import React, { useEffect, useState } from "react";
import "../../src/ProductPage.css";
import { useNavigate } from "react-router";

export const Product = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const navigate = useNavigate();

  const fetchData = () => {
    setIsLoading(true);
    setIsError(null);
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("data chould not be fetch");
        }
        return res.json();
      })
      .then((data) => setProduct(data.products))
      .catch((error) => setIsError(error.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => fetchData(), []);

  return (
    <>
      <h1 className="product-page-title">Welcome to Product Page.</h1>
      {isLoading && <h3 style={{ textAlign: "center" }}>Product is Loading</h3>}
      {isError && <h3 style={{ color: "red" }}>{isError}</h3>}
      {!isLoading && !isError && (
        <div className="product-container">
          {product &&
            product.length > 0 &&
            product.map((item) => {
              return (
                <div className="product-card" key={item.id}>
                  <img
                    className="product-image"
                    src={item.images[0]}
                    alt="broken image"
                  />
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-price">${item.price}</p>
                  <p className="product-stock">In stock: {item.stock}</p>
                  <p className="product-category">{item.category}</p>
                  <p className="product-description">
                    {item.description.substring(0, 100)}...
                  </p>
                  <button
                    onClick={() =>
                      navigate(`/product/${item.id}`, { state: item })
                    }
                  >
                    Show Details
                  </button>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};
