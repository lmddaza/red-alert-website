import React from "react";
import NavigationBar from "src/components/top-navbar/index.js";

import MyComponent from "src/components/slider/slider.js";
import RiskProbability from "src/components/portal/legend.js";

import Footer from "src/components/footer/footer.js";
import Table from "src/components/portal/portal.js";
import IndexPage from "src/components/portal/data-readings.js";
import MobileReadings from "src/components/portal/mobileReadings.js";

const HomePage = () => {
  const SEO = {
    title: "Red Alert",
    description: "Your website description",
    openGraph: {
      title: "Your Website Title",
      description: "Your website description",
      type: "website",
      url: "https://www.yourwebsite.com",
      site_name: "Your Website Name",
    },
    // You can add more SEO configurations as needed
  };
  return (
    <div>
      <NavigationBar className="custom-navbar" />
      <Table />
      <RiskProbability />
      <IndexPage />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <MobileReadings />
      <br></br>
      <Footer />
    </div>
  );
};

export default HomePage;
