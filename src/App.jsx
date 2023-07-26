import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  const cartClickHandler = () => {
    setShowCart((prevState) => !prevState);
  }
  return (
    <>
      {showCart && <Cart onClick={cartClickHandler}></Cart>}
      <Header onClick={cartClickHandler}></Header>
      <main style={{ clear: "both" }}>
        <Meals />
      </main>
    </>
  );
}

export default App;
