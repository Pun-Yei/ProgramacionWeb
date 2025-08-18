import { useState } from 'react'
import PokemonList from "./pokeapi";
import BuscarPokemon from './buscarpokemon';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BuscarPokemon/>
      <PokemonList/>
    </>
  )
}

export default App
