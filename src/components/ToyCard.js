import React from "react";

function ToyCard({ toy, onLike, onDelete }) {
  const { id, name, image, likes } = toy;

  return (
    <div
      className="card"
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        width: "220px",
        textAlign: "center",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "1.1rem", color: "#1a1a2e" }}>
        {name}
      </h2>
      <img
        src={image}
        alt={name}
        style={{ width: "150px", height: "150px", objectFit: "contain" }}
      />
      <p style={{ margin: 0, color: "#555" }}>Likes: {likes}</p>
      <button
        onClick={() => onLike(id, likes)}
        style={{
          backgroundColor: "#0f3460",
          color: "white",
          border: "none",
          padding: "8px 20px",
          borderRadius: "6px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Like {"<3"}
      </button>
      <button
        onClick={() => onDelete(id)}
        style={{
          backgroundColor: "#e94560",
          color: "white",
          border: "none",
          padding: "8px 20px",
          borderRadius: "6px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Donate to Goodwill
      </button>
    </div>
  );
}

export default ToyCard;
