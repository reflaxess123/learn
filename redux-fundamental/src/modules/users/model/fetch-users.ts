import { createAppAsyncThunk } from "../../../shared/redux";

export const fetchUsers = createAppAsyncThunk(
    "users/fetch",
    async (_: { refetch?: boolean } = {}, thunkAPI) =>
        thunkAPI.extra.api.getUsers()
);
