import React from "react";
import NavigationBar from "src/components/top-navbar/index.js";
import MyComponent from "src/components/slider/slider.js";
import ImageContainers from "src/components/home/home.js";
import Footer from "src/components/footer/footer.js";
import Articles from "src/components/home/yt.js";

const HomePage = () => {
  return (
    <div className="page-container">
      <NavigationBar className="custom-navbar" />
      <MyComponent />

      <ImageContainers />
      <Articles />

      <Footer />
    </div>
  );
};

export default HomePage;
