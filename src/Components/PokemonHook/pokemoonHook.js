import axios from "axios";
import { useEffect, useState } from "react";

function pokemonHook() {
  const [pokemonListState, setPokemonListState] = useState({
    pokelist: [],
    isLoading: true,
    pokemonUrlApi: "https://pokeapi.co/api/v2/pokemon",
    prev: "",
    next: "",
  
  });

  async function downloadApi() {

        setPokemonListState((state) => ({ ...state, isLoading: true }));
        const response = await axios.get(pokemonListState.pokemonUrlApi); // we are using the api to get data
        console.log(response.data.pokemon);
        const pokemonResults = response.data.results; // here we get data result from api
        setPokemonListState((state) => ({
          ...state,
          prev: response.data.previous,
          next: response.data.next,
        }));

      //Iterating array for the each url from results using map
      const pokemonResultpromise = pokemonResults.map((pokemon) =>
        axios.get(pokemon.url)
      );

      const pokemonData = await axios.all(pokemonResultpromise); // array of 20 pokemon details
      //Noe iterate the data of each pokemon: name ,id,image,types
      const result = pokemonData.map((pokeData) => {
        const pokemon = pokeData.data;
        // console.log(pokemon);
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other.dream_world.front_default,
          types: pokemon.types,
        };
      });

      // setPokeList(result)
      setPokemonListState((state) => ({
        ...state,
        pokelist: result,
        isLoading: false,
      }));
    
  }

  //we use this for showing result once when refresh to the help of [] if this is not than it shows same things more when refresh
  useEffect(() => {
    // console.log('Checking use effect');
    downloadApi();
  }, [pokemonListState.pokemonUrlApi]);

  return { pokemonListState, setPokemonListState };
}

export default pokemonHook;
