import {
    configureStore,
    createSelector,
    ThunkAction,
    UnknownAction,
} from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { CounterId, countersReducer } from "./modules/counters/counters.slice";
import { usersSlice } from "./modules/users/users.slice";
import { api } from "./shared/api";

const extraArgument = {
    api,
};

export const store = configureStore({
    reducer: {
        counters: countersReducer,
        [usersSlice.name]: usersSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: { extraArgument } }),
});

export const selectCounter = (state: AppState, counterId: CounterId) =>
    state.counters[counterId];

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<R = void> = ThunkAction<
    R,
    AppState,
    typeof extraArgument,
    UnknownAction
>;

export const createAppSelector = createSelector.withTypes<AppState>();
export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
