import React from "react";
// import PropTypes from "prop-types";

const YoutubeEmbed = ({ videoData }) => (
  <div className="video-div">
    <div className="video-responsive">
      <iframe
        width="553"
        height="280"
        src={videoData}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  </div>
);

// YoutubeEmbed.propTypes = {
//   video: PropTypes.string.isRequired
// };

export default YoutubeEmbed;