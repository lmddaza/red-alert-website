import React from "react";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageContainers = () => {
  return (
    <div className="image-containers">
      <div className="yt-container">
        <iframe
          className="yt"
          src="https://www.youtube.com/embed/1fog3j9IaiA"
          title="How does Red Alert works?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="article-container">
        <h2>BFAR Articles</h2>
        <hr className="line" /> {/* Add the <hr> element for the line */}
        <Carousel showThumbs={false} autoPlay interval={3000}>
          <div>
            <img
              className="article-image"
              src="/partnership.jpg"
              alt="Article 1"
            />
          </div>
          <div>
            <img
              className="article-image"
              src="/partnership.jpg"
              alt="Article 2"
            />
          </div>
          <div>
            <img className="article-image" src="/senspak.png" alt="Article 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageContainers;
