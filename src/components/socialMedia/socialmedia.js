import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex flex-wrap justify-center mt-10 border-b-[1px] border-grey">
      <div className="flex flex-col md:flex-row justify-center w-full md:w-3/4 h-auto embed">
        <div className="mb-5 md:mr-5">
          <a
            className="twitter-timeline"
            data-width="350"
            data-height="700"
            data-theme="dark"
            href="https://twitter.com/ThePUPOfficial?ref_src=twsrc%5Etfw"
          ></a>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>
        <div className="ml-0 md:ml-5">
          <div className="mb-6">
            <iframe
              className="w-full"
              width="750"
              height="422"
              src="https://www.youtube.com/embed/EVp6JBwTudk?list=UU3D3_jrSi3sYmx5L5p5RAwA"
              title="The Observer Online: Tanglaw Fest 2023"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mb-2">
            <iframe
              className="w-full"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/episode/6hSNhWq3gSGcSouucc8kl0?utm_source=generator"
              width="750"
              height="200"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
