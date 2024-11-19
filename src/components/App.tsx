import PokemonCard from "./PokemonCard";
import './General.css'
import { useState } from "react";
import pokemonList from "./Array";
import NavBar from "./NavBar";

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);
  
  return (
    <>
      <main>
        <h3>POKEMON</h3>
        <PokemonCard {...pokemonList[pokemonIndex]}/>
        <NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
      </main>
    </>
  );
}

export default App;