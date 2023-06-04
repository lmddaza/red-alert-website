import React from "react";
import NavigationBar from "src/components/top-navbar/index.js";

import MyComponent from "src/components/slider/slider.js";
import RiskProbability from "src/components/portal/legend.js";

import Footer from "src/components/footer/footer.js";
import Table from "src/components/portal/portal.js";
import IndexPage from "src/components/portal/data-readings.js";

const HomePage = () => {
  return (
    <div>
      <NavigationBar className="custom-navbar" />
      <Table />
      <RiskProbability />
      <IndexPage />
      <br></br>
      <Footer />
    </div>
  );
};

export default HomePage;
