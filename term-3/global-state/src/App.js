import ApiTester from "./ApiTester";
import UserDisplay from "./UserDisplay";
import "./App.css";
import {
  ConnectionContext,
  defaultConnectionData,
} from "./context/ConnectionContext";
import UserGlobalData from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserGlobalData>
        {/* Add provider and the initial context */}
        <ConnectionContext.Provider value={defaultConnectionData}>
          <ApiTester />
          <UserDisplay />
        </ConnectionContext.Provider>
      </UserGlobalData>
    </div>
  );
}

export default App;
