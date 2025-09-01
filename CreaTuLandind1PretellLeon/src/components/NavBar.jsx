import React from 'react';
import CartWidget from './CartWidget';
import bicilogo from '../assets/bicilogo.png';

const NavBar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#991010ff'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <img src={bicilogo} alt="logo" style={{ height: '200px' }} />
        <h1>Bici Oso Shop</h1>
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#">Home</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
