import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartContext } from '../CartContext';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(CartContext);

  useEffect(() => {
    fetch(`http://localhost:5000/api/orders/${user}`)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [user]);

  return (
    <>
      <Header />
      <div className="orders-container">
        <h2>Your Orders 📦</h2>
        {orders.length === 0 ? (
          <p>No orders yet. Your cart is waiting!</p>
        ) : (
          orders.map((order, i) => {
            const total = order.items.reduce((sum, item) => sum + item.price, 0);
            return (
              <div key={i} className="order-card">
                <h4>Order #{i + 1}</h4>
                <ul>
                  {order.items.map((item, j) => (
                    <li key={j}>
                      <span>{item.name}</span>
                      <span>₹{item.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="order-summary">
                  <strong>Total:</strong> ₹{total}
                  <span className="status">Status: {order.status}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </>
  );
};

export default Orders;
