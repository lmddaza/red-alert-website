import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="contactus-container">
        <h1 className="contactus-heading">Contact us</h1>
        <p>
          When you contact the University through this Website, your submission
          is reviewed and then routed to the office/department concerned that
          can best attend to your needs. Because of the volume of messages this
          Web site receives we cant guarantee that you will receive a personal
          response, but rest assured that your submission was received,
          reviewed, and forwarded to the concerned department.
        </p>
        <br />
        <p>
          We are committed in listening to you and improving our services based
          upon your wishes. Your suggestion(s) will be reviewed by the
          department that implements those changes.
        </p>
        <p>
          <br />
          Although we are unable to reply individually to each message we
          receive, we appreciate your thoughts and opinions.
        </p>
        <h2 className="contactus-heading">E-mail</h2>
        <h3 className="contactus-head">For general concerns</h3>
        <h4>inquire@pup.edu.ph</h4>
        <br />
        <table className="contactus-table">
          <thead>
            <tr>
              <th>Specific Concerns</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>For PUP iApply or online test/exam registration concerns</td>
              <td>iapply@pup.edu.ph</td>
            </tr>
            <tr>
              <td>For SIS (Students and Faculty Module) concerns</td>
              <td>sisconcerns@pup.edu.ph</td>
            </tr>
            <tr>
              <td>
                Student Records (Transcript of Records, Diploma, Certification)
              </td>
              <td>registrar@pup.edu.ph</td>
            </tr>
            <tr>
              <td>Admission inquiries</td>
              <td>admission.main@pup.edu.ph</td>
            </tr>
            <tr>
              <td>Open University</td>
              <td>ous@pup.edu.ph</td>
            </tr>
            <tr>
              <td>
                If you are experiencing technical problems with the OU eLearning
                Portal
              </td>
              <td>emabini.secretariat@pup.edu.ph</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="contactusContents">
        <h2 className="hello">CONTENTS</h2>
        <ul>
          <li>
            <Link href="#" className="link">
              University Profile
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Vision and Mission
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              History
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Logo and Symbols
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Hymn
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Annual Reports
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Awards and Recognitions
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Contact Information
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Maps
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Board of Regents
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Executive Officials
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Organization Structure
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Institutional Development Plan
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Quality Policy Statement
            </Link>
          </li>
          <li>
            <Link href="/annual-reports" className="link">
              University Calendar
            </Link>
          </li>
        </ul>
      </div>

      <div className="telephone">
        <h1 className="telephone">Postal Mail and Telephone</h1>
        <h2 className="telephone">
          For inquiries regarding student records (transcript, diploma,
          certification):
        </h2>
        <h3 className="telephone">
          Polytechnic University of the Philippines
          <br />
          Office of the University Registrar
          <br />
          Ground Floor South Wing, Main Building
          <br />
          A. Mabini Campus, Anonas Street, Sta. Mesa
          <br />
          Manila, Philippines 1016
          <br />
          (632) 5335-1787 or 5335-1777 local 285
        </h3>
        <h1 className="telephone">For admission inquiries:</h1>
        <h3>
          For inquiries regarding the PUP Branches and Campuses:
          <br />
          Admission Services
          <br />
          Ground Floor East Wing, Main Building
          <br />
          A. Mabini Campus, Anonas Street, Sta. Mesa
          <br />
          Manila, Philippines 1016
          <br />
          (632) 5335-1798 or (632) 5335-1799 (632) 5335-1787 or 5335-1777 local
          287 or 322
        </h3>
        <h1 className="telephone">
          For inquiries regarding the PUP Branches and Campuses:
        </h1>
        <h3>
          Polytechnic University of the Philippines
          <br />
          Office of the Vice President for Branches and Campuses
          <br />
          Second Floor South Wing Executive Offices, Main Building
          <br />
          A. Mabini Campus, Anonas Street, Sta. Mesa
          <br />
          Manila, Philippines 1016
          <br />
          (632) 5310-0418
          <br />
          (632) 5335-1787 or 5335-1777 local 205
        </h3>
        <h1 className="telephone">For PUP Open University inquiries:</h1>
        <h3>
          Polytechnic University of the Philippines
          <br />
          Open University System
          <br />
          Office of the Executive Director
          <br />
          Fourth Floor Ninoy Aquino Library and Learning Resources Center
          <br />
          A. Mabini Campus, Anonas Street, Sta. Mesa
          <br />
          Manila, Philippines 1016
          <br />
          (632) 8713-1505
          <br />
          (632) 5335-1787 or 5335-1777 local 251
        </h3>
        <br></br>
      </div>
    </div>
  );
};

export default ContactUs;
