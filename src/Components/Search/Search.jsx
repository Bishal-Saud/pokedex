import useDebounce from '../PokemonHook/useDebounce';
import './search.css'
function Search({updateSearch}){
    const useDebounceCallback = useDebounce((e)=> updateSearch(e.target.value))
    return(
        <>
        <div>
           <input type="text"
        placeholder="Pokedex name..."
        className="inp-search"
        onChange={useDebounceCallback}
        />
        </div>
        </>
    )
}

export default Search;