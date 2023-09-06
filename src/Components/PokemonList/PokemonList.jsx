
import Pokemon from "../Pokemon/Pokemon";
import './PokemonList.css'
import pokemonHook from "../PokemonHook/pokemoonHook";
function PokemonList(){
const {pokemonListState,setPokemonListState} =pokemonHook(false);

    return(
        <div className="listofPokemon">
        {/* <h2>Pokemon Lists</h2> */}
        
        <div className="pokemonData">
            {(pokemonListState.isLoading) ? 'Loading .... ': 
        pokemonListState.pokelist.map((p)=><Pokemon image={p.image} name={p.name} key={p.id} id={p.id}/>)
    }</div>
    <div className="controlsBtn">
    <button disabled={pokemonListState.prev == null} onClick={ ()=>setPokemonListState({
        ...pokemonListState, 
        pokemonUrlApi:pokemonListState.prev
    })} >Prev</button>
    <button disabled={pokemonListState.next == null} onClick={ ()=>setPokemonListState({
        ...pokemonListState, 
        pokemonUrlApi:pokemonListState.next
    })} >Next</button>

        </div>
        </div>
    )
}

export default PokemonList;