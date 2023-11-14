// Array of fruit names:
let someFruit = [
    "mangoes",
    "pears",
    "oranges",
    "bananas",
    "strawberries",
    "grapes",
];
  
export default function FruitList() {
    let fruitListItems = someFruit.map((fruit) => {
      return <li>{fruit}</li>;
    });
    return fruitListItems;
};