import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import './pokedex.css'
function Pokedex() {
    return(
        <div className="box-wrapper">
        <h1>Pokedex</h1>
       {/* <Search/> */}
       <PokemonList/>
        </div>
    )
}

export default Pokedex;