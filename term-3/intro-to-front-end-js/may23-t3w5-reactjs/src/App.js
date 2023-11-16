import "./App.css";
import FruitList from "./FruitList.jsx";
import Title from "./Title.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="App">
      <Title />
      <FruitList
        colour={"Yellow"}
        listToShow={["Mangoes", "Bananas", "Lemons", "Pineapple"]}
      />
      <FruitList
        colour={"Green"}
        listToShow={["Lime", "Pears", "Apples", "Chillies"]}
      />
      <Footer />
    </div>
  );
}

export default App;
