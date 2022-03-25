import { Box, Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, getProductDetail } from "../../store/action";
import { toastSuccess } from "../../utils/toast";
import Star from "./../../components/Star";
import { formatCurrent } from "./../../utils/formatCurrent";
import "./style.scss";

function ProductDetail({ match }) {
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.productReducer);

  useEffect(() => {
    document.title = "Phone Store | Product Detail";
    dispatch(
      getProductDetail({
        id: match.params.id,
      })
    );
  }, []);

  const handleAddToCart = (id) => {
    dispatch(addCart({ id }));
  };

  return (
    <section className="detail">
      <Box sx={{ padding: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="detail__img">
              <img src={productDetail?.thumbnail} alt="" />
            </div>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
            <div>
              <h1 className="detail__name">{productDetail?.name}</h1>
              <p className="detail__fs">
                Giá tại <span className="detail__fs--color">Đà Nẵng</span>
              </p>
              <h1 className="detail__price">
                {formatCurrent(productDetail?.price)}
              </h1>
              <div className="detail__wrapper">
                <p className="detail__fs detail__mg">Đánh giá: </p>
                <div className="detail__star">
                  <Star rate={productDetail?.rate} />
                </div>
              </div>
              <div className="detail__wrapper">
                <p className="detail__fs detail__mg">Nhà sản xuất: </p>
                <p className="detail__category detail__fs">
                  {productDetail?.category}
                </p>
              </div>
              <div className="detail__wrapper">
                <p className="detail__fs detail__mg">Mô tả: </p>
                <p className="detail__description detail__fs">
                  {productDetail?.description}
                </p>
              </div>

              <div className="detail__btn">
                <Button
                  variant="contained"
                  sx={{ marginRight: 4 }}
                  onClick={() => toastSuccess("Successful product purchase!")}
                >
                  Mua ngay
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handleAddToCart(productDetail?.id)}
                >
                  Thêm giỏ hàng
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default ProductDetail;
