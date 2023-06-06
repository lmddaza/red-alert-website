import React from "react";
import NavigationBar from "src/components/top-navbar/index.js";
import Footer from "src/components/footer/footer.js";
import ImageContainers from "src/components/home/home.js";
import Articles from "src/components/home/yt.js";
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
    <div className="full-page">
      <NavigationBar className="custom-navbar" />
      <br></br>
      <ImageContainers />
      <Articles />

      <Footer />
    </div>
  );
};

export default redalert;
