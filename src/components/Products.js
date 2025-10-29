import React from "react";

function Products({ addToCart }) {
  const items = [
    { id: 1, name: "Wireless Headphones", price: "₹2,499", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Smart Watch", price: "₹1,999", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Bluetooth Speaker", price: "₹1,299", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div style={styles.container}>
      {items.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button style={styles.button} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "40px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "200px",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#1e1e1e",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Products;
