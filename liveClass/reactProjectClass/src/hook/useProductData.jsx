import { collection, getDocs } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { db } from "../firebase";

const useProductData = () => {
  const [products, setProducts] = useState([]);
  const productCollectionRef = useMemo(() => collection(db, "product"), []);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollectionRef);
      const filterData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(filterData);
    };
    getProducts();
  }, [productCollectionRef]);

  return {products: products};
};

export default useProductData;
