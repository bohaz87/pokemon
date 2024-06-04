import { PokemonList } from "./Pokemon";

import "./App.css";
import React, { useState } from "react";

function App() {
  const [pagingType, setPagingType] = useState<0 | 1>(0);

  return (
    <div className="app">
      <header className="app-header">
        Pokémon Feed
        <p>See README.md for sorting, filtering, and search </p>
        <div className="app-paging-control">
          <label>
            <input
              type="radio"
              name="pagingtype"
              checked={pagingType === 0}
              onChange={() => setPagingType(0)}
            />
            Pagination
          </label>
          <label>
            <input
              type="radio"
              name="pagingtype"
              checked={pagingType === 1}
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
