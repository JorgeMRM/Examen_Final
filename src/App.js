import React, { useState } from 'react';
import './App.css';
import DrinkDetailModal from './components/DrinkDetailModal';
import HomePage from './components/HomePage';

function App() {
  const [selectedDrinkId, setSelectedDrinkId] = useState(null);

  const handleDrinkClick = (id) => {
    setSelectedDrinkId(id); // Guarda el ID del cóctel seleccionado
  };

  const handleCloseModal = () => {
    setSelectedDrinkId(null); // Cierra el modal
  };

  return (
    <div className="App">
      <HomePage onDrinkClick={handleDrinkClick} />
      {selectedDrinkId && (
        <DrinkDetailModal drinkId={selectedDrinkId} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;

