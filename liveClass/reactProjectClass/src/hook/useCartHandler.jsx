import { useState } from "react";

const useCartHandler = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState("");


  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };


const handleQuantityChange = (id, value) => {
  if (value === "") {
    setWarning((prev) => ({
      ...prev,
      [id]: "Quantity cannot be blank!",
    }));
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: "" } : item
      )
    );
    return;
  }

  const newQuantity = parseInt(value);
  if (isNaN(newQuantity)) return;

  if (newQuantity < 1) {
    removeFromCart(id);
  } else {
    setWarning((prev) => ({
      ...prev,
      [id]: "",
    }));
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }
};




  const clearCart = () => setCart([]);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);


const handleBlur = (id, quantity) => {
  if (quantity === "") {
    setWarning((prev) => ({
      ...prev,
      [id]: "",
    }));
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: 1 } : item
      )
    );
  }
};



  return {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalAmount,
    totalQuantity,
    handleQuantityChange,
    warning,
    handleBlur,
  };
};

export default useCartHandler;
