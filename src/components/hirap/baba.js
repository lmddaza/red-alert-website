import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Hehe = () => {
  const announcements = [
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
  const images = [
    { src: "/img1.jpg" },
    { src: "/img2.jpg" },
    { src: "/img3.jpg" },
    { src: "/img4.jpg" },
    { src: "/img5.jpg" },
  ];
  const pupNews = [
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
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="flex flex-wrap content-center justify-center h-auto mt-14">
      <div className="flex flex-wrap w-3/4 h-auto content-container-container">
        <div className="w-2/5 content-container">
          <div className="title">
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
        <div className="w-2/5 content-container">
          <div className="title">
            <h1 className="mb-2 font-bold text-red-800">
              Latest News from the University
            </h1>
            <div className="slider-buttons"></div>
          </div>
          <div>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              onChange={(index) => setSlideIndex(index)}
              showIndicators={false}
            >
              {pupNews.map((news, index) => (
                <div
                  key={index}
                  className="flex flex-col flex-wrap justify-start"
                >
                  <div key={index}>
                    <img
                      src={news.src}
                      alt={`Image ${index}`}
                      className="news-img"
                    />
                  </div>
                  <div className="flex flex-col flex-wrap hover:underline">
                    <a href={news.link} className="font-semibold">
                      {news.title}
                    </a>
                    <p>{news.date}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center w-1/5 content-container">
          {images.map((image, index) => (
            <div key={index} className="img-container">
              <a href="#" className="image-link">
                <div className="responsive-image">
                  <Image
                    src={image.src}
                    alt=""
                    layout="responsive"
                    width={30}
                    height={50}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hehe;
