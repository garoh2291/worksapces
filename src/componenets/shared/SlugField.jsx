import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from "../../utils";
import ErrorMessage from "./Errors";
import { SlugText } from "./SlugText";

export const SlugField = ({
  label,
  inputProps,
  control,
  name,
  errors,
  type,
  onChange,
  suggested,
  confirmGenerated,
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
            onChange={onChange}
          />
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
      {suggested.existed ? (
        <SlugText suggested={suggested} confirmGenerated={confirmGenerated} />
      ) : suggested.value ? (
        <SlugText available />
      ) : (
        ""
      )}
    </FormControl>
  );
};
