import { useCallback, useEffect, useState, memo } from "react";
import { Loading } from "../Loading";
import { Pokemon } from "./Pokemon";
import { Pagination } from "../Pagination";

import "./index.css";

const PokemonList = memo(function ({ items }) {
  return (
    <div className="pokemon-list">
      {items.map((item) => (
        <Pokemon name={item.name} url={item.url} key={item.url} />
      ))}
    </div>
  );
});

const PokemonListWithPaging = memo(function ({ pagingType }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(null);
  const limit = 20;

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(async (res) => {
        const data = await res.json();
        setItems(data.results);
        setTotalCount(data.count);
        setError("");
      })
      .catch((err) => setError(err.toString()));
  }, []);

  const loadPage = useCallback((page) => {
    setLoading(true);
    fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${page * limit}&limit=${limit}`
    )
      .then(async (res) => {
        setLoading(false);
        const data = await res.json();
        setItems(data.results);
        setError("");
      })
      .catch((err) => setError(err.toString()));
  }, []);

  let child;

  if (totalCount === null) {
    return <Loading />;
  }

  if (error) {
    child = error;
  } else {
    child = <PokemonList items={items} />;
  }

  return (
    <>
      <Pagination totalCount={totalCount} pageSize={20} onChange={loadPage} />
      {loading ? <Loading style={{ gridColumn: "span 2" }} /> : child}
    </>
  );
});

export { PokemonListWithPaging };
