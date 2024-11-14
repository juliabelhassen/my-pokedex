import PokemonCard from "./PokemonCard";
import './General.css'
import { useState } from "react";
import pokemonList from "./Array";

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const goNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const goPrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const isNextDisabled = pokemonIndex >= pokemonList.length - 1;
  const isPreviousDisabled = pokemonIndex <= 0;

  // Est ce qu'il y a un pokemon Next ? Si oui go Next, si non Disable button
  // Est ce qu'il y a un pokemon previous ? Si oui go Previous, si non Disable button
  // {isPokemon ? disable(button) TRUE : goNext} ?
  
  return (
    <>
      <main>
        <h3>POKEMON</h3>
        <PokemonCard {...pokemonList[pokemonIndex]}/>
        <button type="button" onClick={goNext} disabled={isNextDisabled}>
          Suivant
        </button>
        <button type="button" onClick={goPrevious} disabled={isPreviousDisabled}>
          Précédent
        </button>
      </main>
    </>
  );
}

export default App;
