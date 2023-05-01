import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex flex-wrap justify-center  border-b-[1px] border-grey parent-div">
      <div className="flex flex-col md:flex-row justify-center w-full md:w-3/4 h-auto embed">
        <div className="md:mr-5 ">
          <a
            className="twitter-timeline"
            data-width="300"
            data-height="600"
            data-theme="dark"
            href="https://twitter.com/ThePUPOfficial?ref_src=twsrc%5Etfw"
          ></a>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>
        <div className="ml-0 md:ml-5 pt-10">
          <div className="mb-6">
            <iframe
              className="w-full"
              width="450"
              height="400"
              src="https://www.youtube.com/embed/EVp6JBwTudk?list=UU3D3_jrSi3sYmx5L5p5RAwA"
              title="The Observer Online: Tanglaw Fest 2023"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full pt-5 "
              style={{ borderRadius: "12px", width: "750px !important" }}
              src="https://open.spotify.com/embed/episode/6hSNhWq3gSGcSouucc8kl0?utm_source=generator"
              width="450"
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
