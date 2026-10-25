import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Cart.css";

function Cart({ cartItems = [], onUpdateQuantity, onRemoveItem, onClearCart }) {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 5000 ? 0 : 350;
  const grandTotal = subtotal + (cartItems.length > 0 ? deliveryFee : 0);

  const handleWhatsAppOrder = () => {
    let message = `🛒 *NEW ORDER FROM DINI MART WEBSITE*\n\n`;
    cartItems.forEach((item, idx) => {
      message += `${idx + 1}. *${item.name}* x ${item.quantity} = Rs. ${(
        item.price * item.quantity
      ).toLocaleString()}\n`;
    });
    message += `\n💵 *Subtotal:* Rs. ${subtotal.toLocaleString()}`;
    message += `\n🚚 *Delivery:* ${deliveryFee === 0 ? "FREE" : "Rs. " + deliveryFee}`;
    message += `\n💰 *Grand Total:* Rs. ${grandTotal.toLocaleString()}\n\n`;
    message += `Please confirm my order. Thank you!`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/94771367348?text=${encodedMsg}`, "_blank");
  };

  return (
    <div className="app-container">
      <Navbar cartCount={cartItems.reduce((a, b) => a + b.quantity, 0)} />

      <main className="cart-page-container">
        <h1 className="cart-page-title">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="cart-empty-page">
            <span className="empty-icon">🛒</span>
            <h2>Your Cart is Currently Empty</h2>
            <p>Explore our wide range of cake tools, baking accessories & gifts.</p>
            <a href="/" className="back-to-shop-btn">Continue Shopping</a>
          </div>
        ) : (
          <div className="cart-grid-layout">
            <div className="cart-items-column">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-page-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="unit-price">Rs. {item.price.toLocaleString()} each</p>
                  </div>
                  <div className="item-qty-block">
                    <button onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <div className="item-subtotal">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </div>
                  <button 
                    className="item-delete-btn"
                    onClick={() => onRemoveItem && onRemoveItem(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary-column">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee</span>
                <span>{deliveryFee === 0 ? "FREE" : `Rs. ${deliveryFee}`}</span>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>Rs. {grandTotal.toLocaleString()}</span>
              </div>

              <button className="whatsapp-checkout-btn" onClick={handleWhatsAppOrder}>
                💬 Order via WhatsApp (077 136 7348)
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Cart;
