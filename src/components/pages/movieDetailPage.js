import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { name } = useParams();
  const [movie, setMovie] = useState(null);
  const [movieSearch, setMovieSearch] = useState(name || "");

  useEffect(() => {
    searchMovie(movieSearch);
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  function searchMovie(movieName) {
    axios
      .get(`https://www.omdbapi.com/?t=${movieName}&apikey=16266516`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }
  function handleSearch(e) {
    setMovieSearch(e.target.value);
  }

  function handleSubmit() {
    searchMovie(movieSearch);
  }

  return (
    <div className="movie-detail">
      <input
        type="text"
        value={movieSearch}
        onChange={(e) => handleSearch(e)}
      />
      <button onClick={handleSubmit}>Search</button>
      <h2>{movie.Title}</h2>
      <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div>
        <p>Year: {movie.Year}</p>
        <p>Genre: {movie.Genre}</p>
        <p>Director: {movie.Director}</p>
        <p>Plot: {movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
