import React, { useState } from "react";

const MobileReadings = () => {
  const sensorData = [
    {
      station: "Station 1",
      ph: 7.5,
      temperature: 25.6,
      Conductivity: 10,
      dissolvedOxygen: 6.8,
    },
    {
      station: "Station 2",
      ph: 7.2,
      temperature: 24.8,
      Conductivity: 10,
      dissolvedOxygen: 7.2,
    },
    {
      station: "Station 3",
      ph: 7.1,
      temperature: 26.2,
      Conductivity: 10,
      dissolvedOxygen: 7.4,
    },
    {
      station: "Station 4",
      ph: 7.3,
      temperature: 25.1,
      Conductivity: 10,
      dissolvedOxygen: 6.9,
    },
    {
      station: "Station 5",
      ph: 7.0,
      temperature: 24.9,
      Conductivity: 10,
      dissolvedOxygen: 7.1,
    },
    {
      station: "Station 6",
      ph: 7.4,
      temperature: 25.5,
      Conductivity: 10,
      dissolvedOxygen: 7.0,
    },
    {
      station: "Station 7",
      ph: 7.2,
      temperature: 24.7,
      Conductivity: 10,
      dissolvedOxygen: 7.3,
    },
    {
      station: "Station 8",
      ph: 7.6,
      temperature: 26.0,
      Conductivity: 10,
      dissolvedOxygen: 6.8,
    },
    {
      station: "Station 9",
      ph: 7.3,
      temperature: 25.3,
      Conductivity: 10,
      dissolvedOxygen: 7.2,
    },
    {
      station: "Station 10",
      ph: 7.1,
      temperature: 25.7,
      Conductivity: 10,
      dissolvedOxygen: 6.9,
    },
  ];
  const [selectedStation, setSelectedStation] = useState(sensorData[0].station);

  const handleStationChange = (event) => {
    setSelectedStation(event.target.value);
  };

  const selectedSensorData = sensorData.find(
    (data) => data.station === selectedStation
  );

  return (
    <div className="mobile-summary">
      <div className="dropdown">
        <label htmlFor="station-select">Select Station:</label>
        <select
          id="station-select"
          value={selectedStation}
          onChange={handleStationChange}
        >
          {sensorData.map((data, index) => (
            <option key={index} value={data.station}>
              {data.station}
            </option>
          ))}
        </select>
      </div>

      {selectedSensorData && (
        <div className="sensor-card">
          <div className="sensor-header">{selectedSensorData.station}</div>
          <div className="sensor-readings">
            <div className="reading-item">
              <div className="reading-label">pH</div>
              <div className="reading-value">{selectedSensorData.ph}</div>
            </div>
            <div className="reading-item">
              <div className="reading-label">Temp</div>
              <div className="reading-value">
                {selectedSensorData.temperature}
              </div>
            </div>
            <div className="reading-item">
              <div className="reading-label">Conductivity</div>
              <div className="reading-value">
                {selectedSensorData.Conductivity}
              </div>
            </div>
            <div className="reading-item">
              <div className="reading-label">Dissolved Oxygen</div>
              <div className="reading-value">
                {selectedSensorData.dissolvedOxygen}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .mobile-summary {
          background-color: #f4f4f4;
          border-radius: 8px;
          margin-left: 250px;
        }

        .dropdown {
          margin-bottom: 20px;
        }

        label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }

        select {
          width: 25%;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        .sensor-card {
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          width: 315px;
          background-color: #e0fffb;
        }

        .sensor-header {
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 10px;
        }

        .sensor-readings {
          display: flex;
          flex-direction: column;
        }

        .reading-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .reading-label {
          font-weight: bold;
        }

        .reading-value {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default MobileReadings;
