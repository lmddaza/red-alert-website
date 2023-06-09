import React from "react";
import NavigationBar from "src/components/top-navbar/index.js";

import PartnershipPage from "src/components/Partnership/partnership.js";

import Footer from "src/components/footer/footer.js";

const Partners = () => {
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
      <PartnershipPage />

      <Footer />
    </div>
  );
};
export default Partners;
