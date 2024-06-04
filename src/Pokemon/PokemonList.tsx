import { Pokemon } from "./Pokemon";

import "./index.css";

const PokemonList = function ({ items }: { items: Pokemon[] }) {
  return (
    <div className="pokemon-list">
      {items.map((item) => (
        <Pokemon name={item.name} url={item.url} key={item.url} />
      ))}
    </div>
  );
};

export { PokemonList };
