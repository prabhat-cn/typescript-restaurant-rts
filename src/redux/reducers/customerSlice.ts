import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface CustomerState {
  // all values are here of customer type
  value: Customer[];
}

interface AddFoodToCustomerPayload {
  food: string;
  id: string;
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: 'customers',
  initialState: initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      console.log('add-Customer', action.payload);
      state.value.push(action.payload);
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCustomerPayload>
    ) => {
      console.log('add-food', action.payload);

      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

export default customerSlice.reducer;
