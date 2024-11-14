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
        : <p>This is supposed to be a Pokemon</p>}
        <button type="button">{name}</button>
      </figure>
    </>
  );
}

export default PokemonCard;
