import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postImage = createAsyncThunk('image/post', async (data, thunkAPI) => {
  const file = new FormData()
  for (let i = 0; i < data.length; i++) {
    file.append('plgImage', data[i]);
  }
  try {
    const res = await fetch('http://localhost:3030/upload-img', {
      method: 'post',
      body: file
    })
    const imageId = await res.json();
    return thunkAPI.fulfillWithValue(imageId);
  } catch (e) {
    thunkAPI.rejectWithValue(e.message);
  }
})

const imageSlice = createSlice({
  name: 'slice',
  initialState: {
    currentImageId: ''
  },
  extraReducers: (builder) => {
    builder 
      .addCase(postImage.fulfilled, (state, action) => {
        state.currentImageId = action.payload;
      })
  }
})

export default imageSlice.reducer;