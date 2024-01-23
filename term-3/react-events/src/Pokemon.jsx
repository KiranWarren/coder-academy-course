import React from "react";

export default class Pokemon extends React.Component {
    constructor(){
        super();

        this.state = {
            pokemonData:{}
        }
    }

    async componentDidMount() {
        let randomPokemonIndex = Math.floor(Math.random() * 1017) + 1;
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonIndex}`);
        let data = await response.json();
        
        this.setState({pokemonData: data});
    }


    render() {
        return this.state.pokemonData.name ?
            (
                <div>
                    <h3>{this.state.pokemonData.name}</h3>
                    <img src={this.state.pokemonData.sprites.front_default} alt="Random Pokemon"/>
                </div>
            )
            :
            (
                <div>
                    <p>Still loading Pokemon data...</p>
                </div>
            )
    }
}