import React from "react";
import NavigationBar from "src/components/top-navbar/index.js";

import Footer from "src/components/footer/footer.js";

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
      <h1> this is about us </h1>

      <Footer />
    </div>
  );
};

export default HomePage;
