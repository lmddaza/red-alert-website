import React from "react";

const TwoColumnLayout = () => {
  return (
    <div className="parent-container">
      <div className="column1">
        <div className="row">
          <div className="container">
            <div className="card">
              <div className="card-image">
                <img src="/tahong.jpg" alt="Card Image" />
              </div>
              <div className="card-content">
                <h2>Harmful Algal Blooms</h2>
                <p>This is the content of row 1 in column 1.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="card">
              <div className="card-image">
                <img src="/tahong.jpg" alt="Card Image" />
              </div>
              <div className="card-content">
                <h2>Harmful Algal Blooms</h2>
                <p>This is the content of row 1 in column 2.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column2">
        <div className="container">
          <div className="map-container">
            <iframe
              title="Bolinao, Pangasinan Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95739.93322730313!2d119.91271431720618!3d15.940879403262003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3384e847c2e4d0db%3A0xe6be914c9e9e8f25!2sBolinao%2C%20Pangasinan!5e0!3m2!1sen!2sph!4v1621568971686!5m2!1sen!2sph"
              width="100%"
              height="700"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
