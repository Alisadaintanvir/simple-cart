import Button from "./Button";

export default function Cart({ cartItems, totalPrice }) {
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="product-cell">
                    <img
                      className="cart-product-image"
                      src={item.image}
                      alt="produc_image"
                    />
                    <p className="product-title">{item.name}</p>
                  </td>
                  <td>
                    <Button>-</Button>
                    <input
                      type="number"
                      className="quantity-input"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => (item.quantity = Number(e.target.value))}
                    />
                    <Button>+</Button>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <Button>X</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="total">Total: ${totalPrice.toFixed(2)} </div>
        </>
      )}
    </div>
  );
}
