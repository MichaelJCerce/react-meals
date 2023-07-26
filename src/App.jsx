import { useState } from "react";
import CartProvider from "./context/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  const cartClickHandler = () => {
    setShowCart((prevState) => !prevState);
  }
  return (
    <CartProvider>
      {showCart && <Cart onClick={cartClickHandler}></Cart>}
      <Header onClick={cartClickHandler}></Header>
      <main style={{ clear: "both" }}>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
