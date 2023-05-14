import { configureStore } from "@reduxjs/toolkit";
import workSpaceSlice from "./slices/workspace.js";

export default configureStore({
  reducer: {
    workspace: workSpaceSlice,
  },
});
