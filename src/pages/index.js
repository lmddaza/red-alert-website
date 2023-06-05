import React from "react";
import { NextSeo } from "next-seo";
import NavigationBar from "src/components/top-navbar/index.js";
import MyComponent from "src/components/slider/slider.js";
import ImageContainers from "src/components/home/home.js";
import Footer from "src/components/footer/footer.js";
import Articles from "src/components/home/yt.js";

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
    <>
      <NextSeo {...SEO} />
      <div className="page-container">
        <NavigationBar className="custom-navbar" />
        <MyComponent />

        <ImageContainers />
        <Articles />

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
