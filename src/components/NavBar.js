import React from "react";

function NavBar({ showForm, setShowForm }) {
  return (
    <nav
      style={{
        backgroundColor: "#1a1a2e",
        padding: "16px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.8rem" }}>Toy Tales</h1>
      <button
        onClick={() => setShowForm((prev) => !prev)}
        style={{
          backgroundColor: "#e94560",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        {showForm ? "Hide Form" : "Add a Toy"}
      </button>
    </nav>
  );
}

export default NavBar;
