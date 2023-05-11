import Image from "next/image";
import { Formik, Field, Form } from "formik";
export const topNav2links = [
  {
    link: "#",
    title: "ABOUT PUP",
    subLinks: [
      { subLinkTitle: "University Profile", url: "#" },
      { subLinkTitle: "Vision and Mission", url: "#" },
      { subLinkTitle: "History", url: "#" },
      { subLinkTitle: "Logo and Symbols", url: "#" },
      { subLinkTitle: "Hymn", url: "#" },
      { subLinkTitle: "Annual Reports", url: "#" },
      { subLinkTitle: "Awards and Recognitions", url: "#" },
      { subLinkTitle: "Contact us", url: "/internationalaffairs" },
      { subLinkTitle: "Maps", url: "#" },
      { subLinkTitle: "University Code", url: "#" },
      { subLinkTitle: "Institutional Development Plan", url: "#" },
      { subLinkTitle: "Quality Policy Statement", url: "#" },
      { subLinkTitle: "Branches and Satellite Campuses", url: "#" },
      { subLinkTitle: "Memorandum Orders", url: "#" },
      { subLinkTitle: "Strategic Performance Management System", url: "#" },
    ],
  },
  {
    link: "#",
    title: "ACADEMIC",
    subLinks: [
      { subLinkTitle: "Academic Programs", url: "#" },
      { subLinkTitle: "Open University System", url: "#" },
      { subLinkTitle: "Graduate Studies", url: "#" },
      { subLinkTitle: "Colleges", url: "#" },
      { subLinkTitle: "Institute of Technology", url: "#" },
      { subLinkTitle: "Senior High School", url: "#" },
      { subLinkTitle: "Laboratory High SChool", url: "#" },
      { subLinkTitle: "Library Services", url: "#" },
      { subLinkTitle: "Online Public Access Catalog", url: "#" },
      { subLinkTitle: "Quality Assurance", url: "#" },
      { subLinkTitle: "Teaching and Learning Development", url: "#" },
      { subLinkTitle: "PUP eMabini Learning Portal", url: "#" },
      { subLinkTitle: "OVPAA", url: "#" },
    ],
  },
  {
    link: "#",
    title: "STUDENTS",
    subLinks: [
      { subLinkTitle: "Student Services", url: "#" },
      { subLinkTitle: "Student Organizations", url: "#" },
      { subLinkTitle: "Student Publications", url: "#" },
      { subLinkTitle: "Student Council", url: "#" },
      { subLinkTitle: "Student Handbook", url: "#" },
      { subLinkTitle: "University Registrar", url: "#" },
      { subLinkTitle: "PUP Student Information System", url: "#" },
      { subLinkTitle: "PUP Online Document Request System", url: "#" },
      { subLinkTitle: "PUP Bookstore", url: "#" },
      { subLinkTitle: "Downloadable Forms", url: "#" },
      { subLinkTitle: "Online Job Postings", url: "#" },
    ],
  },
  {
    link: "#",
    title: "RESEARCH",
    subLinks: [
      { subLinkTitle: "Researchers", url: "#" },
      { subLinkTitle: "Extensions", url: "#" },
      { subLinkTitle: "Institutional Planning", url: "#" },
      { subLinkTitle: "Intellectual Property", url: "#" },
      { subLinkTitle: "Research Publications", url: "#" },
      { subLinkTitle: "Science and Technology", url: "#" },
      { subLinkTitle: "Cultural and Language", url: "#" },
      { subLinkTitle: "Strategic Foresight and Innovation", url: "#" },
      { subLinkTitle: "Human and Social Development", url: "#" },
      { subLinkTitle: "Gender and Development", url: "#" },
      { subLinkTitle: "PUP Online Journal System", url: "#" },
      { subLinkTitle: "PUP Online Survey for Faculty Evaluation", url: "#" },
      { subLinkTitle: "University Thesis and Dissertion Manual", url: "#" },
    ],
  },
];

const TopNavbar2 = () => {
  return (
    <div className="flex flex-wrap content-center justify-between h-32 px-8 md:justify-center md:h-24 nav2-container md:px-0">
      <div className="flex flex-wrap justify-between pl-0 nav2 md:pl-5">
        <div className="flex">
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
              <ul className="flex inline font-serif text-sm text-red-800 pup-links">
                {topNav2links.map((topNav2link, index) => (
                  <li key={index} className="h-7">
                    <a href={topNav2link.link}>{topNav2link.title}</a>
                    <ul className="dropdown-container">
                      {topNav2link.subLinks.map((subLink, subIndex) => (
                        <a key={subIndex} href={subLink.url}>
                          <li>{subLink.subLinkTitle}</li>
                        </a>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <Formik>
            <Form>
              <div className="flex hidden h-6 rounded-sm md:flex">
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
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <button disabled className="flex mt-3 text-white md:hidden mobile-menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default TopNavbar2;
