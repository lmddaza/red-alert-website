import React from "react";
import NavigationBar from "src/components/top-navbar/index.js";
import Footer from "src/components/footer/footer.js";
import ImageContainers from "src/components/red-alert/yt.js";
import Tubo from "src/components/red-alert/hardware.js";

const redalert = () => {
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
    <div style={{ backgroundColor: "white" }}>
      <NavigationBar className="custom-navbar" />
      <br></br>
      <Tubo />
      <ImageContainers />

      <Footer />
    </div>
  );
};

export default redalert;
