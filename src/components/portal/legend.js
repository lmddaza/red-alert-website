import React from "react";
import { FaCircle } from "react-icons/fa"; // Assuming you're using Font Awesome

const LegendTable = () => {
  const data = "Sample data";

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginLeft: "50px",
          maxWidth: "600px",
        }}
      >
        <table
          style={{
            color: "#000",
          }}
          className="legendTable"
        >
          <thead>
            <tr>
              <th>Red Alert Risk Probability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "#000" }} className="legendLabel">
                <FaCircle
                  className="redDotIcon"
                  style={{
                    display: "inline-block",
                    width: "10px",
                    height: "10px",
                    color: "red",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />{" "}
                High Probability
              </td>
            </tr>
            <tr>
              <td style={{ color: "#000" }} className="legendLabel2">
                <FaCircle
                  className="greenDotIcon"
                  style={{
                    display: "inline-block",
                    width: "10px",
                    height: "10px",
                    color: "#948d5d",
                    backgroundColor: "#948d5d",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />{" "}
                Low Probability
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LegendTable;
