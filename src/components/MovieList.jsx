import React, { useState, useEffect } from "react";
import axios from "axios";
import API_TOKEN from "../api";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": "WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M",
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = fetch(
          "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10",
          options
        )
          .then((response) => response.json())
          .then((response) => setMovies(response.docs), setLoading(false))
          .catch((err) => console.error(err));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);
  //aboba
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
    </div>
  );
};

export default MoviesList;
