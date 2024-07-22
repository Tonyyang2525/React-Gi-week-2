import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${query}&apikey=YOUR_API_KEY`
    );
    setMovies(response.data.Search || []);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Movie Search</h1>
      <form onSubmit={searchMovies}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
      <div style={{ marginTop: "20px" }}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                <h3>{movie.Title}</h3>
              </Link>
              <p>{movie.Year}</p>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
