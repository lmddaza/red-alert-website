import React from "react";

const ImageContainers = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "300px",
        marginBottom: "20px", // Added marginBottom for spacing
      }}
    >
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: "24px",
            marginBottom: "10px",
            borderBottom: "1px solid #333",
            display: "inline-block",
          }}
        >
          How to use the Stationary Device?
        </h1>

        <p style={{ fontSize: "16px", width: "500px" }}>
          Welcome to our homepage! This page contains the latest announcements
          and the summary of the Red Alert device.
        </p>
      </div>
      <iframe
        src="https://www.youtube.com/embed/1fog3j9IaiA"
        title="How does Red Alert works?"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          maxWidth: "100%",
          height: "400px",
          width: "500px",
          marginRight: " 200px",
          marginLeft: " -200px",
          paddingLeft: "-200px",
        }}
      ></iframe>
      <br />
    </div>
  );
};

export default ImageContainers;
