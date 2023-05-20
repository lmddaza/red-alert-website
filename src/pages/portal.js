import React from "react";
import NavigationBar from "src/components/top-navbar/index.js";
import MyComponent from "src/components/slider/slider.js";
import TwoColumnLayout from "src/components/interactive-map/map.js";
import Footer from "src/components/footer/footer.js";
import Table from "src/components/portal/portal.js";

const HomePage = () => {
  return (
    <div>
      <NavigationBar className="custom-navbar" />
      <Table />

      <Footer />
    </div>
  );
};

export default HomePage;
