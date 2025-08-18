import React, { useState } from "react";

function BuscarPokemon() {
  const [pokemonName, setPokemonName] = useState("");

  const handleBuscar = async () => {
    if (!pokemonName) return;

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (!response.ok) {
        alert("Pokémon no encontrado");
        return;
      }

      const data = await response.json();

      const pokemonInfo = `
        Nombre: ${data.name}
        Tipo: ${data.types.map(t => t.type.name).join(", ")}
        Peso: ${data.weight}
        Altura: ${data.height}
        Especie: ${data.species.name}
        `;

      alert(pokemonInfo);

    } catch (error) {
      console.error("Error al buscar Pokémon:", error);
      alert("Ocurrió un error al buscar el Pokémon.");
    }
  };

  return (
    <div id="buscador">
      <input
        type="text"
        id="txtbox_buscarpokemon"
        placeholder="Nombre..."
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={handleBuscar}>Buscar</button>
    </div>
  );
}

export default BuscarPokemon;
