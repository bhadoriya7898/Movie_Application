import React from "react";
import SearchBar from "./SearchBar";
import heroImg from "../assets/movies/Hero.jpg";

function HeroSection() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center text-white"
   style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "75vh",
        marginTop: "56px", // navbar ke niche se start kare
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "2rem",
        position: "relative",
      }}
    >
      {/* Welcome Text */}
      <h1 className="fw-bold">Welcome.</h1>
      <h4 className="mb-4">
        Millions of movies, TV shows and people to discover. Explore now.
      </h4>

      {/* Search Bar Component */}
      <SearchBar />
    </div>
  );
}

export default HeroSection;
