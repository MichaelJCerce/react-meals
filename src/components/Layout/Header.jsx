import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.onClick}/>
      </header>
      <div className={classes.image}>
        <img src={mealsImage} alt="" />
      </div>
    </>
  );
};

export default Header;
