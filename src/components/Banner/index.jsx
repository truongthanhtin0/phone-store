import React from "react";
import "./style.scss";

function Banner({ img, height }) {
  return (
    <section className="banner">
      <div
        className="banner__background"
        style={{
          backgroundImage: `url(${img})`,
          height: `${height}`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      ></div>
    </section>
  );
}

export default Banner;
