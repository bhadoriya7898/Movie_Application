import React from "react";
import SearchBar from "./SearchBar";
import heroVideo from "../assets/movies/lionking.mp4";

function HeroSection() {
  return (
    <div
      className="text-white position-relative"
      style={{
        height: "100vh",   // full screen height
        width: "100vw",    // full screen width
        marginTop: "56px", // navbar ke niche
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // pura fill karega
          zIndex: 1,
        }}
      />

      {/* Overlay (dark effect) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 2,
        }}
      />

      {/* Text + SearchBar */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center h-100"
        style={{ position: "relative", zIndex: 3 }}
      >
        <h1 className="fw-bold">Welcome.</h1>
        <h4 className="mb-4">
          Millions of movies, TV shows and people to discover. Explore now.
        </h4>

        <SearchBar />
      </div>
    </div>
  );
}

export default HeroSection;
