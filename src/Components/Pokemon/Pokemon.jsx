import './Pokemon.css'
function Pokemon({name,image}){
return(
    <div className="poke-Wrapper">
    <p className="pokeName">{name}</p>
    <div><img  className="pokeImage" src={image} alt="pokemonImage" /></div>
    </div>
)
}

export default Pokemon;