import React, { useState } from "react";
import Image from "next/image";
import { Formik, Field, Form } from "formik";

const TopNavbar2 = () => {
  const topNav2links = [
    { link: "#", title: "ABOUT PUP" },
    { link: "#", title: "ACADEMIC" },
    { link: "#", title: "STUDENTS" },
    { link: "#", title: "RESEARCH" },
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-wrap content-center justify-center h-24 nav2-container">
      <div className="flex flex-wrap justify-between w-full md:w-3/4">
        <div className="md:hidden">
          <button className="block" onClick={handleMobileMenuToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
        <div className="flex items-center">
          <div>
            <a href="#">
              <Image src="/pup-logo.png" alt="" height={90} width={90} />
            </a>
          </div>
          <div className="hidden md:flex flex-col flex-wrap content-center pt-2.5 pl-2">
            <div className="font-serif">
              <a href="#">
                <h1 className="font-bold text-red-800 hover:underline">
                  POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
                </h1>
              </a>
              <a href="#">
                <h2 className="text-sm font-bold text-slate-600">
                  THE COUNTRYs 1ST POLYTECHNICU
                </h2>
              </a>
            </div>
            <div className="flex-wrap content-center h-6 font-bold top-navbar2-links mt-3.5">
              <ul className="flex inline font-serif text-sm text-red-800">
                {topNav2links.map((topNav2link, index) => (
                  <li key={index}>
                    <a href={topNav2link.link}>{topNav2link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <Formik>
            <Form>
              <div className="flex hidden h-6 rounded-sm lg:flex">
                <Field placeholder="Type keyword here..." className="search" />
                <button
                  disabled
                  className="flex flex-wrap content-center justify-center text-white bg-red-800 rounded-r-sm h-7 w-7"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col w-full mt-2.5 mobile-menu-bar">
          {topNav2links.map((topNav2link, index) => (
            <a
              key={index}
              href={topNav2link.link}
              className="text-red-800 hover:underline text-center my-2"
            >
              {topNav2link.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopNavbar2;
