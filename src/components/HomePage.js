import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DrinkCard from './DrinkCard';

const HomePage = ({ onDrinkClick }) => {
  const [drinks, setDrinks] = useState([]); // Estado para almacenar la lista de cócteles

  useEffect(() => {
    // Llamada a la API para obtener la lista de cócteles
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
      .then(response => {
        setDrinks(response.data.drinks); // Almacena la lista de cócteles en el estado
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <div className="homepage">
      <h1>Ordinary Drinks</h1>
      <div className="drink-list">
        {drinks.slice(0, 15).map(drink => (
          <DrinkCard key={drink.idDrink} drink={drink} onClick={onDrinkClick} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
