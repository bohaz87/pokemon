import { ReactNode, useCallback, useEffect, useState } from "react";
import { Loading } from "../Loading";
import { PokemonList } from "./PokemonList";
import { Pagination } from "../Pagination";
import { fetchPokemonList } from "../api/pokemon";

import "./index.css";

const PokemonListWithPaging = function ({ limit = 20 }: { limit?: number }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [items, setItems] = useState<Pokemon[]>([]);
  const [totalCount, setTotalCount] = useState<number | null>(null);

  useEffect(() => {
    fetchPokemonList()
      .then((data) => {
        setItems(data.results);
        setTotalCount(data.count);
        setError(null);
      })
      .catch((err) => setError(err.toString()));
  }, []);

  const loadPage = useCallback(
    (page: number) => {
      setLoading(true);
      fetchPokemonList(`offset=${(page - 1) * limit}&limit=${limit}`)
        .then((data) => {
          setLoading(false);
          setItems(data.results);
          setError(null);
        })
        .catch((err) => setError(err.toString()));
    },
    [limit]
  );

  let child: ReactNode;

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
};

export { PokemonListWithPaging };
