import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  InputBase,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import history from "../../utils/history";
import Banner from "../Banner";
import "./style.scss";
import { getCart } from "./../../store/action/cart_action";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Header(props) {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <section className="header">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters className="container">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                cursor: "pointer",
              }}
              onClick={() => history.push("/")}
            >
              PHONE STORE
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={() => history.push("/admin")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Admin
              </Button>
              <Button
                onClick={() => history.push("/")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Product
              </Button>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>

            <Box sx={{ flexGrow: 0 }} className="header__cart">
              <IconButton sx={{ p: 0 }} onClick={() => history.push("/cart")}>
                <ShoppingCartIcon sx={{ color: "#fff", fontSize: "2rem" }} />
              </IconButton>
              {cartData && (
                <p className="header__cart--quantity">
                  {cartData?.carts?.length}
                </p>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="header__banner">
        <Banner
          img="https://img4.thuthuatphanmem.vn/uploads/2020/06/26/hinh-anh-banner-dien-may-thong-minh_033705387.png"
          height="400px"
        />
      </div>
    </section>
  );
}

export default Header;
