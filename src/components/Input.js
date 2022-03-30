import React, { forwardRef } from "react";
import { TextField } from "@mui/material/";

export const Input = forwardRef((props, ref) => {
    return (
        <TextField
            sx={{
                backgroundColor: "#00FF7F",
                borderRadius: "3px",
                boxShadow: "3px 3px 2px 1px rgba(60, 179, 113, 0.6)  ",
            }}
            variant="filled"
            margin="normal"
            inputRef={ref}
            fullWidth
            {...props}
        />
    );
});
