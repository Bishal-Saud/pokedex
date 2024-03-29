import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import './pokedex.css'
import PokemonDetails from "../PokemonDetails/PokemonDetails";
function Pokedex() {
    const [searchTerm,setSearchTerm] =useState('')
    return(

        <div className="box-wrapper">
       <Search updateSearch={setSearchTerm} />
       {searchTerm}
      { (!searchTerm)  ? <PokemonList/> : <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
        </div>
    )
}

export default Pokedex;