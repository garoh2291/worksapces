import { useState } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SPACE_SCHEMA, slugcheck } from "../../utils/yup";
import { InputField } from "./InputField";
import { SlugField } from "./SlugField";
import {
  addWorkspaceThunk,
  editSpaceThunk,
} from "../../redux/slices/workspace";
import { checkSlugApi } from "../../utils/api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  width: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const SpaceModal = ({ editableSpace, onClose }) => {
  const [suggested, setSuggested] = useState({
    value: "",
    existed: false,
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      name: editableSpace?.name || "",
      slug: editableSpace?.slug || "",
    },
    resolver: yupResolver(SPACE_SCHEMA),
  });

  const dispatch = useDispatch();

  const handleCustomChange = async (e) => {
    const { value } = e.target;
    setValue("slug", value);

    debouncedOnChange(value);
  };

  const debouncedOnChange = debounce(async (newValue) => {
    if (slugcheck.test(newValue)) {
      try {
        const data = await checkSlugApi(newValue);

        setSuggested({
          value: data.suggested || newValue,
          existed: data.existed,
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      setSuggested((prev) => {
        return {
          value: "",
          existed: false,
        };
      });
    }
  }, 300);

  const confirmGenerated = () => {
    setValue("slug", suggested.value);
    setSuggested((prev) => {
      return {
        ...prev,
        existed: false,
      };
    });
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
