import React, {useState} from 'react';
import './App.css';

function App() {

  // State hook - 'useState'
  const [newItem, setNewItem] = useState("fff");
  const [items, setItems] = useState([])

  // Helper Functions
  function addItem() {
    console.log(newItem);

    if (!newItem) {
      alert("Enter an item")
      return
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    setItems(oldList => [...oldList, item])
    setNewItem("")

    console.log(items);
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray)
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>X</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
