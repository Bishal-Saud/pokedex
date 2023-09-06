import { Link } from 'react-router-dom';
import './Pokemon.css'
function Pokemon({name,image,id}){
return(
    <div className="poke-Wrapper">
        <Link to={`pokemon/${id}`}>
    <p className="pokeName">{name}</p>
    <div><img  className="pokeImage" src={image} alt="pokemonImage" /></div>
    <span>Touch Me</span>
        </Link>
    </div>
)
}

export default Pokemon;