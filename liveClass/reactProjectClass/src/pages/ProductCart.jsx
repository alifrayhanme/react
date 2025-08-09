import { useProductContext } from "../context/ProductContext";

const ProductCart = ({ product }) => {
  const {addToCart} = useProductContext()

  const { image, title, description, price } = product;
  return (
    <div className="max-w-sm w-full rounded-2xl overflow-hidden shadow-lg p-4 bg-white hover:shadow-xl transition duration-300">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={image}
        alt={title}
      />
      <div className="py-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">${price}</span>
          <button onClick={()=>addToCart(product)} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
