import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ReservationState {
  // when add value then pass string of array
  value: string[];
}

const initialState: ReservationState = {
  // value: never[],
  // value: ['Celina Jetly'],
  value: [],
};

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState: initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      console.log('add-Reservation', action.payload);

      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
