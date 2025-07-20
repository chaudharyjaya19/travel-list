import React, { useState } from "react";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";
import "./App.css";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 12, packed: false },
// ];

export default function App(){
  const [items, setItems] = useState([]);
  
  function handleAddItems(item){
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id){
    setItems((items) => items.filter(item => item.id !== id));
  }
  function handleToggleItem(id){
    setItems(item => 
      items.map((item) =>
        item.id === id ? {...item, packed: !item.packed} : item
      )
    );
  }function handleClearList(){
    const confirmClear = window.confirm("Are you sure you want to clear the list?");
    if(!confirmClear) return;
    setItems([]);
  }
return <div className="app">
  <Logo />
  <Form onAddItems={handleAddItems} />
  <PackingList items={items} onClearList={handleClearList} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
  <Stats items={items}/>
</div>
}
