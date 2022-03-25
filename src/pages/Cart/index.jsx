import { Box, Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "./../../store/action";
import { deleteAllCart  } from "../../store/action";
import { formatCurrent } from "./../../utils/formatCurrent";
import history from "./../../utils/history";
import CartItem from "./CartItem";
import "./style.scss";

function Cart(props) {
  const dispatch = useDispatch();
  const { cartData, dataDeleteCart, dataEditCart } = useSelector(
    (state) => state.cartReducer
  );

  const {carts, total} = cartData

  const handleClear= () =>{
    dispatch(deleteAllCart());
  }
  useEffect(() => {
    dispatch(getCart());
  }, [dataDeleteCart, dataEditCart]);

  const handleRenderVAT = () => {
    return (total * 5) / 100;
  };

  const handleRenderTotal = () => {
    return total + handleRenderVAT();
  };

  return (
    <section>
      <Box className="container cart">
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <section className="cart__container">
              <div className="cart__header">
                <h2>My Cart</h2>
                <p>{carts?.length} items</p>
              </div>
              <div className="cart__table">
                {carts?.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              <div className="cart__footer">
                <Button
                  variant="contained"
                  sx={{ marginRight: 8 }}
                  onClick={() => history.push("/")}
                >
                  Continue Shopping
                </Button>
                <Button variant="outlined" onClick={handleClear}>Clear Cart</Button>
              </div>
            </section>
          </Grid>
          <Grid item xs={12} md={3}>
            <section className="cart__total">
              <img
                src="//cdn.tgdd.vn/2022/03/banner/Giadụng-desktolll-780x420.jpg"
                alt=""
                className="cart__total--img"
              />
              <div className="cart__wrapper">
                <p>Subtotal: </p>
               {total &&  <p>{formatCurrent(total)}</p>}
              </div>
              <div className="cart__wrapper">
                <p>VAT: </p>
                <p>{formatCurrent(handleRenderVAT())}</p>
              </div>
              <div className="cart__wrapper">
                <p>Ship: </p>
                <p>0</p>
              </div>
              <div className="cart__wrapper cart__wrapper--last">
                <p>Total: </p>
                <p>{formatCurrent(handleRenderTotal())}</p>
              </div>
              <Button variant="contained" sx={{ margin: "8px 0" }}>
                Go to Payment
              </Button>
            </section>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Cart;
