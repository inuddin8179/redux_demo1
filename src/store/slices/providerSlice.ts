
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProviderState {
  value: number;
}

const initialState: ProviderState = {
  value: 0,
};

const providerSlice = createSlice({
  name: 'provider',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = providerSlice.actions;
export default providerSlice.reducer;
