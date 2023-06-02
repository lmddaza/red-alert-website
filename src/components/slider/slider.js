import React from "react";
import Image from "next/image";
import Link from "next/link";

const MyComponent = () => {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <Image
          src="/redalert.png"
          alt="Image Description"
          width={1200}
          height={300}
          className="image"
        />
        <Link href="/redalert">
          <button className="learn-more-button">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default MyComponent;
