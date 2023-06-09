import React from "react";

const Summary = () => {
  // Placeholder data
  const sensorData = [
    {
      station: "Station 1",
      ph: 7.5,
      temperature: 25.6,
      conductivity: 10,
      dissolvedOxygen: 6.8,
    },
    {
      station: "Station 2",
      ph: 7.2,
      temperature: 24.8,
      conductivity: 10,
      dissolvedOxygen: 7.2,
    },
    {
      station: "Station 3",
      ph: 7.8,
      temperature: 26.2,
      conductivity: 10,
      dissolvedOxygen: 6.5,
    },
    {
      station: "Station 4",
      ph: 7.4,
      temperature: 25.0,
      conductivity: 10,
      dissolvedOxygen: 7.0,
    },
    {
      station: "Station 5",
      ph: 7.1,
      temperature: 24.5,
      conductivity: 10,
      dissolvedOxygen: 6.9,
    },
    {
      station: "Station 6",
      ph: 7.3,
      temperature: 25.8,
      conductivity: 10,
      dissolvedOxygen: 6.7,
    },
  ];

  return (
    <div className="summary">
      <div className="row">
        {sensorData.slice(0, 3).map((data, index) => (
          <div key={index} className="sensor-card">
            <div className="sensor-header">{data.station}</div>
            <div className="sensor-readings">
              <div className="reading-item">
                <div className="reading-label">pH</div>
                <div className="reading-value">{data.ph}</div>
              </div>
              <div className="reading-item">
                <div className="reading-label">Temp</div>
                <div className="reading-value">{data.temperature}</div>
              </div>
              <div className="reading-item">
                <div className="reading-label">Dissolved Oxygen</div>
                <div className="reading-value">{data.dissolvedOxygen}</div>
              </div>
              <div className="reading-item">
                <div className="reading-label">Conductivity</div>
                <div className="reading-value">{data.conductivity}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        {sensorData.slice(3).map((data, index) => (
          <div key={index} className="sensor-card">
            <div className="sensor-header">{data.station}</div>
            <div className="sensor-readings">
              <div className="reading-item">
                <div className="reading-label">pH</div>
                <div className="reading-value">{data.ph}</div>
              </div>
              <div className="reading-item">
                <div className="reading-label">Temp</div>
                <div className="reading-value">{data.temperature}</div>
              </div>
              <div className="reading-item">
                <div className="reading-label">Dissolved Oxygen</div>
                <div className="reading-value">{data.dissolvedOxygen}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
