import React from "react";
import NavigationBar from "src/components/top-navbar/index.js";
import Footer from "src/components/footer/footer.js";
import Table from "src/components/portal/portal.js";

const HomePage = () => {
  return (
    <div>
      <NavigationBar className="custom-navbar" />
      <Table />

      <Footer />
    </div>
  );
};

export default HomePage;
