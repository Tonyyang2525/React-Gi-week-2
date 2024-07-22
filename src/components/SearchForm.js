import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-form">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for a movie..."
        />
        <Link to={`/movies?search=${query}`}>
          <button type="submit">Search</button>
        </Link>
      </form>
    </div>
  );
};

export default SearchForm;
