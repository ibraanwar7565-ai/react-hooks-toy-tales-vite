import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddToy({ name, image, likes: 0 });
    setName("");
    setImage("");
  }

  return (
    <div
      style={{
        backgroundColor: "#16213e",
        padding: "24px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Enter a toy's name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px 14px",
            borderRadius: "6px",
            border: "none",
            fontSize: "1rem",
            width: "220px",
          }}
        />
        <input
          type="text"
          placeholder="Enter a URL for the toy's image..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={{
            padding: "10px 14px",
            borderRadius: "6px",
            border: "none",
            fontSize: "1rem",
            width: "320px",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#e94560",
            color: "white",
            border: "none",
            padding: "10px 24px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Add Toy
        </button>
      </form>
    </div>
  );
}

export default ToyForm;
