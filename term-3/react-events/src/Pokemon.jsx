import React from "react";

export default class Pokemon extends React.Component {
    constructor(){
        super();

        this.state = {
            pokemonData:{
                name:null,
                picture:null
            }
        }
    }


    render() {
        return this.state.pokemonData.name ?
            (<div>
                <p>Pokemon data found!</p>
            </div>)
            :
            (<div>
                <p>Still loading Pokemon data...</p>
            </div>)
    }
}