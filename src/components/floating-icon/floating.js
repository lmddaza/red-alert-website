import React, { useState } from "react";
import Image from "next/image";

import {
  FaDesktop,
  FaUserGraduate,
  FaUser,
  FaFlask,
  FaCertificate,
  FaChalkboardTeacher,
  FaBriefcase,
  FaBook,
  FaGraduationCap,
  FaUniversity,
  FaHome,
} from "react-icons/fa";

function FloatingButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleClose = () => {
    setIsClicked(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="floatcontainer">
      <button
        className="float"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FaDesktop size={24} />
        {isHovered && <span>Show services menu</span>}
      </button>
      {isClicked && (
        <div className="floatoverlay">
          <div className="floatcontent">
            <div className="floatheader">
              <div className="floatlogo">
                <Image
                  src="/puplogo.png"
                  alt="pupLogo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="floatlinks">
                <a href="#">
                  <span>
                    <FaUser size={16} />
                  </span>
                  <span>Applicant</span>
                </a>
                <a href="#">
                  <span>
                    <FaGraduationCap size={16} />
                  </span>
                  <span>Student</span>
                </a>
                <a href="#">
                  <span>
                    <FaChalkboardTeacher size={16} />
                  </span>
                  <span>Faculty Member or Employee</span>
                </a>
                <a href="#">
                  <span>
                    <FaFlask size={16} />
                  </span>
                  <span>Researcher or Extensionist</span>
                </a>
                <a href="#">
                  <span>
                    <FaUserGraduate size={16} />
                  </span>
                  <span>Alumni</span>
                </a>
                <a href="#">
                  <span>
                    <FaUniversity size={16} />
                  </span>
                  <span>Campus Life</span>
                </a>
                <a href="#">
                  <span>
                    <FaCertificate size={16} />
                  </span>
                  <span>Institutional Accreditation</span>
                </a>
                <a href="#">
                  <span>
                    <FaHome size={16} />
                  </span>
                  <span>View Homepage</span>
                </a>
              </div>
              <button className="close" onClick={handleClose}>
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatingButton;
