import React from "react";
import { formatCurrent } from "../../../utils/formatCurrent";
import history from "../../../utils/history";
import Star from "./../../../components/Star";
import "./style.scss";

function ProductItem({ product }) {
  return (
    <section
      className="product__item"
      onClick={() => history.push(`/product/${product.id}`)}
    >
      <div className="product__item--img">
        <img src={product.thumbnail} alt="" />
      </div>

      <p className="product__item--name">{product.name}</p>
      <h3 className="product__item--price">{formatCurrent(product.price)}</h3>
      <Star rate={product.rate} />
    </section>
  );
}

export default ProductItem;
