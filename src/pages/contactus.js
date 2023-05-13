import ContactUs from "@/components/contactUs/contactUs";
import React, { useEffect, useState } from "react";

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
import { NextSeo } from "next-seo";

import Modal from "src/components/modal/modal.js";

const InternationalAffairs = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center">
      <NextSeo
        title="Polytechnic University of the Philippines | Contact Us"
        description="Contact Us"
        // Add more SEO configurations here
      />

      <div className="navbar-container">
        <TopNavbar />
        <TopNavbar2 />
      </div>
      <ContactUs />

      <Footer />
      <Footer2 />
      <Modal />
    </div>
  );
};

export default InternationalAffairs;
