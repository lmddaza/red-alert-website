import React from "react";
import Image from "next/image";

const MyComponent = () => {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <Image
          src="/bg.png"
          alt="Image Description"
          width={1200}
          height={300}
          className="image"
        />
        <button className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
};

export default MyComponent;
