import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./components/ToyContainer";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  function handleAddToy(newToy) {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((toy) => setToys((prev) => [...prev, toy]));
  }

  function handleLike(id, currentLikes) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: currentLikes + 1 }),
    })
      .then((res) => res.json())
      .then((updated) =>
        setToys((prev) => prev.map((toy) => (toy.id === id ? updated : toy)))
      );
  }

  function handleDelete(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    }).then(() => setToys((prev) => prev.filter((toy) => toy.id !== id)));
  }

  return (
    <div className="App">
      <NavBar showForm={showForm} setShowForm={setShowForm} />
      {showForm && <ToyForm onAddToy={handleAddToy} />}
      <ToyContainer
        toys={toys}
        onLike={handleLike}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
