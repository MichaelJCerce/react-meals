import classes from "./MealForm.module.css";

const MealForm = () => {
  return (
    <form className={classes.form}>
      <input type="text" />
      <button>+Add</button>
    </form>
  );
};

export default MealForm;
