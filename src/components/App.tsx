import PokemonCard from "./PokemonCard";
import './General.css'
import { useState } from "react";

function App() {

  const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
  
    {
      name: "Mew",
      imgSrc: "",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleNext = () => {
    setPokemonIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);
  };

  const handlePrevious = () => {
    setPokemonIndex((prevIndex) => (prevIndex - 1 + pokemonList.length) % pokemonList.length);
  };

  return (
    <>
      <main>
        <h3>POKEMON</h3>
        <PokemonCard {...pokemonList[pokemonIndex]}/>
        <button type="button" onClick={handleNext}>Suivant</button>
        <button type="button" onClick={handlePrevious}>Precedent</button>
      </main>
    </>
  );
}

export default App;
