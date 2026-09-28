import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <aside className="cart">
      <div className="cart-header">
        <h2>Shopping Cart</h2>

        <span className="cart-count">{totalItems}</span>
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h4>{item.name}</h4>

                  <p>${item.price.toFixed(2)}</p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>−</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <div>
              <span>Total</span>

              <strong>${totalPrice.toFixed(2)}</strong>
            </div>

            <button className="checkout-button">Checkout</button>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;
