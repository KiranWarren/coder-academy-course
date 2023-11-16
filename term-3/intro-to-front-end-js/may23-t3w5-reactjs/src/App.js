// import "./App.css";
import FruitList from "./FruitList.jsx";
import Title from "./Title.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="App">
      <Title loggedInUser="Kiran" />
      <FruitList
        colour={"Yellow"}
        listToShow={["Mangoes", "Bananas", "Lemons", "Pineapple"]}
      />
      <FruitList
        colour={"Green"}
        listToShow={["Lime", "Pears", "Apples", "Chillies"]}
      />
      <FruitList
        colour={"Red"}
        listToShow={["Cherry", "Tomatoes", "Strawberry", "Lingonberry"]}
      >
        <h5 className="listMessage">Red fruits are delicious!</h5>
        <h6 className="extraMessage">And great for you!</h6>
      </FruitList>
      <Footer dataFromApi="Random data" />
    </div>
  );
}

export default App;
