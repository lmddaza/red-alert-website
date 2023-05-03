import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex flex-wrap justify-center mt-10 border-b-[1px] border-grey">
      <div className="flex flex-col justify-center w-3/4 h-auto embed md:flex-row">
        <div className="mr-0 md:mr-5 twitter">
          <a
            className="twitter-timeline"
            data-theme="dark"
            href="https://twitter.com/ThePUPOfficial?ref_src=twsrc%5Etfw"
          >
            Tweets by papicurl
          </a>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
        <div className="justify-center w-full ml-5 md:w-auto">
          <div className="mb-6 yt-spot-container">
            <iframe
              className="yt"
              src="https://www.youtube.com/embed/EVp6JBwTudk?list=UU3D3_jrSi3sYmx5L5p5RAwA"
              title="The Observer Online: Tanglaw Fest 2023"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mb-2 yt-spot-container">
            <iframe
              className="spotify"
              src="https://open.spotify.com/embed/episode/6hSNhWq3gSGcSouucc8kl0?utm_source=generator"
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
