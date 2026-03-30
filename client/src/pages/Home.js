import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CCarousel from '../components/CCarousel';
import { useNavigate } from 'react-router-dom';

import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  

  return (
    <>
      <Header />
      <div className="home-hero">
        <div className="carousel-bg">
          <CCarousel />
        </div>
        <div className="hero-overlay">
          <h1>Brewtique</h1>
          <h3>Your cozy corner for comfort and caffeine</h3>
          <p>
            Order your favorite coffee, take a seat, and let the aroma do the magic.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/orders')}>
              Place Your Order
            </button>
            <button className="btn-secondary" onClick={() => navigate('/menu')}>
              View Menu
            </button>
          </div>
          <div className="hero-features">
            <div>14+ Coffee Blends</div>
            <div>10+ Fresh Bakes Daily</div>
            <div>Calm, Cozy Vibes</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default Home;
