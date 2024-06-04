# Pokémon Feed

## Start

```
npm install
npm run start
```

## Sorting, Filtering, and Search

Since we only have two APIs, we can only do client side sorting & filtering and search

1. Query all pokemon with API https://pokeapi.co/api/v2/pokemon, we have `total` in the response, we know where to stop, wo can several requests to the pokemon server, each query with a big `limit` number
2. Store all pokemon in **localstorage**, do take care of the storage limitation size here. Drop some data if we can't store all data.
3. Sorting, Filtering, and Search from localstorage, we can still call Individual Pokémon API to get detailed info
