import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <>
      <Header></Header>
      <main style={{clear: "both"}}>
        <Meals />
      </main>
    </>
  );
}

export default App;
