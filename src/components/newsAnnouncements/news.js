import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const News = () => {
  return (
    <div className="flex flex-wrap content-center justify-center h-auto mt-14">
      <div className="w-2/5 content-container">
        <div className="title">
          <h1 className="mb-2 font-bold text-red-800">
            Latest News from the University
          </h1>
          <div className="slider-buttons"></div>
        </div>
        <div>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            showIndicators={false}
          >
            {/* Rest of the code... */}
          </Carousel>
        </div>
      </div>

      {/* Rest of the code... */}
    </div>
  );
};

export default News;
