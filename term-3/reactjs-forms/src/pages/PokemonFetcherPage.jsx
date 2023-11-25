import {useParams} from 'react-router-dom';

export default function PokemonFetcherPage(props) {
    const {pokemonId} = useParams()
    return (
        <div>
            <h1>Pokemon Page</h1>
            <h3>Finding Pokemon with ID of {pokemonId}</h3>
        </div>
    )
}