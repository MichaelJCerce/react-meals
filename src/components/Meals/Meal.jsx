import MealForm from "./MealForm";
import classes from "./Meal.module.css";

const Meal = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div><MealForm /></div>
    </li>
  );
};

export default Meal;
