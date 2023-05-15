import { Box, Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { REGISTER_SCHEMA } from "../../utils/yup";
import { InputField } from "../shared/InputField";
import { registerUserThunk } from "../../redux/slices/workspace";
import { onSucces } from "../../utils/toaster";
import CircularProgress from "@mui/material/CircularProgress";

export const RegisterForm = () => {
  const { status } = useSelector((state) => state.workspace);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(REGISTER_SCHEMA),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cb = (message) => {
    onSucces(message);
    navigate("/auth/login");
  };

  const onSubmit = (data) => {
    delete data.confirmPassword;
    dispatch(registerUserThunk({ data, cb }));
  };

  return (
    <>
      <Box
        noValidate
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "100%", mt: "2rem" }}
      >
        <InputField
          errors={errors}
          control={control}
          name="fullName"
          label="Full Name"
        />

        <InputField
          errors={errors}
          control={control}
          name="email"
          label="Email"
        />
        <InputField
          errors={errors}
          control={control}
          name="password"
          label="Password"
          type="password"
        />
        <InputField
          errors={errors}
          control={control}
          name="confirmPassword"
          label="Confirm Password"
          type="password"
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
          {status === "loading" ? (
            <CircularProgress color="success" size={25} />
          ) : (
            "Sign up"
          )}
        </Button>
      </Box>
      <Grid item>
        <Link to={"/auth/login"}>{"Already have an account? Sign in"}</Link>
      </Grid>
    </>
  );
};
