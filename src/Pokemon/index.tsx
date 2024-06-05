import React from "react";
import { PokemonListWithPaging } from "./PokemonListWithPaging";
import { PokemonListWithAutoLoad } from "./PokemonListWithAutoLoad";

function PokemonList({
  pagingType,
  limit,
}: {
  pagingType: 0 | 1;
  limit?: number;
}) {
  return pagingType === 0 ? (
    <PokemonListWithPaging limit={limit} />
  ) : (
    <PokemonListWithAutoLoad limit={limit} />
  );
}

export { PokemonList };
