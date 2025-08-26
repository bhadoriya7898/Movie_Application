import React from "react";
import HeroSection from "./HeroSection";
import Navbarcom from "./Navbarcom";
import MovieRow from "./MovieRow";
import Footer from "./Footers";

// Dummy movies (local images from src/assets/movies)
const actionMovies = [
  { title: "Movie 1", poster: "/src/assets/movies/movie1.jpg" },
  { title: "Movie 2", poster: "/src/assets/movies/movie2.jpg" },
  { title: "Movie 3", poster: "/src/assets/movies/movie3.jpg" },
  { title: "Movie 4", poster: "/src/assets/movies/movie4.jpg" },
];

const comedyMovies = [
  { title: "Movie 5", poster: "/src/assets/movies/movie5.jpg" },
  { title: "Movie 6", poster: "/src/assets/movies/movie6.jpg" },
  { title: "Movie 7", poster: "/src/assets/movies/movie7.jpg" },
  { title: "Movie 8", poster: "/src/assets/movies/movie8.jpg" },
];

function Home() {
  return (
    <div className="bg-dark min-vh-100 text-white">
      {/* Navbar */}
      <Navbarcom />

      {/* Hero Section */}
      <HeroSection />

      {/* Movies Section */}
      <div className="container mt-5">
        <MovieRow title="Action Movies" movies={actionMovies} />
        <MovieRow title="Comedy Movies" movies={comedyMovies} />
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Home;

