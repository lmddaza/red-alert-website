// index.js
import React from "react";

const IndexPage = () => {
  const data = "Sample data";

  return (
    <div className="result-container">
      <br></br>
      <h1>Data Readings:</h1>
      <div className="box">
        <p>{data}</p>
      </div>
    </div>
  );
};

export default IndexPage;
