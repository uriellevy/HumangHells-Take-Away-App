import React, { useContext } from "react";
import Header from "../Header";
import Modal from "../Modal";
import MealsSummary from "./MealsSummary";
import { MealsContext } from "../store/MealsContext";
import { availableMeals } from "../../mock-meals";
import "./MealsPage.scss";
import MealItem from "./MealItem";

const MealsPage = () => {
  const [cartItems, setCartItems, cartIsShown, setCartIsShown] =
    useContext(MealsContext);
  // console.log(cartIsShown);
  return (
    <div>
      {cartIsShown && <Modal setCartIsShown={setCartIsShown} />}
      <Header setCartIsShown={setCartIsShown} />
      <main>
        <MealsSummary />
        <section className="meals">
          {availableMeals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              price={meal.price}
              description={meal.description}
              name={meal.name}
              meal={meal}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default MealsPage;
