import React, { useEffect, useState } from "react";
import Articles from "src/components/internationalAffairs/internationalAffairs.js";
import { NextSeo } from "next-seo";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link"; // Import Link component
import TopNavbar from "src/components/top-navbar/index.js";
import TopNavbar2 from "src/components/top-navbar-2";
import Slider from "src/components/slider/index.js";
import SocialMedia from "@/components/socialMedia/socialmedia";
import Footer from "src/components/pup-home-footer/index.js";
import Footer2 from "src/components/pup-home-footer2/index.js";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Modal from "src/components/modal/modal.js";

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
      <NextSeo
        title="Polytechnic University of the Philippines | International Affairs Office"
        description="International Affairs Office"
        // Add more SEO configurations here
      />

      <div className="navbar-container">
        <TopNavbar />
        <TopNavbar2 />
      </div>

      <Modal />
      <Articles articles={articles} />
      <Footer />
      <Footer2 />

      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
    </div>
  );
}

export default App;
