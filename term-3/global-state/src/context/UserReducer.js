export const userReducer = (previousState, instructions) => {
  let newState = { ...previousState };

  switch (instructions.type) {
    case "login":
      newState = "Pretend a fetch request finished and return a JWT";
      return newState;
    case "logout":
      newState = "";
      return "";
    default:
      return newState;
  }
};
