import React, { useState, useEffect } from "react";
import axios from "axios";
import API_TOKEN from "../token";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": `${API_TOKEN}`,
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = fetch(
          `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=${limit}`,
          options
        )
          .then((response) => response.json())
          .then((response) => setMovies(response.docs), setLoading(false))
          .catch((err) => console.error(err));
        // setMovies(response.data.docs);
        // setLoading(false);
      } catch (error) {
        console.error("нет фильмов :(", error);
      }
    };

    fetchMovies();
  }, [page, limit]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Movies List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => handlePageChange(page - 1)}>Previous</button>
        <button onClick={() => handlePageChange(page + 1)}>Next</button>
        <select
          value={limit}
          onChange={(e) => handleLimitChange(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
};

export default MoviesList;
