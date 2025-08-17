import { useState } from 'react'
import PokemonList from "./pokeapi";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>Mi App de Pokemones</h1>
      <PokemonList />
    </div>
    </>
  )
}

export default App
