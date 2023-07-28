import { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealForm.module.css";

const MealForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;

    if (enteredAmount.trim() === 0 || enteredAmount < 1 || enteredAmount > 5) {
      setIsValid(false);
      return;
    }
    
    props.onAddToCart(+enteredAmount);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealForm;
