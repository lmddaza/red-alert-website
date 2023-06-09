import React from "react";

const Design = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginLeft: "300px" }}>
      <div style={{ flex: 1, padding: "20px" }}>
        <h1
          style={{
            fontSize: "24px",
            marginBottom: "10px",
            borderBottom: "1px solid #333",
            display: "inline-block",
          }}
        >
          Red Alert Overview
        </h1>

        <p style={{ fontSize: "16px", width: "500px" }}>
          Welcome to our homepage! This page contains the latest announcements
          and the summary of the Red Alert device.
        </p>
      </div>
      <div style={{ flex: 1, marginRight: "100px" }}>
        <img
          src="/Announcement.png" // Replace with the actual image path
          alt="Image"
          style={{ width: "50%", height: "60%" }}
        />
      </div>
      <br></br>
    </div>
  );
};

export default Design;
