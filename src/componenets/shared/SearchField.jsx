import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { WorkspaceContext } from "../../context";
import { debounce } from "lodash";

export const SearchField = () => {
  const { changeSearch } = useContext(WorkspaceContext);

  const debouncedOnChange = debounce((newValue) => {
    changeSearch("search", newValue);
  }, 300);

  const handleSearch = (e) => {
    const { value } = e.target;

    debouncedOnChange(value);
  };

  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        "& > :not(style)": { m: 1, maxWidth: "600px", width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        placeholder="Search for a workspace"
        variant="outlined"
        type="text"
        onChange={handleSearch}
      />
    </Box>
  );
};
