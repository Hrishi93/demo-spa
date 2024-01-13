// src/components/Header.js

import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">
        <span>AnayaMart</span>
      </div>
      <div className="auth-buttons">
        <button className="login-button">Login</button>
        <button className="register-button">Register</button>
      </div>
    </header>
  );
}

export default Header;
