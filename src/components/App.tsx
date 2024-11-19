import PokemonCard from "./PokemonCard";
import './General.css'
import { useState } from "react";
import pokemonList from "./Array";

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const changePokemon = (index) => {
    setPokemonIndex(index)
  };

  // const isNextDisabled = pokemonIndex >= pokemonList.length - 1;
  // const isPreviousDisabled = pokemonIndex <= 0;
  
  return (
    <>
      <main>
        <h3>POKEMON</h3>
        <PokemonCard {...pokemonList[pokemonIndex]}/>
        <nav>
          {pokemonList.map((pokemon, index) => (
          <button 
          type="button" 
          key={pokemon.name} 
          onClick={() => changePokemon(index)}>{pokemon.name}
          </button>
        ))}
        </nav>
      </main>
    </>
  );
}

export default App;