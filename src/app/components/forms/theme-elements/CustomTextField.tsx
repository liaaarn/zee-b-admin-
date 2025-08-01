import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

const CustomTextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    return (
      <TextField
        ref={ref}
        {...props}
        sx={{
          "& .MuiOutlinedInput-input": {
            "&::placeholder": {
              color: "text.secondary",
              opacity: 0.8,
            },
            "&::-webkit-input-placeholder": {
              color: "text.secondary",
              opacity: 0.8,
            },
          },
          "& .MuiOutlinedInput-input.Mui-disabled": {
            "&::placeholder": {
              color: "text.secondary",
              opacity: 1,
            },
            "&::-webkit-input-placeholder": {
              color: "text.secondary",
              opacity: 1,
            },
          },
          "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: "grey.200",
          },
          ...props.sx,
        }}
      />
    );
  }
);

CustomTextField.displayName = "CustomTextField";

export default CustomTextField;
