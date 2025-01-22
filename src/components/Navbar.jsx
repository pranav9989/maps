import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <h1 style={styles.logoText}>VOYAGEHACK 2.0</h1>
      </div>
      <div style={styles.navLinks}>
        <a href="#explore" style={styles.navLink}>
          Explore
        </a>
        <a href="#map" style={styles.navLink}>
          Map
        </a>
        <a href="#360" style={styles.navLink}>
          360 Preview
        </a>
        <a href="#footer" style={styles.navLink}>
          Contact
        </a>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  logoText: {
    margin: 0,
  },
  navLinks: {
    display: "flex",
    gap: "15px",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  navLinkHover: {
    color: "#ffdd57",
  },
};

export default Navbar;
