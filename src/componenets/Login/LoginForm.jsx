import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Button, Grid } from "@mui/material";
import { InputField } from "../shared/InputField";
import { LOGIN_SCHEMA } from "../../utils/yup";
import { loginUserThunk } from "../../redux/slices/workspace";

export const LoginForm = () => {
  const { status } = useSelector((state) => state.workspace);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LOGIN_SCHEMA),
  });

  const cb = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    dispatch(loginUserThunk({ data, cb }));
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
          control={control}
          errors={errors}
          name="email"
          label="Email"
        />
        <InputField
          control={control}
          name="password"
          label="Password"
          type="password"
          errors={errors}
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
            "Sign in"
          )}
        </Button>
      </Box>
      <Grid sx={{ my: 2 }} item>
        <Link to={"/auth/registration"}>
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
    </>
  );
};
