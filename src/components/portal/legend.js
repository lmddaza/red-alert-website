import React from "react";
import { FaCircle } from "react-icons/fa"; // Assuming you're using Font Awesome

const LegendTable = () => {
  return (
    <table className="legendTable">
      <thead>
        <tr>
          <th>Red Alert Risk Probability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="legendLabel">
            <FaCircle className="redDotIcon" /> High Probability
          </td>
        </tr>
        <tr>
          <td className="legendLabel2">
            <FaCircle className="greenDotIcon" /> Low Probability
          </td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  );
};

export default LegendTable;
