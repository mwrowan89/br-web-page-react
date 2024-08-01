import React from "react";
import { useRef, useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import "../css/Designs.css";

import image1 from "../assets/images/Wine Cellar/IMG_1201.png";
import image2 from "../assets/images/Wine Cellar/IMG_1202.png";
import image3 from "../assets/images/Wine Cellar/Wine Cellar 1.jpg";
import image4 from "../assets/images/Wine Cellar/Wine Cellar 2.jpg";
import image5 from "../assets/images/Wine Cellar/IMG_7321.png";
import video1 from "../assets/images/Wine Cellar/IMG_9383.MOV";

const DesignsPage = () => {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div>
      <Header />
      <Nav />
      <div className="design-page">
        <div className="design-box-one">
          <h1 id="design-page-title">Custom Designs</h1>
          <p id="design-page-desc">
            In addition to our woodworking expertise, BR Fabrication also
            specializes in creating custom computer designs tailored to the
            specific requirements and preferences of our clients. Whether it’s
            building high-performance workstations for professional use or
            personalized gaming setups, we ensure that each design meets the
            unique specifications of our customers. Our attention to detail and
            commitment to quality extend to this area, resulting in bespoke
            systems that blend functionality with aesthetic appeal. This service
            underscores our dedication to delivering personalized solutions that
            cater to a wide range of needs and tastes.
          </p>
        </div>
        <div className="design-box-two">
          <h1 id="wine-cellar-title">800 Bottle Wine Cooler</h1>
          <div className="box-two-images-top">
            <img id="sketch-up-wine" src={image4} alt="wine celler" />
            <img id="sketch-up-wine" src={image3} alt="wine celler" />
          </div>
          <div className="wine-cellar-description">
            <p>
              This wine cooler is located in a restaurant in Chicago, Il and
              features hundreds of bottles of wine for their customers. The
              custom wine cooler features built in cabinetry for the cooling
              units as well as a solid Oak floor for looks and durability
            </p>
          </div>
          <div className="box-two-images-bottom">
            <img id="finished-photo" src={image2} alt="wine celler" />
            <video
              id="wine-cellar-video"
              ref={videoRef}
              muted
              onClick={handleVideoClick}
              style={{ cursor: "pointer" }}
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img id="finished-photo" src={image1} alt="wine celler" />
            <img id="finished-photo" src={image5} alt="wine celler" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignsPage;
