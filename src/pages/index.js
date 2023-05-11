import TopNavbar from "src/components/top-navbar/index.js";
import TopNavbar2 from "src/components/top-navbar-2";
import Slider from "src/components/slider/index.js";
import IconLinks from "@/components/iconss/icons";
import Body from "src/components/body-announcement-news/body.js";
import SocialMedia from "@/components/socialMedia/socialmedia";
import Footer from "src/components/pup-home-footer/index.js";
import Footer2 from "src/components/pup-home-footer2/index.js";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";

import Modal from "src/components/modal/modal.js";

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevClick = () => {
    setSlideIndex((slideIndex - 1 + pupNews.length) % pupNews.length);
  };

  const handleNextClick = () => {
    setSlideIndex((slideIndex + 1) % pupNews.length);
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      setShowButton(yOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col flex-wrap justify-center">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="navbar-container">
        <TopNavbar />
        <TopNavbar2 />
      </div>
      <Slider />
      <button className="messenger">
        <svg
          className="w-6 h-6"
          fill="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
        </svg>
      </button>
      <button
        className={`back-to-top hover:bg-yellow-400 ${
          showButton ? "block" : "hidden"
        }`}
        onClick={handleClick}
      >
        <i className="fa fa-angle-up"></i>
      </button>

      <IconLinks />
      <Body />
      <SocialMedia />
      <Modal />
      <Footer />
      <Footer2 />
    </div>
  );
};

export default Home;
