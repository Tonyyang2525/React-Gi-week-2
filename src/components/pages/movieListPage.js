import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const MovieList = () => {
  const [movies, setMovieList] = useState(null);
  const [movieSearch, setMovieSearch] = useState("");

  //   if (!movies || movies.length === 0) {
  //     return <div>Loading...</div>;
  //   }

  function searchMovie(movieName) {
    axios
      .get(`https://www.omdbapi.com/?s=${movieName}&apikey=16266516`)
      .then((response) => {
        setMovieList(response.data.Search);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }
  console.log(movies);
  function handleSearch(e) {
    setMovieSearch(e.target.value);
  }

  function handleSubmit() {
    console.log(movieSearch);
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

      <div>
        {!movies || movies.length === 0 ? (
          <div></div>
        ) : (
          movies.map((movie, index) => (
            <Link to={`/movie/${movie.Title}`} key={index}>
              <div>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Title}</h2>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieList;
