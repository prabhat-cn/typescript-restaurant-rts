import { configureStore } from '@reduxjs/toolkit';
import reservationSlice from './reducers/reservationSlice';
import customerState from './reducers/customerSlice';

export const store = configureStore({
  reducer: {
    reservations: reservationSlice,
    customers: customerState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
