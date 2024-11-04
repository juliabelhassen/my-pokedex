interface pokemonId {
name: string;
imgSrc: string; 
}

function PokemonCard({ name , imgSrc } : pokemonId) {

  return (
    <>
      <figure>
        {imgSrc ? 
        <img 
        src={imgSrc} 
        alt={'This is a Pokemon'} 
        /> 
        : <p>This is supposed to be a Pokemon</p>}
        <figcaption>{name}</figcaption>
        
      </figure>
    </>
  );
}

export default PokemonCard;
