import React, { useState } from "react";

const MobileReadings = () => {
  // Placeholder data
  const sensorData = [
    {
      station: "Station 1",
      ph: 7.5,
      temperature: 25.6,
      dissolvedOxygen: 6.8,
    },
    {
      station: "Station 2",
      ph: 7.2,
      temperature: 24.8,
      dissolvedOxygen: 7.2,
    },
    // ... remaining sensor data
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
              <div className="reading-label">Dissolved Oxygen</div>
              <div className="reading-value">
                {selectedSensorData.dissolvedOxygen}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileReadings;
