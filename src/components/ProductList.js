import Product from "./Product";

export default function ProductList({ products, onAddToCart }) {
  return (
    <ul>
      {products.map((product) => (
        <Product product={product} key={product.id} onAddToCart={onAddToCart} />
      ))}
    </ul>
  );
}
