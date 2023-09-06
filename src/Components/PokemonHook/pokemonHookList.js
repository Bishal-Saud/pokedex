import axios from "axios";
import { useEffect, useState } from "react";

function pokemonHookList(id, pokemonName) {
  const [pokemon, setPokemon] = useState({});

  async function downloadParams() {
    try {
      let response;
      if (pokemonName) {
        response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
      } else {
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      }
      const pokemonSameTypes = await axios.get(
        `https://pokeapi.co/api/v2/type/${
          response.data.types ? response.data.types[0].type.name : ""
        }`
      );
    
      setPokemon({
        name: response.data.name,
        image: response.data.sprites.other.dream_world.front_default,
        weight: response.data.weight,
        height: response.data.height,
        types: response.data.types.map((type) => type.type.name),
        similarTypes: pokemonSameTypes.data.pokemon.slice(0, 5),
      });
      setPokemonListState({
        ...pokemonListState,
        type: response.data.types ? response.data.types[0].type.name : "",
      });
    } catch (error) {
      console.log("Something went wrong");
    }
  }
  const { pokemonListState, setPokemonListState } = {};

  useEffect(() => {
    console.log(pokemonListState);
    downloadParams();
  }, []);

  return { pokemon };
}

export default pokemonHookList;
