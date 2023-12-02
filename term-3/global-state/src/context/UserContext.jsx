import { createContext, useState, useReducer } from "react";
import { userReducer } from "./UserReducer";

const defaultUserData = {
  jwt: "not empty",
};

export const UserContext = createContext(defaultUserData);

export default function UserGlobalData(props) {
  // const [userData, setUserData] = useState(defaultUserData);
  const [userData, userDataDispatch] = useReducer(userReducer, defaultUserData);
  return (
    <UserContext.Provider
      value={{ userData: userData, userDataDispatch: userDataDispatch }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
