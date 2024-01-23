import React from "react";

export default class PokemonDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.name = "Pikachu"

        // state stores data per component
        this.state = {
            pokemonName: null
        }
    }

    componentDidMount() {
        this.name = "Bulbasaur"
        console.log(this.name)
        console.log("Did mount triggers when component was rendered")
    }

    componentWillUnmount() {
        console.log("Will unmount trigger when component is unmounted")
    }

    render() {
        return (
            <h2>Pokemon {this.name}</h2>
        )
    }
}