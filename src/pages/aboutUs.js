import React from "react";
import NavigationBar from "src/components/top-navbar/index.js";

import Footer from "src/components/footer/footer.js";

const HomePage = () => {
  return (
    <div>
      <NavigationBar className="custom-navbar" />
      <h1> this is about us </h1>

      <Footer />
    </div>
  );
};

export default HomePage;
