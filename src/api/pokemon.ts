export function fetchPokemonList(
  query: string = ""
): Promise<{ count: number; results: Pokemon[] }> {
  return fetch(`https://pokeapi.co/api/v2/pokemon?${query}`).then(async (res) =>
    res.json()
  );
}

export function fetchPokemon(url: string): Promise<PokemonDetail> {
  return fetch(url).then(async (res) => res.json());
}
