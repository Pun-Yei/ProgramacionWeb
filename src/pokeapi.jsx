import React, { useEffect, useState } from "react";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
        const data = await response.json();

        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              name: details.name,
              types: details.types.map(t => t.type.name).join(", "),
              weight: details.weight,
              height: details.height,
              species: details.species ? details.species.name : "Desconocida",
              image: details.sprites.front_default
            };
          })
        );

        setPokemons(detailedPokemons);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener pokemones:", error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) return <p>Cargando pokemones...</p>;

  return (
    <div className="contenedorCartas">
      {pokemons.map((pokemon, index) => (
        <div key={index} className="cartaPokemon">
          <div id="top">
            <h2>{pokemon.name}</h2>
            <p>Tipo: {pokemon.types}</p>
          </div>
          
          {pokemon.image && <img src={pokemon.image} alt={pokemon.name} />}
          <p>Peso: {pokemon.weight}</p>
          <p>Altura: {pokemon.height}</p>
          <p>Especie: {pokemon.species}</p>
        </div>
      ))}
    </div>
);

}

export default PokemonList;

