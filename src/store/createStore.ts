
import { configureStore } from '@reduxjs/toolkit';
import providerReducer from './slices/providerSlice';

export const createStore = () => {
  return configureStore({
    reducer: {
      provider: providerReducer,
    },
  });
};


export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>;

