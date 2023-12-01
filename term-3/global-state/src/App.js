import ApiTester from "./ApiTester";
import "./App.css";
import {
  ConnectionContext,
  defaultConnectionData,
} from "./context/ConnectionContext";

function App() {
  return (
    <div className="App">
      {/* Add provider and the initial context */}
      <ConnectionContext.Provider value={defaultConnectionData}>
        <ApiTester />
      </ConnectionContext.Provider>
    </div>
  );
}

export default App;
