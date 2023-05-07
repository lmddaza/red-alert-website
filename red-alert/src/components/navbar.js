import Image from "next/image";
import { Formik, Field, Form } from "formik";

const TopNavbar2 = () => {
  const topNav2links = [
    { link: "https://www.canva.com/", title: "Home" },
    { link: "https://www.canva.com/", title: "Data" },
    { link: "https://www.canva.com/", title: "BFAR" },
    { link: "https://www.canva.com/", title: "Partnership" },
  ];

  return (
    <div className="flex flex-wrap content-center justify-between h-32 px-8 md:justify-center md:h-24 nav2-container md:px-0">
      <div className="flex flex-wrap justify-between w:full md:w-3/4">
        <div className="flex">
          <div>
            <a href="#">
              <Image src="/redalertlogo.png" alt="" height={190} width={100} />
            </a>
          </div>
          <div className="hidden md:flex flex-col flex-wrap content-center pt-2.5 pl-2">
            <div className="font-serif">
              <a href="#">
                <h1 className="font-bold text-red-800 hover:underline">
                  Bureau of Fisheries and Aquatic Resources
                </h1>
              </a>
              <a href="#">
                <h2 className="text-sm font-bold text-slate-600">
                  Red Tide Detection and Monitoring System
                </h2>
              </a>
            </div>
            <div className="flex-wrap content-center h-6 font-bold top-navbar2-links mt-3.5 ">
              <ul className="flex inline font-serif text-sm text-red-800 navlink">
                {topNav2links.map((topNav2link, index) => (
                  <li key={index}>
                    <a href={topNav2link.link} className="mr-4">
                      {topNav2link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button disabled className="flex mt-3 text-white md:hidden button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default TopNavbar2;
