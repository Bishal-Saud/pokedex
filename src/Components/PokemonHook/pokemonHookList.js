import axios from "axios";
import { useEffect, useState } from "react";
import pokemonHook from "./pokemoonHook";

function pokemonHookList(id){
    const [pokemon, setPokemon] = useState({});
    
    async function downloadParams() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const pokemonSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name: ''}`)
console.log('same',pokemonSameTypes.data.pokemon);
        console.log('res',response.data);
        setPokemon({
          name: response.data.name,
          image: response.data.sprites.other.dream_world.front_default,
          weight: response.data.weight,
          height: response.data.height,
          types: response.data.types.map((type) => type.type.name),
          similarTypes:pokemonSameTypes.data.pokemon.slice(0,5)
        });
    setPokemonListState({...pokemonListState,type:response.data.types ? response.data.types[0].type.name: ''
})
    }
    const {pokemonListState,setPokemonListState} = pokemonHook();
    
    
      useEffect(() => {
        console.log(pokemonListState);
        downloadParams();
      }, []);

      return{pokemon}
}

export default pokemonHookList;