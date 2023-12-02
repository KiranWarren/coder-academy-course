import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function LogoutButton() {
  const { userDataDispatch } = useContext(UserContext);

  function logoutUser() {
    userDataDispatch({ type: "logout" });
  }

  return <button onClick={logoutUser}>Log Out</button>;
}
