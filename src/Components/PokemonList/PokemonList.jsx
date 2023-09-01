import { useEffect, useState } from "react";
import axios from 'axios'
import Pokemon from "../Pokemon/Pokemon";
import './PokemonList.css'
function PokemonList(){
const [pokelist,setPokeList] = useState([])
const [isLoading,setIsLoading] =useState(true)
const [pokemonUrlApi,setPokemonUrlApi] = useState('https://pokeapi.co/api/v2/pokemon');  // we access the details from api
const [prev,setPrev] = useState('')
const [next,setNext] = useState('')

async function downloadApi(){
setIsLoading(true)
const response =await axios.get(pokemonUrlApi) // we are using the api to get data 
const pokemonResults = response.data.results; // here we get data result from api
// console.log(response.data);
setPrev(response.data.previous);
setNext(response.data.next);

//Iterating array for the each url from results using map 
const pokemonResultpromise = pokemonResults.map((pokemon)=>  axios.get(pokemon.url));

const pokemonData = await axios.all(pokemonResultpromise) // array of 20 pokemon details
// console.log(pokemonData);
//Noe iterate the data of each pokemon: name ,id,image,types
const result = pokemonData.map((pokeData)=>{
    const pokemon =pokeData.data
    // console.log(pokemon);
    return{
        id:pokemon.id,
        name:pokemon.name,
        image:pokemon.sprites.other.dream_world.front_default,
        types:pokemon.types

    }
})
// console.log(result);

setPokeList(result)
setIsLoading(false) // to make loading false after completing

}

//we use this for showing result once when refresh to the help of [] if this is not than it shows same things more when refresh
    useEffect(()=>{
// console.log('Checking use effect');
downloadApi()
    },[pokemonUrlApi])

    return(
        <div className="listofPokemon">
        {/* <h2>Pokemon Lists</h2> */}
        
        <div className="pokemonData">
            {(isLoading) ? 'Loading .... ': 
        pokelist.map((p)=><Pokemon image={p.image} name={p.name} key={p.id} id={p.id}/>)
    }</div>
    <div className="controlsBtn">
    <button disabled={setPrev == null} onClick={ ()=>setPokemonUrlApi(prev) } >Prev</button>
    <button disabled={setNext == null} onClick={ ()=>setPokemonUrlApi(next)} >Next</button>

        </div>
        </div>
    )
}

export default PokemonList;