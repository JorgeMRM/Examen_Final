import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DrinkDetailModal = ({ drinkId, onClose }) => {
  const [drinkDetails, setDrinkDetails] = useState(null);

  useEffect(() => {
    if (drinkId) {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
        .then(response => {
          setDrinkDetails(response.data.drinks[0]);
        })
        .catch(error => {
          console.error("Error al obtener los detalles del cóctel:", error);
        });
    }
  }, [drinkId]);

  if (!drinkDetails) return null;

  return (
    <div className="modal">
      <button onClick={onClose}>Cerrar</button>
      <h2>{drinkDetails.strDrink}</h2>
      <img src={drinkDetails.strDrinkThumb} alt={drinkDetails.strDrink} />
      <p><strong>Categoría:</strong> {drinkDetails.strCategory}</p>
      <p><strong>Tipo de Vaso:</strong> {drinkDetails.strGlass}</p>
      <p><strong>Instrucciones:</strong> {drinkDetails.strInstructions}</p>
    </div>
  );
};

export default DrinkDetailModal;
