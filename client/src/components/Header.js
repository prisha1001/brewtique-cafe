import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
 
const Header = () => (
  <header className="header">
    <div className="logo-container">
      
      <a href="/" className="logo-link">
        <img src="https://cdn-icons-png.flaticon.com/512/924/924514.png" alt="Brewtique Logo" className="logo-img" />
        <span className="logo-text">Brewtique</span>
      </a>
    </div>
    <nav>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/menu" style={styles.link}>Menu</Link>
      <Link to="/cart" style={styles.link}>Cart</Link>
      <Link to="/orders" style={styles.link}>Orders</Link>
    </nav>
  </header>
);

const styles = {
  header: {
    backgroundColor: '#ffa34dff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  title: {
    margin: 0,
    fontSize: '24px',
  },
  link: {
    marginLeft: '15px',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};


export default Header;
