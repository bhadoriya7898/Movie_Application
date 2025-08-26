import React from "react";
import { Card } from "react-bootstrap";
import "./MovieRow.css"; // custom CSS for scroll

function MovieRow({ title, movies }) {
  return (
    <div className="mb-5">
      <h4 className="text-white mb-3">{title}</h4>
      <div className="movie-row">
        {movies.map((movie) => (
          <Card key={movie.id} className="movie-card bg-dark text-white">
            <Card.Img
              variant="top"
              src={movie.poster}
              alt={movie.title}
              className="movie-poster"
            />
            <Card.Body>
              <Card.Title className="fs-6">{movie.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
