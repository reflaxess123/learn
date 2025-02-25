import { configureStore, createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import {
    CounterId,
    countersReducer,
    CountersState,
} from "./modules/counters/counters.slice";
import { initialUsersList, usersSlice } from "./modules/users/users.slice";

export const store = configureStore({
    reducer: {
        counters: countersReducer,
        [usersSlice.name]: usersSlice.reducer,
    },
});

store.dispatch(usersSlice.actions.stored({ users: initialUsersList }));

export const selectCounter = (state: AppState, counterId: CounterId) =>
    state.counters[counterId];

export type AppState = {
    counters: CountersState;
    users: ReturnType<typeof usersSlice.reducer>;
};

export type AppDispatch = typeof store.dispatch;

export const createAppSelector = createSelector.withTypes<AppState>();
export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
