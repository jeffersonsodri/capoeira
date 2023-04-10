import { useState } from "react";
import AnimatedList from "../components/AnimatedList";

export default function Home() {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ]);

  function addItem() {
    const newItem = { id: Date.now(), text: `Item ${items.length + 1}` };
    setItems([...items, newItem]);
  }

  return (
    <div>
      <h1>Lista Animada</h1>
      <button onClick={addItem}>Adicionar item</button>
      <AnimatedList items={items} />
    </div>
  );
}
