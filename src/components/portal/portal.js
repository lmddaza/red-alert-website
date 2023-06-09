import React, { useState } from "react";
import Calendar from "src/components/portal/calendar.js";

const Table = () => {
  const rows = 4;
  const columns = 2;

  const [displayText, setDisplayText] = useState("");
  const [userId, setUserId] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch("https://api.ahglab.com/api:W7k9W8HQ/users");
      const data = await response.json();
      const firstUserId = data[0].id;
      setUserId(firstUserId);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f4f4f4", // Add background color here
        alignItems: "center",

        marginBottom: "30px",
        gap: "50px",
      }}
    >
      <div style={{ marginRight: "20px", width: "40%" }}>
        <table
          style={{
            border: "1px solid #000",
            borderCollapse: "collapse",
            width: "100%",
            height: "350px",
            marginRight: "20px",
            marginTop: "40px",
          }}
        >
          <thead>
            <tr>
              <th colSpan={columns}></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: columns }, (_, colIndex) => {
                  let content = "";
                  let className = "";

                  if (colIndex === 0 && rowIndex < 4) {
                    switch (rowIndex) {
                      case 0:
                        content = "Water Quality Parameters";
                        className = "bold-row";
                        break;
                      case 1:
                        content = "Temperature";
                        break;
                      case 2:
                        content = "pH Level";
                        break;
                      case 3:
                        content = "Conductivity";
                        break;
                      default:
                        content = "";
                    }
                  } else if (rowIndex === 0 && colIndex === 1) {
                    content = "Real-time Readings";
                  } else if (rowIndex === 1 && colIndex === 1) {
                    content = (
                      <>
                        <span className="user-id">{userId}</span>
                      </>
                    );
                  } else {
                    content = `Row ${rowIndex + 1}, Column ${colIndex + 1}`;
                  }

                  if (rowIndex === 1 && colIndex === 1) {
                    content = (
                      <>
                        <span className="user-id">{userId}</span>
                        <input
                          type="text"
                          placeholder="Temperature"
                          className="reading-input"
                        />
                      </>
                    );
                  } else if (rowIndex === 2 && colIndex === 1) {
                    content = (
                      <>
                        <span className="user-id">{userId}</span>
                        <input
                          type="text"
                          placeholder="pH Level"
                          className="reading-input"
                        />
                      </>
                    );
                  } else if (rowIndex === 3 && colIndex === 1) {
                    content = (
                      <>
                        <span className="user-id">{userId}</span>
                        <input
                          type="text"
                          placeholder="Conductivity"
                          className="reading-input"
                        />
                      </>
                    );
                  }

                  return (
                    <td
                      key={colIndex}
                      className={className}
                      style={{ border: "1px solid #000", padding: "8px" }}
                    >
                      {typeof content === "string" ? (
                        <span className="display-text">{content}</span>
                      ) : (
                        content
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="calendar-container">
        <Calendar />
      </div>
    </div>
  );
};

export default Table;
