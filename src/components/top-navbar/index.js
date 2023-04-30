import Image from "next/image";
import { useState, useEffect } from "react";

const TopNavbar = () => {
  const topNavLinks = [
    { link: "#", title: "Home", class: "" },
    { link: "#", title: "Good Governance", class: "hidden md:flex" },
    { link: "#", title: "Transparency", class: "hidden md:flex" },
    { link: "#", title: "International Affairs", class: "hidden lg:flex" },
    { link: "#", title: "Bid Notices and Invitation", class: "hidden md:flex" },
  ];

  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 768); // Adjust the breakpoint according to your needs
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-wrap content-center justify-center border-white h-10 nav-container border-b-[.5px]">
      <div className="flex flex-wrap content-center justify-center w-3/4 lg:justify-between h-9 nav">
        <div className="flex">
          <div className="flex flex-wrap content-center h-10 top-navbar-links">
            <ul className="flex inline text-sm">
              <li className="justify-center w-16">
                <a href="#">
                  <Image src="/govph.png" alt="" width={30} height={30} />
                </a>
              </li>
              {isResponsive ? (
                <li>
                  <a href="#" className="hidden">
                    Contact Us
                  </a>
                </li>
              ) : (
                topNavLinks.map((topNavLink, index) => (
                  <li key={index} className={topNavLink.class}>
                    <a href={topNavLink.link}>{topNavLink.title}</a>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        {!isResponsive && (
          <div>
            <div className="flex flex-wrap content-center h-10 text-sm contact hover:bg-red-800 hover:text-white hover:cursor-pointer">
              <a href="#">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavbar;
