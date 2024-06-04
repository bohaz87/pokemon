import React, {
  useEffect,
  useState,
  memo,
  useRef,
  useCallback,
  ReactNode,
} from "react";
import { Loading } from "../Loading";
import { PokemonList } from "./PokemonList";
import { fetchPokemonList } from "../api/pokemon";

export const PokemonListWithAutoLoad = memo(function ({
  limit = 20,
}: {
  limit?: number;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [items, setItems] = useState<Pokemon[]>([]);
  const pageRef = useRef<number>(0);
  const autoLoadElRef = useRef<HTMLDivElement | null>(null);

  /**
   * first load when didMount
   */
  useEffect(() => {
    setLoading(true);
    fetchPokemonList()
      .then((data) => {
        pageRef.current++;
        setLoading(false);
        setItems(data.results);
        setError(null);
      })
      .catch((err) => setError(err.toString()));
  }, []);

  const loadMore = useCallback(() => {
    if (!loading) {
      setLoading(true);
      fetchPokemonList(`offset=${pageRef.current * limit}&limit=${limit}`)
        .then((data) => {
          pageRef.current++;
          setLoading(false);
          setItems([...items, ...data.results]);
          setError("");
        })
        .catch((err) => setError(err.toString()));
    }
  }, [items, limit, loading]);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (entiries) => {
        const el = entiries[0];
        if (el.isIntersecting) {
          loadMore();
        }
      },
      {
        rootMargin: "100px",
        threshold: 0,
      }
    );
    const el = autoLoadElRef.current;
    if (ob && el) {
      ob.observe(el);
    }
    return () => {
      if (ob && el) {
        ob.unobserve(el);
      }
    };
  }, [loadMore]);

  let child: ReactNode;

  if (error) {
    child = error;
  } else {
    child = <PokemonList items={items} />;
  }

  return (
    <>
      {child}
      {loading && <Loading style={{ gridColumn: "span 2" }} />}
      <div id="autoLoadMore" ref={autoLoadElRef} />
    </>
  );
});
