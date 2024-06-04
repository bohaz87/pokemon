import React, { useEffect, useState, memo, useRef } from "react";
import { Loading } from "../Loading";
import { PokemonList } from "./PokemonList";

export const PokemonListWithAutoLoad = memo(function () {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [items, setItems] = useState<Pokemon[]>([]);
  const limit = 20;
  const pageRef = useRef<number>(0);
  const autoLoadElRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(
  //     `https://pokeapi.co/api/v2/pokemon?offset=${
  //       pageRef.current * limit
  //     }&limit=${limit}`
  //   )
  //     .then(async (res) => {
  //       pageRef.current++;
  //       setLoading(false);
  //       const data = await res.json();
  //       setItems(data.results);
  //       setError("");
  //     })
  //     .catch((err) => setError(err.toString()));
  // }, []);

  const loadMore = () => {
    if (!loading) {
      setLoading(true);
      fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${
          pageRef.current * limit
        }&limit=${limit}`
      )
        .then(async (res) => {
          const data = await res.json();
          pageRef.current++;
          setLoading(false);
          setItems([...items, ...data.results]);
          setError("");
        })
        .catch((err) => setError(err.toString()));
    }
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  const observer = useRef(
    new IntersectionObserver(
      (entiries) => {
        console.log("you can see me now");
        loadMore();
      },
      {
        rootMargin: "20px",
        threshold: 0,
      }
    )
  );

  useEffect(() => {
    const ob = observer.current;
    const el = autoLoadElRef.current;
    if (ob && el) {
      ob.observe(el);
    }
    return () => {
      if (ob && el) {
        ob.unobserve(el);
      }
    };
  }, []);

  let child;

  if (error) {
    child = error;
  } else {
    child = <PokemonList items={items} />;
  }

  return (
    <>
      {child}
      {loading && <Loading style={{ gridColumn: "span 2" }} />}
      {!loading && <div id="autoLoadMore" ref={autoLoadElRef} />}
    </>
  );
});
