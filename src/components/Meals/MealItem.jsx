import React, { useContext } from "react";
import "./MealItem.scss";
import { MealsContext } from "../store/MealsContext";

const MealItem = (props) => {
  const [cartItems, setCartItems] = useContext(MealsContext);
  // console.log(cartItems);
  // console.log(props.id);
  // console.log(props.meal);

  const onAdd = (meal) => {
    const exist = cartItems.find((x) => x.id === meal.id);
    // console.log(exist);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === meal.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...meal, qty: 1 }]);
    }

    console.log(cartItems);
  };

  return (
    <li className="meal">
      <div className="meal-left">
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">${props.price.toFixed(2)}</div>
      </div>
      <div className="meal-right">
        <button onClick={() => onAdd(props.meal)}>+Add</button>
      </div>
    </li>
  );
};

export default MealItem;
