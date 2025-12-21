import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">

        {/* Site logo / title */}
        <h1 className="logo">
          <Link to="/">RightMove Clone</Link>
        </h1>

        {/* Simple navigation */}
        <nav className="main-nav">
          <Link to="/">Search Properties</Link>
        </nav>

      </div>
    </header>
  );
}
