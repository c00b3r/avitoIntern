import React, { useState, useEffect } from "react";
import API_TOKEN from "../../token";
import Pagination from "../Pagination/Pagination";
import "./MovieList.css";

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
        fetch(
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
  }, [page, limit, options]);

  // if (loading) {
  //   return <div>Загрузка фильмов</div>;
  // }

  return (
    <div className="main-wrapper">
      <h2 className="h2">Список фильмов</h2>
      <Pagination
        page={page}
        limit={limit}
        setPage={setPage}
        setLimit={setLimit}
      />
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <div className="movie-box">
              <h5>{movie.name}</h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
