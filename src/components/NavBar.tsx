interface NavBarProps {
	setPokemonIndex: (index: number) => void;
	pokemonList: pokemon[];
}

function NavBar({ setPokemonIndex, pokemonList }: NavBarProps ) {
	const changePokemon = (index : number, name: string) => {
		if(name === "pikachu") {
			alert("Pika Pikaaa")
		}
		setPokemonIndex(index);
	};

	return (
		<>
			<nav>
				{pokemonList.map((pokemon, index: number) => (
					<button
						type="button"
						key={pokemon.name}
						onClick={() => changePokemon(index, pokemon.name)}
					>
						{pokemon.name}
					</button>
				))}
			</nav>
		</>
	);
}

export default NavBar;
