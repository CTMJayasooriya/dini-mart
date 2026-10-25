import React, { useState } from "react";
import "./CartDrawer.css";

function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    notes: ""
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 5000 ? 0 : 350;
  const grandTotal = subtotal + (cartItems.length > 0 ? deliveryFee : 0);
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Generate WhatsApp order message for Dini Mart (077 136 7348)
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
    if (customerInfo.name) {
      message += `👤 *Customer:* ${customerInfo.name}\n📞 *Phone:* ${customerInfo.phone}\n📍 *Address:* ${customerInfo.address}\n`;
    }
    message += `Please confirm my order. Thank you!`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/94771367348?text=${encodedMsg}`;
    window.open(whatsappUrl, "_blank");
  };

  const handlePlaceOrderSubmit = (e) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert("Please fill in your Name, Phone Number, and Delivery Address.");
      return;
    }
    setOrderPlaced(true);
    setTimeout(() => {
      handleWhatsAppOrder();
      onClearCart();
      setShowCheckoutModal(false);
      setOrderPlaced(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div
        className="cart-drawer-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="cart-title-block">
            <h3>Shopping Cart</h3>
            <span className="cart-item-badge">{totalItemCount} items</span>
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close Cart">
            ✕
          </button>
        </div>

        {/* Drawer Content */}
        {cartItems.length === 0 ? (
          <div className="empty-cart-state">
            <div className="empty-cart-icon">🛒</div>
            <h4>Your Cart is Empty</h4>
            <p>Looks like you haven't added any baking tools or gifts yet.</p>
            <button className="start-shopping-btn" onClick={onClose}>
              Explore Categories & Shop
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-scroll">
              {cartItems.map((item) => (
                <div className="cart-item-card" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <div className="cart-item-details">
                    <h4 className="cart-item-title">{item.name}</h4>
                    <span className="cart-item-price">
                      Rs. {item.price.toLocaleString()}
                    </span>

                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <span className="cart-item-total">
                        Rs. {(item.price * item.quantity).toLocaleString()}
                      </span>

                      <button
                        className="remove-item-btn"
                        onClick={() => onRemoveItem(item.id)}
                        title="Remove item"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary & Footer */}
            <div className="cart-drawer-footer">
              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="cart-summary-row">
                <span>Island-wide Delivery</span>
                <span>
                  {deliveryFee === 0 ? (
                    <strong className="free-delivery">FREE</strong>
                  ) : (
                    `Rs. ${deliveryFee}`
                  )}
                </span>
              </div>
              {subtotal < 5000 && (
                <p className="free-shipping-hint">
                  💡 Add Rs. {(5000 - subtotal).toLocaleString()} more for <strong>FREE Delivery</strong>!
                </p>
              )}
              <div className="cart-summary-row grand-total">
                <span>Total Amount</span>
                <span>Rs. {grandTotal.toLocaleString()}</span>
              </div>

              <div className="cart-drawer-buttons">
                <button
                  className="whatsapp-order-btn"
                  onClick={handleWhatsAppOrder}
                >
                  💬 Order via WhatsApp (077 136 7348)
                </button>
                <button
                  className="direct-checkout-btn"
                  onClick={() => setShowCheckoutModal(true)}
                >
                  🛍️ Proceed to Quick Checkout
                </button>
                <button className="clear-cart-link" onClick={onClearCart}>
                  Clear Shopping Cart
                </button>
              </div>
            </div>
          </>
        )}

        {/* Checkout Modal Overlay */}
        {showCheckoutModal && (
          <div className="checkout-modal-overlay">
            <div className="checkout-modal">
              <button
                className="modal-close"
                onClick={() => setShowCheckoutModal(false)}
              >
                ✕
              </button>
              <h3>Delivery Details - Dini Mart</h3>
              <p className="modal-sub">
                Complete your details for Island-wide delivery. Order total:{" "}
                <strong>Rs. {grandTotal.toLocaleString()}</strong>
              </p>

              {orderPlaced ? (
                <div className="order-success-msg">
                  <span>✅</span>
                  <h4>Order Placed Successfully!</h4>
                  <p>Redirecting to WhatsApp to send order confirmation...</p>
                </div>
              ) : (
                <form onSubmit={handlePlaceOrderSubmit} className="checkout-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nimal Perera"
                      value={customerInfo.name}
                      onChange={(e) =>
                        setCustomerInfo({ ...customerInfo, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="077 XXXXXXX"
                      value={customerInfo.phone}
                      onChange={(e) =>
                        setCustomerInfo({ ...customerInfo, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Delivery Address *</label>
                    <textarea
                      required
                      rows="3"
                      placeholder="Street address, City, District"
                      value={customerInfo.address}
                      onChange={(e) =>
                        setCustomerInfo({ ...customerInfo, address: e.target.value })
                      }
                    ></textarea>
                  </div>

                  <button type="submit" className="confirm-order-btn">
                    Confirm & Send Order via WhatsApp 🚀
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;
