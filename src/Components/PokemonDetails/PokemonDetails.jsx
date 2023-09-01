import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import './PokemonDetails.css'
function PokemonDetails(){
    const {id} = useParams();
    // console.log(id);
    const [pokemon,setPokemon] = useState({})

async function downloadParams(){
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    console.log(response.data);
    setPokemon({
        name:response.data.name,
        image:response.data.sprites.other.dream_world.front_default,
        weight: response.data.weight,
        height: response.data.height,
        types: response.data.types.map((type)=> type.type.name)
    })


}

    useEffect(()=>{
downloadParams()
    },[])

return(
    <>
    <div className="pokemonDetails-Wrapper card">
        <div className="pokemonDetails-Name">
Name: {pokemon.name}
        </div>
        <img className="pokemonDetails-Image" src={pokemon.image} alt="pokemonImage" />
        <p className="pokemonDetails-Height">Height:{pokemon.height}</p>
        <p className="pokemonDetails-Weight">Weight:{pokemon.weight}</p>
        <div className="pokemonDetails-Types">
            {pokemon.types &&  pokemon.types.map((type)=> <div key={type}> Type:{type}</div>)}
        </div>
        <Link to={'/'}>Go Back</Link>
        </div> 
    </>
)
}

export default PokemonDetails