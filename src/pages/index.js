import TopNavbar from "@/components/top-navbar";
import TopNavbar2 from "@/components/top-navbar-2";
import Slider from "@/components/slider";
import IconLinks from "@/components/iconss/icons";
import Hehe from "@/components/body-announcement-news/body";
import SocialMedia from "@/components/socialMedia/socialmedia";
import Footer from "@/components/pup-home-footer";
import Footer2 from "@/components/pup-home-footer2";
import Modal from "@/components/modal/modal";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import FloatingButton from "@/components/modal/floating";

const Home = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center">
      <TopNavbar />
      <TopNavbar2 />
      <Slider />

      <IconLinks />
      <Hehe />
      <SocialMedia />
      <Footer />
      <Footer2 />
      <Modal />
      <FloatingButton />
    </div>
  );
};

export default Home;
