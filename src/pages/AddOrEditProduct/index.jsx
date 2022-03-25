import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import CustomField from "../../components/CustomField";
import { addProduct, editProduct, setProduct } from "../../store/action";
import { categoryArr, fieldArr } from "../../utils/constant";
import history from "../../utils/history";

function AddOrEditProduct({ location }) {
  const dispatch = useDispatch();
  const { getProduct } = useSelector((state) => state.productReducer);

  const [valueCategory, setValueCategory] = useState(
    getProduct?.category || ""
  );

  const check = location.pathname.indexOf("edit") === -1;

  useEffect(() => {
    document.title = `Phone Store | ${check ? "Add" : "Edit"} Product`;
    return () => dispatch(setProduct({}));
  }, []);

  const initialValues = check
    ? {
        thumbnail: "",
        name: "",
        price: "",
        rate: "",
        description: "",
        // category: "",
      }
    : {
        thumbnail: getProduct?.thumbnail,
        name: getProduct?.name,
        price: getProduct?.price,
        rate: getProduct?.rate,
        description: getProduct?.description,
        // category: getProduct?.category,
      };

  const validateSchema = Yup.object().shape({
    thumbnail: Yup.string().required("Required!"),
    name: Yup.string().min(8, "Too Short!").required("Required!"),
    price: Yup.number().required("Required!"),
    rate: Yup.number().required("Required!"),
    description: Yup.string().min(8, "Too Short!").required("Required!"),
    // category: Yup.string().required("Required!"),
  });

  const handleSubmitForm = (values) => {
    if (check) {
      dispatch(addProduct({ ...values, category: valueCategory }));
    } else {
      dispatch(
        editProduct({
          ...values,
          category: valueCategory,
          id: getProduct.id,
        })
      );
    }
  };

  return (
    <section>
      <h1>{check ? "FORM ADD PRODUCT" : "FORM EDIT PRODUCT"}</h1>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={(values) => handleSubmitForm(values)}
        >
          <Form>
            {fieldArr.map((item) => (
              <CustomField
                key={item.id}
                name={item.name}
                label={item.label}
                placeholder={item.placeholder}
                // type={item.type}
              />
            ))}
            <div className="field">
              <label className="field__label" htmlFor="category">
                Category
              </label>
              <FormControl>
                <InputLabel id="category">Category</InputLabel>
                <Field name="category">
                  {({ field }) => (
                    <Select
                      {...field}
                      id="category"
                      label="category"
                      value={valueCategory}
                      onChange={(e) => setValueCategory(e.target.value)}
                    >
                      {categoryArr.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </Field>
              </FormControl>
            </div>
            <div className="field__btn">
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <Button
                variant="outlined"
                sx={{ marginLeft: 4 }}
                onClick={() => history.push("/admin")}
              >
                Back
              </Button>
            </div>
          </Form>
        </Formik>
      </Box>
    </section>
  );
}

export default AddOrEditProduct;
