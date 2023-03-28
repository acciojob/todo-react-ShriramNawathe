import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleNewItemChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleNewItemSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() !== "") {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  const handleItemRemove = (index) => {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };

  return (
    <div className="center">
      <div className="todo-list">
      <h1 className="title">To-Do List</h1>
      <br />
      <form onSubmit={handleNewItemSubmit}>
        <input
        className="b1"
          type="text"
          value={newItem}
          onChange={handleNewItemChange}
          placeholder="Add item"
        />
        <button className="b2" type="submit">Add Todo</button>
      </form>
      <br />
      <ul className="box">
        {items.map((item, index) => (
          <div className="flex" key={index}>
           <div className="right" >{item}</div> <div className="left"><button onClick={() => handleItemRemove(index)}>Delete</button>
          </div>
          </div>
        ))}
      </ul>
    </div>

    </div>
    
  );
};

export default App;
