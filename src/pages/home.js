import React from "react";
import NavigationBar from "src/components/top-navbar/index.js";
import MyComponent from "src/components/slider/slider.js";

import Footer from "src/components/footer/footer.js";

import AnnouncementBulletin from "src/components/home/announcement.js";
import Summary from "src/components/home/summary.js";

import LineChart from "src/components/home/linechart.js";
const HomePage = () => {
  return (
    <div className="page-container">
      <NavigationBar className="custom-navbar" />
      <MyComponent />
      <AnnouncementBulletin />

      <LineChart />
      <Summary />
      <br></br>

      <Footer />
    </div>
  );
};

export default HomePage;
