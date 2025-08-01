import React from "react";
import { Typography, Box } from "@mui/material";

const CustomFormLabel = (props: any) => (
  <Box
    component="label"
    htmlFor={props.htmlFor}
    sx={{
      marginBottom: "5px",
      marginTop: "25px",
      display: "block",
    }}
  >
    <Typography
      variant="subtitle1"
      fontWeight={600}
      {...props}
      component="span"
    />
  </Box>
);

export default CustomFormLabel;
