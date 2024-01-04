import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="container mt-5">
      <div className="App-content">
        <h1>Lista de Elementos</h1>
        <div className="input-group mb-3"> 
          <input type="text" className="form-control" value={inputValue} onChange={handleInputChange} />
          <button className="btn btn-primary" onClick={handleAddItem}>Añadir</button>
        </div>
        <ul className="list-group">
          {items.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {item}
              <button className="btn btn-danger" onClick={() => handleDeleteItem(index)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
