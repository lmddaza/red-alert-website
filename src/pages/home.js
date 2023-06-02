import React from "react";
import NavigationBar from "src/components/top-navbar/index.js";
import MyComponent from "src/components/slider/slider.js";
import Footer from "src/components/footer/footer.js";

const HomePage = () => {
  return (
    <div>
      <NavigationBar className="custom-navbar" />
      <MyComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
