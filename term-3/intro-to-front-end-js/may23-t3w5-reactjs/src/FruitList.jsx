// // Array of fruit names:
// let someFruit = [
//     "mangoes",
//     "pears",
//     "oranges",
//     "bananas",
//     "strawberries",
//     "grapes",
// ];
  
export default function FruitList(props) {

    // Conditional rendering: If Durian in the list, do not show list. Analogous to not logged in.
    if (props.listToShow.includes("Durian")) {
      return null
    } 

    let fruitListItems = props.listToShow.map((fruit) => {
      return <li key={fruit}>{fruit}</li>;
    });
    return (
      <>
        <h3>{props.colour} Fruits</h3>
        <ul>
          {fruitListItems}
        </ul>
      </>
    );
};