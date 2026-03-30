import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartContext } from '../CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, setCart, clearCart, user } = useContext(CartContext);

  const removeItem = index => {
  setCart(prev => prev.filter((_, i) => i !== index));
};

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = () => {
    fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, items: cart })
    }).then(() => clearCart());
  };

  return (
    <div>
      <Header />
      <div className="cart-container">
        <h2>Your Cart 🛒</h2>
        {cart.length === 0 ? (
          <p>Cart is empty. Add some delicious items!</p>
        ) : (
          <div>
          
            {cart.map((item, index) => (
  <div key={index} className="cart-item">
    <span className="item-name">{item.name}</span>
    <span className="item-price">₹{item.price}</span>
    <button className="remove-btn" onClick={() => removeItem(index)}>Remove</button>
  </div>
))}
            <p className="total-price">Total: ₹{totalPrice}</p>

            <button className="place-order-btn" onClick={placeOrder}>Place Order</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
