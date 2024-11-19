interface pokemonId {
name: string;
imgSrc: string;
}

function PokemonCard({ name , imgSrc } : pokemonId) {

  return (
    <>
      <figure>
        {imgSrc ? 
        <img src={imgSrc} alt={`Representation of ${name}`}/> 
        : <p>This is supposed to be a pokemon</p>}
      </figure>
    </>
  );
}

export default PokemonCard;
