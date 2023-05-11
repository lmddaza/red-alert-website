import Image from "next/image";
import { useRouter } from "next/router";

const TopNavbar = () => {
  const router = useRouter();

  const topNavLinks = [
    { link: "/puphome", title: "Home", class: "" },
    {
      link: "#",
      title: "Good Governance",
      class: "hidden md:flex",
    },
    {
      link: "#",
      title: "Transparency",
      class: "hidden md:flex",
    },
    {
      link: "/internationalaffairs",
      title: "International Affairs",
      class: "hidden lg:flex",
    },
    {
      link: "#",
      title: "Bid Notices and Invitation",
      class: "hidden md:flex",
    },
  ];

  const handleClick = (e, link) => {
    e.preventDefault();
    router.push(link);
  };

  return (
    <div className="flex flex-wrap content-center justify-center border-white h-20 md:h-10 nav-container border-b-[.5px]">
      <div className="flex flex-wrap content-center justify-center w-3/4 lg:justify-between h-9 nav">
        <div className="flex">
          <div className="flex flex-wrap content-center h-10 top-navbar-links">
            <ul className="flex inline text-3xl md:text-sm">
              <li className="justify-center w-16">
                <a href="#" onClick={(e) => handleClick(e, "/")}>
                  <Image src="/govph.png" alt="" width={30} height={30} />
                </a>
              </li>
              {topNavLinks.map((topNavLink, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={topNavLink.class}
                    onClick={(e) => handleClick(e, topNavLink.link)}
                  >
                    {topNavLink.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div
            className="flex flex-wrap content-center h-10 text-3xl md:text-sm contact hover:bg-red-800 hover:text-white hover:cursor-pointer"
            onClick={(e) => handleClick(e, "/contactus")}
          >
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
