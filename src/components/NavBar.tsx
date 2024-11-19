import pokemonList from "./Array";

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: pokemon[];
}

function NavBar({setPokemonIndex, pokemonList}) : NavBarProps {

  const changePokemon = (index) => {
    setPokemonIndex(index)
  };

	return (
		<>
			<nav>
				{pokemonList.map((pokemon, index) => (
					<button
						type="button"
						key={pokemon.name}
						onClick={() => changePokemon(index)}
					>
						{pokemon.name}
					</button>
				))}
			</nav>
		</>
	);
}

export default NavBar;
