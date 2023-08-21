import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [randomName, setRandomName] = useState("");
  const [randomImageUrl, setRandomImageUrl] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    const randomPokemon = pokemonList[randomIndex];
    setRandomName(randomPokemon.name);
    setRandomImageUrl(
      `https://img.pokemondb.net/artwork/large/${randomPokemon.name}.jpg`
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pokemon Friends</h1>
      <button className="button-33" onClick={generateRandomName}>
        Click for a Pokemon Friend
      </button>
      <h1>Pokemon Name: {randomName}</h1>
      <br />
      {randomImageUrl && (
        <img
          src={randomImageUrl}
          height="300"
          width="350"
          alt="Random Pokemon"
          style={{ objectFit: "scale-down" }}
        />
      )}
    </div>
  );
}

export default App;
