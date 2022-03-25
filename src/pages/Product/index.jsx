import { Box, Grid, Pagination, Paper, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/Banner";
import { getListProduct } from "../../store/action";
import ProductItem from "./ProducItem";
import ProductSort from "./ProductSort";
import "./style.scss";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: 320,
}));

function Product(props) {
  // const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.productReducer);

  useEffect(() => {
    document.title = "Phone Store | Product";
    dispatch(getListProduct());
  }, []);

  return (
    <section className="product">
      <Box className="container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <ProductSort />
          </Grid>
          <Grid item xs={12} md={9}>
            <Banner
              img="//cdn.tgdd.vn/2022/03/banner/800-200-800x200-86.png"
              height="230px"
            />
            <Box>
              <Grid container spacing={2}>
                {productList?.map((item) => (
                  <Grid item xs={6} md={4} lg={3} key={item.id}>
                    <Item>
                      <ProductItem product={item} />
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
            {/* <Pagination
              count={Math.ceil(productList?.length / 12)}
              variant="outlined"
              shape="rounded"
              onChange={(e, page) => setPage(page)}
              className="product__pagination"
            /> */}
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Product;
