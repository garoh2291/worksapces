import { memo } from "react";
import { StyledActions, StyledCard } from "../styles/dashboard.styles";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

export const Card = memo(({ space, onDelete, onChange }) => {
  const { name, slug, _id, userId } = space;
  const { user } = useSelector((state) => state.workspace);
  return (
    <StyledCard>
      <h6>Name:</h6>
      <p> {name}</p>
      <h6>Slug: </h6>
      <p>{slug}</p>
      {user === userId ? (
        <StyledActions>
          <EditNoteIcon
            sx={{
              color: "#f59e0b",
              cursor: "pointer",
            }}
            onClick={() => onChange(space)}
          />
          <DeleteIcon
            sx={{
              color: "#e03105",
              cursor: "pointer",
            }}
            onClick={() => onDelete(_id)}
          />
        </StyledActions>
      ) : null}
    </StyledCard>
  );
});
