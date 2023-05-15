import { Controller } from "react-hook-form";
import { FormControl, TextField } from "@mui/material";
import { addErrorIntoField } from "../../utils";
import ErrorMessage from "./Errors";

export const InputField = ({
  label,
  inputProps,
  control,
  name,
  errors,
  type,
}) => {
  return (
    <FormControl
      fullWidth
      sx={{
        mb: "1rem",
        "&:hover  .css-1ff8729-MuiInputBase-root-MuiFilledInput-root": {
          backgroundColor: "transparent",
        },
        "& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root ": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            {...addErrorIntoField(errors[name])}
            required
            label={label}
            variant="outlined"
            InputProps={inputProps}
            type={type}
          />
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </FormControl>
  );
};
