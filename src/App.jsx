import { useState } from 'react'
import PokemonList from "./pokeapi";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PokemonList/>
    </>
  )
}

export default App
