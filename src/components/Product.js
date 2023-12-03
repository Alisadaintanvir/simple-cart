import Button from "./Button";

export default function Product({ product, onAddToCart }) {
  return (
    <li className="product-cart">
      <img className="product-img" src={product.image} alt="product_image" />
      <h2>{product.name}</h2>
      <h6>${product.price}</h6>
      <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
    </li>
  );
}
