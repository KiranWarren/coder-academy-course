import { useState, useEffect } from "react";
import "./App.css";
import { useLocalStorage } from "react-use";

function App() {
  const [storedMessage, setStoredMessage] = useLocalStorage("message", "");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(storedMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className="App">{message && <h1>{message}</h1>}</div>;
}

export default App;
