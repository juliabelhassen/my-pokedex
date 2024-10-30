import PokemonCard from "./components/PokemonCard"



function App() {


  return (
    <>
     <main>
      <h3>POKEMON</h3>

      <PokemonCard />
    
     </main>
    </>

  );
}


// Une props est une propriete qu'on donne a l'un de nos composants, comme un attribut HTML. 
// On passe les props toujours du parent vers l'enfant
// exemple <Card firstname = "Mario"/>

export default App;