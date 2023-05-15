import * as yup from "yup";

export const slugcheck = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const REGISTER_SCHEMA = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().required("Email is required").email(),
  password: yup.string().required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match"),
});

export const LOGIN_SCHEMA = yup.object({
  email: yup.string().required("Email is required").email(),
  password: yup.string().required("Password is required"),
});

export const SPACE_SCHEMA = yup.object({
  name: yup.string().required("Name is required"),
  slug: yup
    .string()
    .required("Slug is required")
    .matches(slugcheck, "It must contain only letters numbers and -"),
});
