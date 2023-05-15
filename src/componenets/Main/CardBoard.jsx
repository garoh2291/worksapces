import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoaderContainer, StyledBoard } from "../styles/dashboard.styles";
import { NewCard } from "../shared/NewCard";
import { Card } from "../shared/Card";
import { SpaceModal } from "../shared/Modal";
import { deleteSpaceThunk } from "../../redux/slices/workspace";

export const CardBoard = () => {
  const { status } = useSelector((state) => state.workspace);
  const [isOpen, setIsOpen] = useState(false);
  const [editableSpace, setEditableSpace] = useState(null);
  const { workspaces } = useSelector((state) => state.workspace);
  const dispatch = useDispatch();

  const onDelete = (_id) => {
    dispatch(deleteSpaceThunk({ _id }));
  };

  const newModalHandler = () => {
    setIsOpen((prev) => !prev);
    setEditableSpace(null);
  };

  const editModalHandler = (workspace) => {
    if (workspace) {
      setEditableSpace(workspace);
      setIsOpen(true);
    }
  };

  if (status === "loading") {
    return (
      <StyledBoard>
        <LoaderContainer>
          <h6>Loading...</h6>
        </LoaderContainer>
      </StyledBoard>
    );
  }

  return (
    <StyledBoard>
      <NewCard handleOpen={newModalHandler} />
      {workspaces.map((space) => (
        <Card
          space={space}
          key={space._id}
          onDelete={onDelete}
          onChange={editModalHandler}
        />
      ))}
      {isOpen && (
        <SpaceModal editableSpace={editableSpace} onClose={newModalHandler} />
      )}
    </StyledBoard>
  );
};
