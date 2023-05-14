import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onError, onSucces } from "../../utils/toaster";

export const registerUserThunk = createAsyncThunk(
  "registerUserThunk/workspace",

  async function ({ data, cb }, { rejectWithValue }) {
    try {
      const res = await fetch("http://localhost:3005/api/v1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const answer = await res.json();

      if (!answer.success) {
        onError(answer.message);
        throw new Error(answer.message);
      }

      cb(answer.message);
    } catch (e) {
      console.log(e);
      rejectWithValue(e);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "loginUserThunk/workspace",
  async function ({ data, cb }, { rejectWithValue }) {
    try {
      const res = await fetch("http://localhost:3005/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const answer = await res.json();

      if (!answer.success) {
        console.log(answer);
        onError(answer.message);
        throw new Error(answer.message);
      }

      localStorage.setItem("token", JSON.stringify(answer.token));

      cb();
    } catch (e) {
      console.log(e);
      rejectWithValue(e);
    }
  }
);

export const getWorkSpacesThunk = createAsyncThunk(
  "getWorkSpacesThunk/workspace",

  async function ({ query, cb }, { rejectWithValue }) {
    try {
      const res = await fetch(
        `http://localhost:3005/api/v1/workspaces?search=${query}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );

      const data = await res.json();

      if (data.error && data.error.status === 401) {
        throw new Error("Not Authorized");
      }

      return data;
    } catch (e) {
      rejectWithValue(e);
      cb();
    }
  }
);

export const addWorkspaceThunk = createAsyncThunk(
  "addWorkspaceThunk/workspace",

  async function ({ space, onClose }, { dispatch }) {
    try {
      const res = await fetch("http://localhost:3005/api/v1/workspaces/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: JSON.stringify(space),
      });

      const data = await res.json();

      if (!data.success) {
        onError(data?.message);
        throw new Error(data?.error?.message);
      }

      dispatch(addSpace({ data }));
      onSucces("Workspace was created");
      onClose();
    } catch (e) {
      console.log(e);
    }
  }
);

export const deleteSpaceThunk = createAsyncThunk(
  "deleteSpaceThunk/workspace",
  async function ({ _id }, { dispatch }) {
    try {
      const res = await fetch(
        `http://localhost:3005/api/v1/workspaces/${_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Cant delete");
      }

      dispatch(deleteSpace({ _id }));
    } catch (e) {
      console.log(e);
    }
  }
);

export const editSpaceThunk = createAsyncThunk(
  "editSpaceThunk/workspace",

  async function ({ space, _id, onClose }, { dispatch }) {
    try {
      const res = await fetch(
        `http://localhost:3005/api/v1/workspaces/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
          body: JSON.stringify(space),
        }
      );

      const data = await res.json();

      if (!data.success) {
        onError(data?.message);
        throw new Error(data?.error?.message);
      }

      dispatch(changeSpace({ data }));
      onSucces("Workspace was changed");
      onClose();
    } catch (e) {
      console.log(e);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const setLoader = (state) => {
  state.status = "loading";
  state.error = null;
};

const workspaceSlice = createSlice({
  name: "workspace",
  initialState: {
    workspaces: null,
    status: null,
    error: null,
    user: null,
  },
  reducers: {
    deleteSpace(state, action) {
      const id = action.payload._id;
      const workspaces = state.workspaces.filter((space) => space._id !== id);
      return {
        ...state,
        workspaces,
      };
    },
    addSpace(state, action) {
      const { data } = action.payload.data;
      const workspaces = [data, ...state.workspaces];

      return {
        ...state,
        workspaces,
      };
    },
    changeSpace(state, action) {
      const { data } = action.payload.data;
      const workspaces = state.workspaces.map((space) => {
        if (space._id === data._id) {
          return data;
        }
        return space;
      });

      return {
        ...state,
        workspaces,
      };
    },
  },
  extraReducers: {
    [registerUserThunk.rejected]: setError,
    [registerUserThunk.pending]: setLoader,
    [registerUserThunk.fulfilled]: (state, action) => {
      state.status = "resolved";
    },
    [loginUserThunk.rejected]: setError,
    [loginUserThunk.pending]: setLoader,
    [loginUserThunk.fulfilled]: (state, action) => {
      state.status = "resolved";
    },
    [getWorkSpacesThunk.rejected]: setError,
    [getWorkSpacesThunk.pending]: setLoader,

    [getWorkSpacesThunk.fulfilled]: (state, action) => {
      const { data, user } = action.payload;
      state.status = "resolved";
      state.workspaces = data;
      state.user = user;
    },
  },
});

const { deleteSpace, addSpace, changeSpace } = workspaceSlice.actions;

export default workspaceSlice.reducer;
