import React from "react";
import NavigationBar from "src/components/top-navbar/index.js";
import MyComponent from "src/components/slider/slider.js";
import ImageContainers from "src/components/home/home.js";

import Footer from "src/components/footer/footer.js";

const HomePage = () => {
  return (
    <div>
      <NavigationBar className="custom-navbar" />
      <MyComponent />
      <ImageContainers />

      <Footer />
    </div>
  );
};

export default HomePage;
