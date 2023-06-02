import React from "react";
import Link from "next/link";

const ImageContainers = () => {
  return (
    <div>
      <div className="home-container">
        <br></br>
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

      <br></br>
      <br></br>
    </div>
  );
};

export default ImageContainers;
