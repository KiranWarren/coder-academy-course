import { useState, useEffect } from "react";
import "./App.css";
import { useLocalStorage } from "react-use";
import { BrowserRouter, Routes, NavLink, Route } from "react-router-dom";
import NumberGrabber from "./NumberGrabber";

function App() {
  const [storedMessage, setStoredMessage] = useLocalStorage("message", "");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(storedMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Everytime message changes, we will update storedMessage value
  useEffect(() => {
    setStoredMessage(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <div className="App">
      {message && <h1>{message}</h1>}
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to="/1/3/me">Page 1</NavLink>
          </li>
          <li>
            <NavLink to="/2/1/help">Page 2</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/:banana/:id/:potato" element={<NumberGrabber />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
