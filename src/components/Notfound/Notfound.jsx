import React from "react";
import "./Notfound.css";

const Notfound = () => {
  const image = "https://i.giphy.com/l117HrgEinjIA.gif";
  return (
    <div className="FourOhFour">
      <div
        className="bg"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="code">404</div>
    </div>
  );
};

export default Notfound;
