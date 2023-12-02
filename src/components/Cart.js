import Button from "./Button";

export default function Cart({ cartItems }) {
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
                <tr>
                  <td>{item.name}</td>
                  <td>1</td>
                  <td>${item.price}</td>
                  <td>
                    <Button>X</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div class="total">Total: $40.00</div>
        </>
      )}
    </div>
  );
}
