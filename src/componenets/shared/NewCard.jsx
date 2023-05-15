import AddIcon from "@mui/icons-material/Add";
import { StyledNewCard } from "../styles/dashboard.styles";

export const NewCard = ({ handleOpen }) => {
  return (
    <StyledNewCard onClick={handleOpen}>
      <AddIcon
        sx={{
          fontSize: "60px",
          color: "#ea580c",
        }}
      />
    </StyledNewCard>
  );
};
