import { createSlice } from '@reduxjs/toolkit';

interface favouriteItem {
    id: number;
    name: string;
}

const initialState: favouriteItem[] = [];

export const favouriteSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addToFavourite: (state, action) => {
            const recipeId = action.payload;
        },
    },
});
