import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const asyncIncrement = createAsyncThunk('counter/delayedIncrement', async (payload) => {
  // Simule uma operação assíncrona, substitua por lógica real se necessário
  await new Promise(resolve => setTimeout(resolve, 2000));
  return payload;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.counter += 1;
    },
    decrement: state => {
      state.counter -= 1;
    },
    incrementAmount: (state, action) => {
      state.counter += Number(action.payload);
    },
    decrementAmount: (state, action) => {
      state.counter -= Number(action.payload);
    }
  },
  extraReducers: builder => {
    builder.addCase(asyncIncrement.fulfilled, (state, action) => {
      state.counter += 1;
    });
  }
});

export default counterSlice.reducer;
export const { increment, decrement, incrementAmount, decrementAmount } = counterSlice.actions;
