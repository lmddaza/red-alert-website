import React from "react";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Tubo = () => {
  return (
    <div>
      <div
        className="title-container"
        style={{
          textAlign: "center",
          fontSize: "24px",
          marginBottom: "10px",
        }}
      >
        <h2>PROTOTYPE DESIGN </h2>
        <hr
          style={{
            borderTop: "1px solid #000",
            width: "50%",
            margin: "auto",
          }}
        />
        <p style={{ marginTop: "10px", fontSize: "16px" }}>
          Description goes here
        </p>
      </div>
      <div className="home-container">
        <br />
        <div className="home-imageContainer">
          <img src="/diagram1.png" alt="Image 1" className="home-image" />
        </div>
        <div className="home-imageContainer">
          <img src="/diagram2.png" alt="Image 2" className="home-image" />
        </div>
        <div className="home-imageContainer">
          <img src="/diagram3.png" alt="Image 3" className="home-image" />
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Tubo;
