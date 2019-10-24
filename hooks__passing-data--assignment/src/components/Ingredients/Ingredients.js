import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = ingredient => {
    setUserIngredients(prevIngredients => [
      ...prevIngredients,
      { id: Math.random().toString(), ...ingredient }
    ]);
  };

  const removeIngredientHandler = id => {
    // the id gets passed in the 'IngredientList' component
    // Here we make a new list by filtering the 'userIngredients' list/ array by the ID
    const newIngredientList = userIngredients.filter(ing => ing.id !== id);
    // ... and finally we use the spread operator to pass all of the new values to out
    // 'setUserIngredients' function so the final result would be anew list without the
    // element with the matching (clicked) ID
    setUserIngredients([...newIngredientList]);
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={userIngredients}
          // Let's replace the 'dummy' function with our newly created handler
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
