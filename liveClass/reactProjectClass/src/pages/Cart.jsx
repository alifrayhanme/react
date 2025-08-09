import React from "react";
import { useProductContext } from "../context/ProductContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalAmount,
    totalQuantity,
    handleQuantityChange,
    handleBlur,
    warning,
  } = useProductContext();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cart?.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-1">
                  {warning[item.id] && (
                    <p className="text-[11px] text-red-500 italic">
                      {warning[item.id]}
                    </p>
                  )}

                  <div className="flex items-center gap-2 px-2 py-1 rounded-md">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 text-lg font-semibold bg-gray-200 hover:bg-gray-300 rounded transition"
                    >
                      −
                    </button>

                    <input
                      type="number"
                      min={1}
                      value={item.quantity === "" ? "" : item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      onBlur={() => handleBlur(item.id, item.quantity)}
                      className="w-14 text-center text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-8 h-8 text-lg font-semibold bg-gray-200 hover:bg-gray-300 rounded transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <p className="font-bold text-indigo-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-6">
            <div className="text-lg">
              <p>
                Total Quantity: <strong>{totalQuantity}</strong>
              </p>
              <p>
                Total Amount: <strong>${totalAmount.toFixed(2)}</strong>
              </p>
            </div>

            <button
              onClick={clearCart}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
