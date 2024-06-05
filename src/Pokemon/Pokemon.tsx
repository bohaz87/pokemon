import React, { ReactNode, memo, useEffect, useState } from "react";
import { Loading } from "../Loading";
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
        <div>
          <img
            src={detail.sprites.back_default}
            alt={name}
            className="w-[100px] h-[100px]"
          />
        </div>
        <div className="text-base grow grid grid-cols-2 gap-4">
          {detail.stats.map((stat) => (
            <div key={stat.stat.name}>
              <label className="capitalize font-semibold mr-2">
                {stat.stat.name}:
              </label>
              <span>{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="border border-slate-800 rounded-lg p-4 shadow-lg">
      <header className="mb-4 capitalize font-bold text-2xl">{name}</header>
      <div className="flex gap-8 text-base min-h-20">{detailEL}</div>
    </div>
  );
});

export { Pokemon };
