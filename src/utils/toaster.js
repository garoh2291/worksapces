import { toast } from "react-toastify";

export const onSucces = (message) => {
  toast.success(message);
};

export const onError = (message) => {
  toast.error(message);
};
