import "./App.css";

import MyTitle from "./components/PokemonCard";

function App() {
  return (
    <figure>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="un Pokemon">
      <figcaption>Bulbasaur</figcaption>
      <PokemonCard />
    </figure>
  );
}

export default App;