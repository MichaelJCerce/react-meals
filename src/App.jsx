import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <>
      <Header></Header>
      <main style={{clear: "both"}}>
        <Meals />
        <Cart></Cart>
      </main>
    </>
  );
}

export default App;
