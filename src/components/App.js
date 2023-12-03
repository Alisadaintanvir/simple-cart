import { useState } from "react";
import "../styles/app.css";
import ProductList from "./ProductList";
import products from "../data";
import Cart from "./Cart";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleAddToCart(item) {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }

    setTotalPrice((cur) => cur + Number(item.price));
  }

  return (
    <div className="app">
      <div className="product-list">
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </div>

      <Cart cartItems={cartItems} totalPrice={totalPrice} />
    </div>
  );
}

//Todo 1: Add input option in the cart quantity
//Todo 2: prevent addng duplicate item adding in the cart
//Todo 3: implement delete item from the cart
