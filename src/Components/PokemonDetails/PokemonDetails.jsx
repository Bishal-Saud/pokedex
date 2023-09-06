
import { Link, useParams } from "react-router-dom";
import "./PokemonDetails.css";
// import pokemonHook from "../PokemonHook/pokemoonHook.js";
import pokemonHookList from "../PokemonHook/pokemonHookList";
function PokemonDetails({pokemonName}) {
  const { id } = useParams();
const {pokemon} = pokemonHookList(id,pokemonName);



  return (
    <>
      <div className="pokemonDetails-Wrapper card">
        <div className="pokemonDetails-Name">{pokemon.name}</div>
        <img
          className="pokemonDetails-Image"
          src={pokemon.image}
          alt="pokemonImage"
        />
        <p className="pokemonDetails-Height">Height: {pokemon.height}</p>
        <p className="pokemonDetails-Weight">Weight: {pokemon.weight}</p>
        <div className="pokemonDetails-Types">
          {pokemon.types &&
            pokemon.types.map((type) => <div key={type}> {type}</div>)}
        </div>
        <Link to={"/"}>Go Back</Link>
      </div>

{pokemon.types && pokemon.similarTypes &&
      <div className="nameList">
      More {pokemon.types[0]} types of pokemon
      <ul className="similarTypesName">
        {pokemon.types && pokemon.similarTypes.map((p)=> <li className="li box__link button-animation" key={p.pokemon.url}>{p.pokemon.name}   <span></span>
  <span></span>
  <span></span>
  <span></span></li> )}
      </ul>
      </div>
}


 
    </>
  );
}

export default PokemonDetails;
