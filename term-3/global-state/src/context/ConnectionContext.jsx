import { createContext } from "react";

const defaultConnectionData = {
  url: "https://pokeapi.co/api/v2/pokemon/",
};

// Every component within this context will have access to defaultConnectionData
export const ConnectionContext = createContext(defaultConnectionData);

export default function ConnectionProvider(props) {
  return (
    <ConnectionContext.Provider value={defaultConnectionData}>
      {props.children}
    </ConnectionContext.Provider>
  );
}
