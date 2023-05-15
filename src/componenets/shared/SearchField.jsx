import { useContext } from "react";
import { debounce } from "lodash";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { WorkspaceContext } from "../../context";

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
