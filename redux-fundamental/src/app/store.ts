import { configureStore } from "@reduxjs/toolkit";
import { countersReducer } from "../modules/counters/counters.slice";
import { usersSlice } from "../modules/users/users.slice";

import { api } from "../shared/api";
import { router } from "./router";

export const extraArgument = {
    api,
    get router() {
        return router; // Используем геттер, чтобы избежать раннего доступа
    },
};

export const store = configureStore({
    reducer: {
        counters: countersReducer,
        [usersSlice.name]: usersSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: { extraArgument } }),
});
