import React, { useState } from "react";
import Calendar from "src/components/portal/calendar.js";

const Table = () => {
  const rows = 6;
  const columns = 3;

  const [displayText, setDisplayText] = useState("");
  const [userId, setUserId] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch("https://api.ahglab.com/api:W7k9W8HQ/users");
      const data = await response.json();
      const firstUserId = data[0].id; // Assuming the API returns an array of users and you want the first user's ID
      setUserId(firstUserId);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="table-container">
      <table className="custom-table">
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

                if (colIndex === 0 && rowIndex < 5) {
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
                      content = "Dissolved Oxygen";
                      break;
                    case 4:
                      content = "Conductivity";
                      break;
                    default:
                      content = "";
                  }
                } else if (rowIndex === 0 && colIndex === 1) {
                  content = "Test 1";
                } else if (rowIndex === 0 && colIndex === 2) {
                  content = "Test 2";
                } else if (rowIndex === 1 && colIndex === 1) {
                  content = (
                    <>
                      <button className="custom-button" onClick={handleClick}>
                        Click Me
                      </button>
                      <span className="user-id">{userId}</span>
                    </>
                  );
                } else {
                  content = `Row ${rowIndex + 1}, Column ${colIndex + 1}`;
                }

                return (
                  <td key={colIndex} className={className}>
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
      <div className="calendar-container">
        <Calendar /> {/* Render the Calendar component */}
      </div>
    </div>
  );
};

export default Table;
