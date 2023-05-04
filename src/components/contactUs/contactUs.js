import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1 ">
        <div className="contactus-container">
          <h1 className="contactus-heading ">Contact us</h1>
          <p>
            When you contact the University through this Website, your
            submission is reviewed and then routed to the office/department
            concerned that can best attend to your needs. Because of the volume
            of messages this Web site receives we cant guarantee that you will
            receive a personal response, but rest assured that your submission
            was received, reviewed, and forwarded to the concerned department.
          </p>{" "}
          <br></br>
          <p>
            We are committed in listening to you and improving our services
            based upon your wishes. Your suggestion(s) will be reviewed by the
            department that implements those changes.
          </p>
          <p>
            <br></br>
            Although we are unable to reply individually to each message we
            receive, we appreciate your thoughts and opinions.
          </p>
          <h2 className="contactus-heading">
            E-mail <br></br>
          </h2>
          <h3 className="contactus-head">
            For general concerns<br></br>
          </h3>
          <h4> inquire@pup.edu.ph </h4>
          <br></br>
          <table border="1">
            <thead>
              <tr>
                <th>Specific Concerns </th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  For PUP iApply or online test/exam registration concerns{" "}
                </td>
                <td>iapply@pup.edu.ph</td>
              </tr>
              <tr>
                <td>For SIS (Students and Faculty Module) concerns </td>
                <td>sisconcerns@pup.edu.ph</td>
              </tr>
              <tr>
                <td>
                  Student Records (Transcript of Records, Diploma,
                  Certification) registrar@pup.edu.ph
                </td>
                <td>registrar@pup.edu.ph</td>
              </tr>
              <tr>
                <td>Admission inquiries</td>
                <td>dmission.main@pup.edu.ph</td>
              </tr>
              <tr>
                <td>Open University </td>
                <td>ous@pup.edu.ph</td>
              </tr>
              <tr>
                <td>
                  If you are experiencing technical problems with the OU
                  eLearning Portal{" "}
                </td>
                <td>emabini.secretariat@pup.edu.ph</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-span-1 contactusContents">
        <h2 className="hello">CONTENTS</h2>
        <ul>
          <li>
            <Link href="/vision-mission">University Profile</Link>
          </li>
          <li>
            <Link href="/vision-mission">Vision and Mission</Link>
          </li>
          <li>
            <Link href="/history">History</Link>
          </li>
          <li>
            <Link href="/logo-symbols">Logo and Symbols</Link>
          </li>
          <li>
            <Link href="/hymn">Hymn</Link>
          </li>
          <li>
            <Link href="/annual-reports">Annual Reports</Link>
          </li>
          <li>
            <Link href="/vision-mission">Awards and Recognitions</Link>
          </li>
          <li>
            <Link href="/history">Contact Information</Link>
          </li>
          <li>
            <Link href="/logo-symbols">Maps</Link>
          </li>
          <li>
            <Link href="/hymn">Board of Regents</Link>
          </li>
          <li>
            <Link href="/annual-reports">Executive Officials</Link>
          </li>
          <li>
            <Link href="/history">Organization Structure</Link>
          </li>
          <li>
            <Link href="/logo-symbols">Institutional Development Plan</Link>
          </li>
          <li>
            <Link href="/hymn">Quality Policy Statement</Link>
          </li>
          <li>
            <Link href="/annual-reports">University Calendar</Link>
          </li>
        </ul>
      </div>
      <div className="telephone">
        <h1 className="telephone ">Postal Mail and Telephone</h1>
        <h2 className="telephone">
          For inquiries regarding student records (transcript, diploma,
          certification):
        </h2>
        <h3 className="telephone">
          Polytechnic University of the Philippines
          <br></br>Office of the University Registrar
          <br></br>Ground Floor South Wing, Main Building
          <br></br>A. Mabini Campus, Anonas Street, Sta. Mesa
          <br></br>Manila, Philippines 1016
          <br></br>(632) 5335-1787 or 5335-1777 local 285
        </h3>
        <h1 className="telephone ">For admission inquiries:</h1>
        <h3>
          For inquiries regarding the PUP Branches and Campuses:
          <br></br>Admission Services
          <br></br>Ground Floor East Wing, Main Building
          <br></br>A. Mabini Campus, Anonas Street, Sta. Mesa
          <br></br>Manila, Philippines 1016
          <br></br>(632) 5335-1798 or (632) 5335-1799 (632) 5335-1787 or
          5335-1777 local 287 or 322
        </h3>
        <h1 className="telephone ">
          For inquiries regarding the PUP Branches and Campuses:
        </h1>
        <h3>
          Polytechnic University of the Philippines
          <br></br>Office of the Vice President for Branches and Campuses
          <br></br>Second Floor South Wing Executive Offices, Main Building
          <br></br>A. Mabini Campus, Anonas Street, Sta. Mesa
          <br></br>Manila, Philippines 1016
          <br></br>(632) 5310-0418
          <br></br>(632) 5335-1787 or 5335-1777 local 205
        </h3>
        <h1 className="telephone ">For PUP Open University inquiries:</h1>
        <h3>
          Polytechnic University of the Philippines
          <br></br>Open University System
          <br></br>Office of the Executive Director
          <br></br>Fourth Floor Ninoy Aquino Library and Learning Resources
          Center
          <br></br>A. Mabini Campus, Anonas Street, Sta. Mesa
          <br></br>Manila, Philippines 1016
          <br></br>(632) 8713-1505
          <br></br>(632) 5335-1787 or 5335-1777 local 251
        </h3>
      </div>
    </div>
  );
};

export default ContactUs;
