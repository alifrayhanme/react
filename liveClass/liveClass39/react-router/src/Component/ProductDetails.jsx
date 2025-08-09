import React, { useCallback, useEffect, useState } from "react";
import "../../src/ProductPage.css";
import { useNavigate, useParams } from "react-router";

export const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchData = useCallback(() => {
    setIsLoading(true);
    setIsError(null);

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Data could not be fetched");
        }
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => setIsError(error.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {isLoading && <h3 style={{ textAlign: "center" }}>Product is Loading...</h3>}
      {isError && <h3 style={{ color: "red", textAlign: "center" }}>{isError}</h3>}

      {!isLoading && !isError && product?.id ? (
        <div className="product-details">
          <div className="product-image">
            <img src={product.images?.[0]} alt={product.title} />
          </div>
          <div className="product-info">
            <h2>{product.title}</h2>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
          </div>
        </div>
      ) : null}

      {!isLoading && !isError && !product?.id && (
        <p style={{ textAlign: "center" }}>Product details not found</p>
      )}

      <div className="button-container">
        <button className="back-product-page-button" onClick={() => navigate("/product")}>
          Back
        </button>
      </div>
    </>
  );
};