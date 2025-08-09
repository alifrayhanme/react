
import { useProductContext } from "../context/ProductContext";
import ProductCart from "./ProductCart";

const Home = () => {
  const { products } = useProductContext();


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products?.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
