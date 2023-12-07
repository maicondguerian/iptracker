import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callApi from "../../api/fetch-geo-api";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};


export const fetchGeoApi = createAsyncThunk('user/fetchGeo', async (ip) => {
  const response = await callApi(ip);
  return response;
});

const GeoSlice = createSlice({
  name: 'geo',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(fetchGeoApi.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchGeoApi.fulfilled, (state, action) => {
      state.isLoading = false,
      state.data = action.payload
    })
    builder.addCase(fetchGeoApi.rejected, (state, action) => {
      state.isLoading = false,
      state.error = action.error.message
    })
  }
});

export default GeoSlice.reducer;
