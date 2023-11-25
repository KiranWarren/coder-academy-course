import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PokemonFetcherPage from "./pages/PokemonFetcherPage";
import BusinessCardPage from "./pages/BusinessCardPage";
import { Route, Routes, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Outlet />}>
          <Route index element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="/pokemon" element={<PokemonFetcherPage />} />
        <Route path="/about/contact" element={<ContactPage />} />
        <Route path="/cards" element={<BusinessCardPage />} />
      </Routes>
    </div>
  );
}

export default App;
