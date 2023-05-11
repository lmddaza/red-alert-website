import TopNavbar from "src/components/top-navbar/index.js";
import TopNavbar2 from "src/components/top-navbar-2";
import Slider from "src/components/slider/index.js";
import SocialMedia from "@/components/socialMedia/socialmedia";
import Footer from "src/components/pup-home-footer/index.js";
import Footer2 from "src/components/pup-home-footer2/index.js";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";

import Modal from "src/components/modal/modal.js";
export const announcements = [
  {
    title:
      "Administrative Applicants for Selection/Promotion: List of All Applicants (First and Second Level) April 2023",
    date: "April 20, 2023",
    link: "#",
  },
  {
    title:
      "Advisory on the Submission of Online Application for Graduation and Other Scheduled Activities for Year-End Graduation (Second Semester) A.Y. 2022-2023",
    date: "April 10, 2023",
    link: "#",
  },
  {
    title: "PUP ICT Office is looking for Computer Programmers (J.O.)",
    date: "March 02, 2023",
    link: "#",
  },
  {
    title:
      "List of Qualified Applicants for Promotion (First and Second Level Positions) Batches 1, 2, and 3",
    date: "February 07, 2023",
    link: "#",
  },
  {
    title:
      "List of Eligible Applicants for Promotion (First and Second Level Positions)",
    date: "February 01, 2023",
    link: "#",
  },
  {
    title:
      "Advisory to All Graduates of the PUP Main Campus (Sta. Mesa, Manila)",
    date: "September 16, 2022",
    link: "#",
  },
  {
    title:
      "Internal Guidelines for Opt-Out and Voluntary Contribution of Students under Republic Act 10931",
    date: "April 04, 2022",
    link: "#",
  },
];

export const images = [
  { src: "/img1.jpg" },
  { src: "/img2.jpg" },
  { src: "/img3.jpg" },
  { src: "/img4.jpg" },
  { src: "/img5.jpg" },
];

export const pupNews = [
  {
    src: "/news1.jpg",
    title: "PHIVOLCS commits to training PUP on REDAS",
    link: "#",
    date: "April 26, 2023",
  },
  {
    src: "/news2.jpg",
    title: "Earth Day 2023 celebrated through the arts",
    link: "#",
    date: "April 26, 2023",
  },
  {
    src: "/news3.jpg",
    title:
      "DBM Sec. Pangandaman and DepEd Usec Jumamil-Mercado receives Tanglaw ng Bayan Award",
    link: "",
    date: "April 25, 2023",
  },
];

const Body = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevClick = () => {
    setSlideIndex((slideIndex - 1 + pupNews.length) % pupNews.length);
  };

  const handleNextClick = () => {
    setSlideIndex((slideIndex + 1) % pupNews.length);
  };

  //

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
      <div className="navbar-container"></div>
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
      <div className="flex flex-wrap content-center justify-center h-auto mt-14 ">
        <div className="flex flex-wrap w-3/4 h-auto content-container-container">
          <div className="w-full content-container md:w-2/5">
            <div className="mb-4 title">
              <h1 className="mb-2 font-bold text-red-800">
                Announcements and Advisories
              </h1>
            </div>
            <div className="flex flex-wrap overflow-auto overflow-x-hidden content">
              {announcements.map((announcement, index) => (
                <div key={index} className="announcements">
                  <a href={announcement.link}>{announcement.title}</a>
                  <p>Posted: {announcement.date}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full content-container md:w-2/5 md:h-96 news-slider">
            <div className="title">
              <h1 className="mb-2 font-bold text-red-800">
                Latest News from the University
              </h1>
              <div className="slider-buttons-container">
                <button onClick={handlePrevClick} className="news-slider-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button onClick={handleNextClick} className="news-slider-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="pt-5 pr-5 ehe">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                selectedItem={slideIndex}
                onChange={(index) => setSlideIndex(index)}
                showIndicators={false}
                showArrows={false}
                autoPlay
                className="news-slider"
              >
                {pupNews.map((news, index) => (
                  <div key={index} className="flex flex-col flex-wrap">
                    <div>
                      <img
                        src={news.src}
                        alt={`Image ${index}`}
                        className="news-img"
                      />
                    </div>
                    <div className="flex flex-col pt-5 pl-2 hover:underline">
                      <a
                        href={news.link}
                        className="h-auto font-semibold text-left"
                      >
                        {news.title}
                      </a>
                      <p className="text-left">{news.date}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="flex flex-col flex-wrap content-center justify-center w-full content-container md:w-1/5">
            {images.map((image, index) => (
              <a
                href="#"
                key={index}
                className="flex flex-wrap justify-center mb-2 img-container"
              >
                <Image src={image.src} alt="" width={200} height={150} />
              </a>
            ))}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default Body;
