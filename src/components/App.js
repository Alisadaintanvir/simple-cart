import { useState } from "react";
import "../styles/app.css";
import ProductList from "./ProductList";
import products from "../data";
import Cart from "./Cart";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(item) {
    setCartItems((prevItem) => [...prevItem, item]);
  }

  return (
    <div className="app">
      <div className="product-list">
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </div>

      <Cart cartItems={cartItems} />
    </div>
  );
}
