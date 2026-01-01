import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">

        {/* Site logo / title */}
        <div className="brand">
          <h1 className="logo">
            <Link to="/">TrustHome</Link>
          </h1>
          <h3 className="sub-topic">
            A trusted roof makes a peaceful life.
          </h3>
        </div>

        {/* Simple navigation */}
        <nav className="main-nav">
          <Link to="/">Search Properties</Link>
        </nav>

      </div>
    </header>
  );
}
