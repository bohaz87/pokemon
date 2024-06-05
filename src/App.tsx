import { PokemonList } from "./Pokemon";

import React, { useState } from "react";

function App() {
  const [pagingType, setPagingType] = useState<0 | 1>(0);

  return (
    <div className="w-11/12 mx-auto my-0">
      <header className="app-header text-center px-1 py-1 my-2 border-b border-black ">
        <div className="text-5xl my-8">Pokémon Feed</div>
        <p className="text-base">
          See README.md for sorting, filtering, and search{" "}
        </p>
        <div className="text-base leading-8 flex items-center justify-end gap-4">
          <label>
            <input
              type="radio"
              name="pagingtype"
              checked={pagingType === 0}
              className="mr-2"
              onChange={() => setPagingType(0)}
            />
            Pagination
          </label>
          <label>
            <input
              type="radio"
              name="pagingtype"
              checked={pagingType === 1}
              className="mr-2"
              onChange={() => setPagingType(1)}
            />
            Infinite scroll
          </label>
        </div>
      </header>
      <PokemonList pagingType={pagingType} />
    </div>
  );
}

export default App;
