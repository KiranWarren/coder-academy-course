import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PokemonFetcherPage from "./pages/PokemonFetcherPage";
import BusinessCardPage from "./pages/BusinessCardPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pokemon" element={<PokemonFetcherPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cards" element={<BusinessCardPage />} />
      </Routes>
    </div>
  );
}

export default App;
