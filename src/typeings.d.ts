type Pokemon = {
  name: string;
  url: string;
};

type PokemonDetail = {
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
};
