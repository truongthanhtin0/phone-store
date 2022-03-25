import { Chip, Grid, Stack, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, memo } from "react";
import { categoryArr, priceArr } from "../../../utils/constant";
import "./style.scss";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ProductSort(props) {
  const [isActive, setIsActive] = useState([]);

  const handleClick = (id) => {
    if (isActive.includes(id)) {
      const newArr = isActive.filter((item) => item !== id);
      setIsActive(newArr);
    } else {
      setIsActive([...isActive, id]);
    }
  };

  return (
    <section className="sort">
      <Box className="sort__container">
        <h1 className="sort__title">Hãng</h1>
        <Stack direction="row" spacing={1} className="sort__producer">
          <Grid container spacing={2}>
            {categoryArr.map((item) => (
              <Grid item xs={4} key={item.id} className="sort__producer--chip">
                <Chip
                  color={isActive.includes(item.id) ? "primary" : "default"}
                  label={item.name}
                  variant="outlined"
                  onClick={() => handleClick(item.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
        <h1 className="sort__title">Giá</h1>
        {priceArr.map((item) => (
          <Box key={item.id} className="sort__price">
            <Checkbox {...label} />
            <p className="sort__price--description">{item.price}</p>
          </Box>
        ))}
      </Box>
    </section>
  );
}

export default memo(ProductSort);
