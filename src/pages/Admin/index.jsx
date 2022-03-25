import ArticleIcon from "@mui/icons-material/Article";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DialogDelete from "../../components/DialogDelete";
import { deleteProduct, getListProduct, setProduct } from "../../store/action";
import { categoryArr, titleArr } from "../../utils/constant";
import history from "../../utils/history";
import { formatCurrent } from "./../../utils/formatCurrent";
import "./style.scss";

function Admin(props) {
  const [openDelete, setOpenDelete] = useState(false);
  const [valueDelete, setValueDelete] = useState({});

  const dispatch = useDispatch();
  const { productList, dataDeleteProduct, dataAddProduct, dataEditProduct } =
    useSelector((state) => state.productReducer);

  useEffect(() => {
    document.title = "Phone Store | Admin";
    dispatch(getListProduct());
  }, [dataDeleteProduct, dataAddProduct, dataEditProduct]);

  const handleClickOpenDelete = (data) => {
    setOpenDelete(true);
    setValueDelete(data);
  };

  const handleDelete = () => {
    dispatch(
      deleteProduct({
        id: valueDelete.id,
      })
    );
    setOpenDelete(false);
  };

  const handleClickEdit = (product) => {
    dispatch(setProduct(product));
    history.push(`/admin/edit/${product.id}`);
  };

  const handleRenderCategory = (category) => {
    const result = categoryArr.find((item) => item.id === +category);
    return result.name;
  };

  return (
    <section className="admin">
      <h1>Admin Page</h1>
      <Box className="container">
        <Button
          variant="contained"
          sx={{ margin: "12px 0", float: "right" }}
          onClick={() => history.push("/admin/add")}
        >
          Add Product
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {titleArr.map((item, index) => (
                  <TableCell key={index}>{item}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {productList.map((product, index) => (
                <TableRow
                  key={product.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    cursor: "pointer",
                  }}
                  hover
                >
                  <TableCell component="th" scope="product">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    <img
                      src={product.thumbnail}
                      alt=""
                      className="cart__image"
                    />
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{formatCurrent(product.price)}</TableCell>
                  <TableCell className="admin__description">
                    {product.description}
                  </TableCell>
                  <TableCell>
                    {handleRenderCategory(product.category)}
                  </TableCell>
                  <TableCell>
                    <Box className="admin__icon">
                      <div
                        onClick={() => history.push(`/product/${product.id}`)}
                      >
                        <ArticleIcon
                          sx={{
                            fontSize: "2rem",
                            margin: "0 4px",
                            color: "#ccc",
                          }}
                        />
                      </div>
                      <div onClick={() => handleClickEdit(product)}>
                        <EditIcon
                          sx={{
                            fontSize: "2rem",
                            margin: "0 4px",
                            color: "#3f89eb",
                          }}
                        />
                      </div>
                      <div onClick={() => handleClickOpenDelete(product)}>
                        <DeleteForeverIcon
                          sx={{
                            fontSize: "2rem",
                            margin: "0 4px",
                            color: "red",
                          }}
                        />
                      </div>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <DialogDelete
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        valueDelete={valueDelete}
        handleDelete={handleDelete}
      />
    </section>
  );
}

export default Admin;
