import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";

const HeaderCardButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.items.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''&& 'bump'}`;

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timeoutId = setTimeout(()=>{
      setBtnIsHighlighted(false);
    }, 300)
    return () => clearTimeout(timeoutId);
  }, [ctx.items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
