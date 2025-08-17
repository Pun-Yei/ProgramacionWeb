import React, { useEffect, useState } from "react";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener pokemones:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando pokemones...</p>;

  return (
    <div>
      <h1>Lista de Pokemones</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li> 
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
