import { useQueries } from "react-query";

import "./App.css";
import { useState } from "react";

// https://pokeapi.api-docs.io/v2.0/pokemon/hmdqEKsagkj6Pu5ct


const fetchPokeAPI = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return data;
};
const pokemonDexId = [1,2,3,4,5]

// useQueries: 一次取多筆資料回來的 [{...},{...},{...},{...},{...}]
function App() {

  // 一次取多筆資料
  const pokemonQueries = useQueries(
    pokemonDexId.map(id => {
      return {
        queryKey: ['pokemon',id],
        queryFn: () => fetchPokeAPI(id),
      }
    })
  )

  console.log('pokemonQueries ==>', pokemonQueries)
  return (
    <div className="box">
    </div>
  );
}

export default App;
