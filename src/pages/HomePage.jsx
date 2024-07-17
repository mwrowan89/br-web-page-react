import React from "react";
import "../css/Home.css";
import Nav from "../components/Nav";
import PhotoSlide from "../components/PhotoSlide";
import image1 from "../assets/images/IMG_1780.JPG";

export default function HomePage() {
  return (
    <>
      <Nav />
      <div className="home-page-background">
        <img
          id="home-page-background-image"
          src={image1}
          alt="Bakan Restaurant Table"
        />
      </div>
      <div className="home-container">
        <PhotoSlide />
        <div className="description-box">
          <h1>BR Fab</h1>
        </div>
      </div>
    </>
  );
}
