import React from "react";
import { PokemonListWithPaging } from "./PokemonListWithPaging";
import { PokemonListWithAutoLoad } from "./PokemonListWithAutoLoad";

import "./index.css";

function PokemonList({ pagingType }) {
  return pagingType === 0 ? (
    <PokemonListWithPaging />
  ) : (
    <PokemonListWithAutoLoad />
  );
}

export { PokemonList };
