import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../../src/services/usersApi";
import { getEducationVideos } from "../../src/services/api";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await getUser();
    return response;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Gagal mengambil data pengguna"
    );
  }
});

export const fetchEducationList = createAsyncThunk(
  "users/fetchEducatinList",
  async () => {
    try {
      const response = await getEducationVideos();
      return response;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Gagal mengambil data pengguna"
      );
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "users/updateUser",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await updateUser(id, updatedData);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Gagal update user"
      );
    }
  }
);

const initialState = {
  users: [],
  education: [],
  loading: false,
  error: null,
  loggedInUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.loggedInUser = { ...action.payload };
    },
    logout: (state) => {
      state.loggedInUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchEducationList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEducationList.fulfilled, (state, action) => {
        state.loading = false;
        state.education = action.payload;
      })
      .addCase(fetchEducationList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedInUser = action.payload; // Update state Redux dengan user terbaru
      })
      .addCase(updateUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUserLogin, logout } = usersSlice.actions;
export default usersSlice.reducer;
