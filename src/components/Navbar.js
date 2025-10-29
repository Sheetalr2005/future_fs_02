import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Future Store 🛒</h2>
      <ul style={styles.menu}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/products" style={styles.link}>Products</Link></li>
        <li><Link to="/cart" style={styles.link}>Cart</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#1e1e1e",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Navbar;
