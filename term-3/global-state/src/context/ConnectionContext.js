import { createContext } from "react";

export const defaultConnectionData = {
  url: "https://pokeapi.co/api/v2/pokemon/",
};

// Every component within this context will have access to defaultConnectionData
export const ConnectionContext = createContext(defaultConnectionData);
