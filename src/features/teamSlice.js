import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const createTeam = createAsyncThunk(
  "post/team",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/teams", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().auth.token}`,
        },
        body: JSON.stringify(data),
      });
      const newTeam = await res.json();
      if (!newTeam.error) toast.success("Команда создана!");
      return thunkAPI.fulfillWithValue(newTeam);
    } catch (e) {
      toast.error("Какая-то ошибка");
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchTeams = createAsyncThunk(
  "fetch/teams",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/teams");
      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const joinToTeam = createAsyncThunk(
  "join/team",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3030/join-to-team/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.token}`,
        },
      });
      const data = await res.json();
      if (data.message) {
        toast.warning(data.message);
        return thunkAPI.rejectWithValue(data.message);
      }
      toast.success("Вы вошли в команду");
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const logoutTeam = createAsyncThunk(
  "team/logoutTeam",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:3030/exit-team/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().auth.token}`,
        },
        body: JSON.stringify(),
      });
      const data = await response.json();
      if (data === "Команда удалена!") {
        return thunkAPI.dispatch(fetchTeams());
      }
      if (data.message) {
        toast.warning(data.message);
        return thunkAPI.rejectWithValue(data.message);
      }
      toast.success("Вы покинули команду");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const teamSlice = createSlice({
  name: "team",
  initialState: {
    teams: [],
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTeam.fulfilled, (state, action) => {
        state.teams = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(createTeam.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTeam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.teams = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTeams.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(joinToTeam.fulfilled, (state, action) => {
        state.teams = state.teams.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload;
          }
          return item;
        });
        state.loading = false;
        state.error = null;
      })
      .addCase(joinToTeam.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(joinToTeam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(logoutTeam.fulfilled, (state, action) => {
        state.teams = state.teams.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload;
          }
          return item;
        });
      });
  },
});

export default teamSlice.reducer;
