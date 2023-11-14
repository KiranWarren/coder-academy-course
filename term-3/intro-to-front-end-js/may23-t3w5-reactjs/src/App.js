import "./App.css";
import FruitList from "./FruitList.jsx";
import Title from "./Title.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="App">
      <Title />
      <ul>
        <FruitList />
      </ul>
      <Footer />
    </div>
  );
}

export default App;
