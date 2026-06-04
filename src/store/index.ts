import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
