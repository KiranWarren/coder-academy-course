// Create page that let's us increase or decrease the number of
// pokemon are displayed/on screen.
// App component to keep track of:
// - Keep track of how many pokemon to show
// - Iterate over a single, DRY modular component
// - Button to increase pokemon displayed count
// - Button to decrease pokemon displayed count

import React from "react";
import Pokemon from "./Pokemon";

class App extends React.Component {
  constructor() {
    super();

    // start with at least 1 pokemon on screen
    this.state = {
      pokemonCount: 1,
    };
  }

  increasePokemonCount(currentCount) {
    this.setState({ pokemonCount: currentCount + 1 });
  }

  decreasePokemonCount(currentCount) {
    if (currentCount > 0) {
      this.setState({ pokemonCount: currentCount - 1 });
    }
  }

  render() {
    return (
      <div>
        <h1>Pokemon Page</h1>
        <button
          onClick={() => {
            this.increasePokemonCount(this.state.pokemonCount);
          }}
        >
          Increase Pokemon count
        </button>
        <button
          onClick={() => {
            this.decreasePokemonCount(this.state.pokemonCount);
          }}
        >
          Decrease Pokemon count
        </button>
        <Pokemon />
      </div>
    );
  }
}

export default App;
