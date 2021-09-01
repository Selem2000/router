import React from "react";
import "./trailer.css";

function Trailer({
  location: {
    state: { name, trailer },
  },
}) {
  const iframeStyle = {
    width: "800px",
    height: "400px",
    border: "5px solid white",
    boxShadow: "0 0 50px",
    borderRadius: "10px",
    marginBottom: "50px",
  };
  return (
    <div className="trailer">
      <h1 className="movieName">{name}</h1>
      <iframe src={trailer} style={iframeStyle} frameborder="10"></iframe>
    </div>
  );
}

export default Trailer;
