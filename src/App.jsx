
import { Link } from 'react-router-dom'
import './App.css'
import Pokedex from './Components/Pokedex/Pokedex'
import CustomRoutes from './Router/CustomRoutes'

function App() {
 

  return (
    <>
   <Link to="/">
    <h1 className='nav-Heading'>Pokedex</h1>
   </Link>
  <CustomRoutes/>
    </>
  )
}

export default App
