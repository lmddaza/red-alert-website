import React from "react";
import NavigationBar from "src/components/top-navbar/index.js";

import PartnershipPage from "src/components/Partnership/partnership.js";

import Footer from "src/components/footer/footer.js";

const Partners = () => {
  return (
    <div>
      <NavigationBar className="custom-navbar" />
      <PartnershipPage />

      <Footer />
    </div>
  );
};

export default Partners;
