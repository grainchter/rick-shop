import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'card',
    initialState: {
        isLoading: false,
        data: {},
        error: null,
    },
    reducers: {
        getCards: state => ({
            ...state,
            isLoading: true,
        }),
        getCardsResolve: (state, action) => ({
            ...state,
            isLoading: false,
            data: action.payload,
        })
    }

});

export const { getCards, getCardsResolve} = slice.actions;

export const getData = state => state.card.data;



export default slice.reducer;