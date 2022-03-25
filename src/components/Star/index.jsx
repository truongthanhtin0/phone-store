import React from "react";
import "./style.scss";
import StarIcon from "@mui/icons-material/Star";

function Star({ rate }) {
  const handleRenderStar = () => {
    let arrStar = new Array(5);

    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        arrStar[i] = 1;
      } else {
        arrStar[i] = 0;
      }
    }

    return arrStar.map((item, index) => {
      if (item === 1)
        return <StarIcon key={index} className="product__item--star" />;
      else
        return <StarIcon key={index} className="product__item--star-empty" />;
    });
  };
  return <div>{handleRenderStar()}</div>;
}

export default Star;
