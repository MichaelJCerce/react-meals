import classes from "./Checkout.module.css";
const Checkout = (props) => {
    const confirmHandler = (e) => {
        e.preventDefault();
    }
  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" name="street" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal</label>
        <input type="text" name="postal" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" />
      </div>
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
