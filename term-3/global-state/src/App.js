import ApiTester from "./ApiTester";
import UserDisplay from "./UserDisplay";
import ConnectionProvider from "./context/ConnectionContext";
import "./App.css";
import UserGlobalData from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserGlobalData>
        <ConnectionProvider>
          <ApiTester />
          <UserDisplay />
        </ConnectionProvider>
      </UserGlobalData>
    </div>
  );
}

export default App;
