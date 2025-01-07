import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">The New Black is Black</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#shoppy">Shop</a></li>
        {/* <li><a href="/cart">Cart</a></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
