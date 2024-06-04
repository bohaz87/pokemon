import React, { ReactNode, memo, useEffect, useState } from "react";
import { Loading } from "../Loading";
import "./index.css";
import { fetchPokemon } from "../api/pokemon";

const Pokemon = memo(({ name, url }: { name: string; url: string }) => {
  const [pending, setPending] = useState(true);
  const [detail, setDetail] = useState<{
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
  } | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemon(url)
      .then((data) => {
        setDetail(data);
        setPending(false);
        setError(null);
      })
      .catch((e) => {
        setPending(false);
        setError(e.toString());
      });
  }, [url]);

  let detailEL: ReactNode;
  if (pending) {
    detailEL = <Loading />;
  } else if (error) {
    detailEL = "loading failed";
  } else if (detail) {
    detailEL = (
      <>
        <div className="pokemon--image">
          <img src={detail.sprites.back_default} alt={name} />
        </div>
        <div className="pokemon--stats">
          {detail.stats.map((stat) => (
            <div key={stat.stat.name} className="pokemon--stat">
              <label>{stat.stat.name}:</label>
              <span>{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="pokemon">
      <header className="pokemon--header">{name}</header>
      <div className="pokemon--detail">{detailEL}</div>
    </div>
  );
});

export { Pokemon };
