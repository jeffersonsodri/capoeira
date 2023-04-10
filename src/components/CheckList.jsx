import React, { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 18px;
  line-height: 1.5em;
  color: #666;
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
  color: ${({ isChecked }) => (isChecked ? "#999" : "#666")};
`;

export default function Checklist() {
  const [items, setItems] = useState([
    { id: 1, text: "Nome completo", isChecked: false },
    { id: 2, text: "E-mail", isChecked: false },
    { id: 3, text: "Telefone", isChecked: false },
    { id: 4, text: "Endereço", isChecked: false },
  ]);

  function toggleChecked(id) {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setItems(updatedItems);
  }

  return (
    <List>
      {items.map((item) => (
        <ListItem
          key={item.id}
          isChecked={item.isChecked}
          onClick={() => toggleChecked(item.id)}
        >
          {item.text}
        </ListItem>
      ))}
    </List>
  );
}
