import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import "./MovieRow.css";

function MovieRow({ title, movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [show, setShow] = useState(false);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="mb-5">
      <h4 className="text-white mb-3">{title}</h4>
      <div className="movie-row">
        {movies.map((movie) => (
          <Card
            key={movie.imdbID}
            className="movie-card bg-dark text-white"
            onClick={() => handleCardClick(movie)}
          >
            <Card.Img
              variant="top"
              src={movie.Poster}
              alt={movie.Title}
              className="movie-poster"
            />
            <Card.Body>
              <Card.Title className="fs-6">{movie.Title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>

     <Modal
  show={show}
  onHide={handleClose}
  centered
  dialogClassName="custom-modal"
>
  <Modal.Header closeButton>
    <Modal.Title style={{ fontSize: "1rem" }}>
      {selectedMovie?.Title}
    </Modal.Title>
  </Modal.Header>
  <Modal.Body style={{ textAlign: "center" }}>
    <img
      src={selectedMovie?.Poster}
      alt={selectedMovie?.Title}
      style={{
        width: "100%",
        maxHeight: "40vh",
        objectFit: "contain",
        borderRadius: "8px",
      }}
    />
    <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>
      Year: {selectedMovie?.Year}
    </p>
    <p style={{ fontSize: "0.9rem" }}>
      Type: {selectedMovie?.Type}
    </p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" size="sm" onClick={handleClose}>
      Close
    </Button>
  </Modal.Footer>
</Modal>



    </div>
  );
}

export default MovieRow;
