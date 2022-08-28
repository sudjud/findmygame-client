import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getSports = createAsyncThunk('get/sports', async (_, thunkAPI) => {
  try {
    const res = await fetch('http://localhost:3030/sport');
    const data = await res.json();
    return thunkAPI.fulfillWithValue(data);
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
})

const sportSlice = createSlice({
  name: 'sport',
  initialState: {
    sports: [],
    error: null,
    loader: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSports.fulfilled, (state, action) => {
        state.sports = action.payload;
        state.error = null;
        state.loader = false;
      })
      .addCase(getSports.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getSports.rejected, (state, action) => {
        state.error = action.payload;
        state.loader = false;
      })
  }
})

export default sportSlice.reducer;