import React from "react";
import HeroSection from "./HeroSection";
import Navbarcom from "./Navbarcom";
import MovieRow from "./MovieRow";
import Footer from "./Footers";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
// Import images from assets
// import movie1 from "../assets/movies/movie1.jpg";
// import movie2 from "../assets/movies/movie2.jpg";
// import movie3 from "../assets/movies/movie3.jpg";
// import movie4 from "../assets/movies/movie4.jpg";
// import movie5 from "../assets/movies/movie5.jpg";
// import movie6 from "../assets/movies/movie6.jpg";
// import movie7 from "../assets/movies/movie7.jpg";
// import movie8 from "../assets/movies/movie8.jpg";

// const actionMovies = [
//   { id: 1, title: "Movie 1", poster: movie1 },
//   { id: 2, title: "Movie 2", poster: movie2 },
//   { id: 3, title: "Movie 3", poster: movie3 },
//   { id: 4, title: "Movie 4", poster: movie4 },
// ];

// const comedyMovies = [
//   { id: 5, title: "Movie 5", poster: movie5 },
//   { id: 6, title: "Movie 6", poster: movie6 },
//   { id: 7, title: "Movie 7", poster: movie7 },
//   { id: 8, title: "Movie 8", poster: movie8 },
// ];



function Home() {


  const [movies,setMovies] = useState([])
  async function fetchmovies() {
    let response = await axios.get("https://omdbapi.com/?apikey=4e9e8ed7&s=series")
    console.log(response);
    setMovies(response.data.Search)
  }

  useEffect(() => {
    fetchmovies();
  }, [])
  
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Navbar */}
      <Navbarcom />

      {/* Hero Section */}
      <HeroSection />

      {/* Movies Section */}
      <div className="container mt-5">
        <h2 className="fw-bold mb-3 text-info">Movies</h2>
        <MovieRow title="Series / Movies" movies={movies} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
