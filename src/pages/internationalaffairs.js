import React, { useEffect, useState } from "react";
import Articles from "src/components/internationalAffairs/internationalAffairs.js";
import TopNavbar from "@/components/top-navbar";
import TopNavbar2 from "@/components/top-navbar-2";
import ContactUs from "@/components/contactUs/contactUs";
import Footer from "@/components/pup-home-footer";
import Footer2 from "@/components/pup-home-footer2";
import FloatingButton from "@/components/floating-icon/floating";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await fetch(
        "https://api.ahglab.com/api:W7k9W8HQ/articles"
      );
      const data = await response.json();
      setArticles(data);
    }
    fetchArticles();
  }, []);

  return (
    <div className="App">
      <TopNavbar />
      <TopNavbar2 />

      <Articles articles={articles} />
      <Footer />
      <Footer2 />
      <FloatingButton />
    </div>
  );
}

export default App;
