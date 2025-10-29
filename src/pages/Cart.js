function Cart({ cart }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Your Cart 🛒</h1>
      {cart.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={styles.item}>
            <p>{item.name} - {item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  item: {
    backgroundColor: "#f9f9f9",
    margin: "10px auto",
    padding: "10px",
    borderRadius: "8px",
    width: "250px",
  },
};

export default Cart;
