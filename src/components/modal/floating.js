import { useState } from "react";
import Modal from "src/components/modal/modal.js";
import Image from "next/image";
export const Logos = [
  { src: "/transparencyseal.png", width: "100", height: "100" },
  { src: "/transparencyseal.png", width: "100", height: "100" },
  { src: "/transparencyseal.png", width: "116", height: "100" },
];
export const ModalLinks = [
  { link: "#", title: "Applicant", d: "fa-pencil-square" },
  { link: "#", title: "Student", d: "fa-book" },
  { link: "#", title: "Faculty Member or Employee", d: "fa-users" },
  { link: "#", title: "Researcher or Extensionist", d: "fa-flask" },
  { link: "#", title: "Alumni", d: "fa-graduation-cap" },
  { link: "#", title: "Campus Life", d: "fa-institution" },
  { link: "#", title: "Institutional Accreditation", d: "fa-edit" },
  { link: "#", title: "View Homepage", d: "fa-align-justify" },
];

const FloatingButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-blue-600"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="w-full pt-2">
            <button className="btnCancel" onClick={() => setIsModalOpen(false)}>
              +
            </button>
          </div>
          <div className="flex flex-col w-full text-center">
            <h1 className="font-serif text-4xl font-semibold text-red-900 mb-7 md:text-xl">
              <span>WELCOME TO THE</span>
              <br />
              POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
            </h1>
            <p className="mt-4 text-3xl mb-7 md:text-lg md:mt-0">
              Please click/tap the appropriate link to help you in your
              navigation of our services
            </p>
          </div>
          <div className="flex flex-col flex-wrap content-center w-full md:flex-row">
            <div className="modal-items-container">
              <div className="flex justify-center w-full py-6 logo-container">
                <Image src="/puplogo.png" alt="" width={200} height={200} />
              </div>
              <div className="flex justify-center w-full logos-container gap-x-1">
                {Logos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt=""
                    width={logo.width}
                    height={logo.height}
                  />
                ))}
              </div>
            </div>
            <div className="modal-items-container gap-y-2 md:gap-y-1">
              {ModalLinks.map((modalLink, index) => (
                <a
                  key={index}
                  href={modalLink.link}
                  className="modal-links-container w-full bg-red-800 hover:bg-red-900 py-2 text-white text-center md:py-4 md:text-xl"
                >
                  <i className={`fa ${modalLink.d} mr-3`}></i>
                  {modalLink.title}
                </a>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default FloatingButton;
