import React, { Pokemon } from "./Pokemon";

import "./index.css";

type Pokemon = {
  name: string;
  url: string;
};

type PokemonDetail = {
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  sprites: {
    back_default: string;
  };
};

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
