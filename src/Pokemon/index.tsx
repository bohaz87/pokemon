import React from "react";
// import { PokemonListWithPaging } from "./PokemonListWithPaging";
import { PokemonListWithAutoLoad } from "./PokemonListWithAutoLoad";

import "./index.css";

function PokemonList({ pagingType }: { pagingType: number }) {
  // return pagingType === 0 ? (
  //   <PokemonListWithPaging />
  // ) : (
  //   <PokemonListWithAutoLoad />
  // );
  return <PokemonListWithAutoLoad />;
}

export { PokemonList };
