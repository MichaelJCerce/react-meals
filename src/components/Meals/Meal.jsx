import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import MealForm from "./MealForm";
import classes from "./Meal.module.css";

const Meal = (props) => {
  const ctx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    ctx.addItem({...props, amount})
  }

  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div><MealForm id={props.id} onAddToCart={addToCartHandler}/></div>
    </li>
  );
};

export default Meal;
