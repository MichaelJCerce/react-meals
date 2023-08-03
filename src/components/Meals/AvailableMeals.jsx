import Card from "../UI/Card";
import Meal from "./Meal";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-3eaf7-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      setHttpError(false);
      const data = await response.json();
      // console.log(
      //   "entries",
      //   Object.entries(data).reduce(
      //     (meals, [id, meal]) => [...meals, { id, ...meal }],
      //     []
      //   )
      // );
      const loadedMeals = [];
      for (let key in data) {
        loadedMeals.push({ id: key, ...data[key] });
      }
      setIsLoading(false);
      setMeals(loadedMeals);
    };
    fetchMeals().catch((error) => {
      setHttpError(error.message);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading... </p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p className={classes.MealsError}>{httpError}</p>
      </section>
    );
  }

  return (
    <Card className={classes.meals}>
      <ul>
        {meals.map((meal) => (
          <Meal key={meal.id} {...meal} />
        ))}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
