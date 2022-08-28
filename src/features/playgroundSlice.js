import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPlaygrounds = createAsyncThunk('fetchPlayground/fetch', async (_, thunkAPI) => {
  try {
    const res = await fetch('http://localhost:3030/playground');
    const data = res.json()
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.res.data.error)
  }
});

const playgroundSlice = createSlice({
  name: 'playground',
  initialState : {
    loading: false,
    error: null,
    playgrounds: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaygrounds.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPlaygrounds.fulfilled, (state, action) => {
        state.playgrounds = action.payload
        state.loading = true
        state.error = null
      })
      .addCase(fetchPlaygrounds.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

  }
})

export default playgroundSlice.reducer