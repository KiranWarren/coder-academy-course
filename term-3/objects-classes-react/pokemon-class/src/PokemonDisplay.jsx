import React from "react";

export default class PokemonDisplay extends React.Component {
    constructor(props) {
        super(props);

        // state stores data per component
        this.state = {
            pokemonName: null
        }
    }

    render() {
        return (
            <h2>Pokemon name</h2>
        )
    }
}