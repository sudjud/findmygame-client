import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchPlaygrounds = createAsyncThunk('fetchPlayground/fetch', async (_, thunkAPI) => {
  try {
    const res = await fetch('http://localhost:3030/playground');
    const data = res.json()
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.res.data.error)
  }
});

export const postPlayground = createAsyncThunk('add/playground', async (data, thunkAPI) => {
  try {
    const res = await fetch('http://localhost:3030/playground', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const newPlg = await res.json();
    return thunkAPI.fulfillWithValue(newPlg);
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
})

export const rentPlayground = createAsyncThunk('rent/plg', async ({ id, from, to }, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:3030/rent/playground/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${thunkAPI.getState().auth.token}`
      },
      body: JSON.stringify({from, to})
    })
    const newPlg = await res.json();
    if(newPlg.error) {
      toast.error(newPlg.error);
      return thunkAPI.rejectWithValue(newPlg.error);
    }
    toast.success('Ваша бронь принята')
    return thunkAPI.fulfillWithValue(newPlg)
  } catch (e) {
    return thunkAPI.rejectWithValue(e)
  }
})

const playgroundSlice = createSlice({
  name: 'playground',
  initialState : {
    loading: false,
    error: null,
    success: false,
    playgrounds: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaygrounds.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPlaygrounds.fulfilled, (state, action) => {
        state.playgrounds = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(fetchPlaygrounds.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(postPlayground.pending, (state) => {
        state.loading = true
      })
      .addCase(postPlayground.fulfilled, (state, action) => {
        state.playgrounds.push(action.payload)
        state.loading = false;
        state.error = null;
      })
      .addCase(postPlayground.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(rentPlayground.fulfilled, (state, action) => {
        state.playgrounds.map(item => {
          if (item._id === action.payload._id) {
            return action.payload
          }
          return item;
        })
        state.error = null;
        state.loading = false;
      })
      .addCase(rentPlayground.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(rentPlayground.pending, (state, action) => {
        state.loading = true;
      })
  }
})

export default playgroundSlice.reducer