import PokemonCard from "./components/PokemonCard";

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
];

function App() {
  return (
    <>
      <main>
        <h3>POKEMON</h3>
        <PokemonCard {...pokemonList[0]}/>
      </main>
    </>
  );
}

// Une props est une propriete qu'on donne a l'un de nos composants, comme un attribut HTML.
// On passe les props toujours du parent vers l'enfant
// exemple <Card firstname = "Mario"/>

export default App;
