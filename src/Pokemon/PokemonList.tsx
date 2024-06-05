import { Pokemon } from "./Pokemon";

const PokemonList = function ({ items }: { items: Pokemon[] }) {
  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 md:gird-cols-1 sm:grid-cols-1 gap-8">
      {items.map((item) => (
        <Pokemon name={item.name} url={item.url} key={item.url} />
      ))}
    </div>
  );
};

export { PokemonList };
