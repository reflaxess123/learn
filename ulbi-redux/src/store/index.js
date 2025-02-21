import { configureStore } from '@reduxjs/toolkit';
import { cashReducer } from './cashReducer';
import { customersReducer } from './customersReducer';

export const store = configureStore({
    reducer: {
        cash: cashReducer,
        customers: customersReducer,
    },
});
