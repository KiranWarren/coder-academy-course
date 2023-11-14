import "./App.css";
import FruitList from "./FruitList.jsx";
import Title from "./Title.jsx";

function App() {
  return (
    <div className="App">
      <Title />
      <Title />
      <ul>
        <FruitList />
      </ul>
    </div>
  );
}

export default App;
