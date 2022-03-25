import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DialogDelete from "../../../components/DialogDelete";
import { deleteCart, editCart, getProductDetail } from "../../../store/action";
import { formatCurrent } from "../../../utils/formatCurrent";
import history from "../../../utils/history";
import { toastError } from "../../../utils/toast";
import "./style.scss";

function CartItem({ item }) {
  const [value, setValue] = useState(item?.quantity);
  const [openDelete, setOpenDelete] = useState(false);
  const [valueDelete, setValueDelete] = useState({});

  const dispatch = useDispatch();
  // const { productDetail } = useSelector((state) => state.productReducer);

  // useEffect(() => {
  //   dispatch(
  //     getProductDetail({
  //       id: item.product_id,
  //     })
  //   );
  // }, []);

  const handleChangeValue = (amount) => {
    if (amount > 0 && amount <= 10) {
      setValue(amount);
    } else {
      toastError("Only entered between 1 and 10!");
    }
  };

  const handleEditQuantity = () => {
    dispatch(
      editCart({
        ...item,
        quantity: +value,
      })
    );
  };

  const handleClickOpenDialog = (data) => {
    setOpenDelete(true);
    setValueDelete(data);
  };

  const handleDelete = () => {
    dispatch(
      deleteCart({
        id: valueDelete.id,
      })
    );
    setOpenDelete(false);
  };

  return (
    <Box className="cart__subcontainer">
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid item xs={3}>
          <div className="cart__image">
            <img
              src={item?.products.thumbnail}
              alt=""
              onClick={() => history.push(`/product/${item?.products.id}`)}
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="cart__info">
            <p
              className="cart__info--name"
              onClick={() => history.push(`/product/${item?.products.id}`)}
            >
              {item?.products.name}
            </p>
            <p>{formatCurrent(item?.products.price)}</p>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="cart__amount">
            <input
              className="cart__amount--input"
              type="number"
              min={1}
              max={10}
              value={value}
              onChange={(e) => handleChangeValue(e.target.value)}
              onBlur={handleEditQuantity}
            />
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="cart__price">
            <h3>{formatCurrent(item?.products.price * item?.quantity)}</h3>
          </div>
        </Grid>
        <Grid item xs={1}>
          <div
            className="cart__delete"
            onClick={() => handleClickOpenDialog(item?.products)}
          >
            <DeleteOutlineIcon
              sx={{ fontSize: "2.2rem", color: "red", cursor: "pointer" }}
            />
          </div>
        </Grid>
      </Grid>
      <DialogDelete
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        valueDelete={valueDelete}
        handleDelete={handleDelete}
      />
    </Box>
  );
}

export default CartItem;
