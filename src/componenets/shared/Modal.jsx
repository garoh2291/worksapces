import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SPACE_SCHEMA } from "../../utils/yup";
import { InputField } from "./InputField";
import { SlugField } from "./SlugField";
import { useDispatch } from "react-redux";
import {
  addWorkspaceThunk,
  editSpaceThunk,
} from "../../redux/slices/workspace";
import { debounce } from "lodash";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const SpaceModal = ({ editableSpace, onClose }) => {
  const [suggested, setSuggested] = useState({
    value: "",
    existed: "",
  });
  const defaultValues = {
    name: editableSpace?.name || "",
    slug: editableSpace?.slug || "",
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues,
    resolver: yupResolver(SPACE_SCHEMA),
  });

  const dispatch = useDispatch();

  const handleCustomChange = async (e) => {
    const { value } = e.target;
    setValue("slug", value);

    debouncedOnChange(value);
  };

  const debouncedOnChange = debounce((newValue) => {
    fetch("http://localhost:3005/api/v1/workspaces/check-slug", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify({
        slug: newValue,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuggested((prev) => {
          return {
            value: data.suggested || newValue,
            existed: data.existed,
          };
        });
      })
      .catch((e) => console.log(e));
  }, 300);

  const confirmGenerated = () => {
    setValue("slug", suggested.value);
  };

  const onSubmit = (space) => {
    !editableSpace
      ? dispatch(addWorkspaceThunk({ space, onClose }))
      : dispatch(editSpaceThunk({ space, onClose, _id: editableSpace._id }));
  };
  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={style}
        noValidate
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ mb: 2 }}
        >
          New Workspace
        </Typography>
        <InputField
          control={control}
          errors={errors}
          name="name"
          label="Name"
        />
        <SlugField
          control={control}
          errors={errors}
          name="slug"
          onChange={handleCustomChange}
          label="Slug"
          suggested={suggested}
          confirmGenerated={confirmGenerated}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            background: "#ea580c",
            "&:hover": {
              backgroundColor: "#d14a01",
            },
          }}
        >
          {editableSpace ? "Change" : "Create"}
        </Button>
      </Box>
    </Modal>
  );
};
