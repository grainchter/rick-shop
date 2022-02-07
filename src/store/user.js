import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        data: {},
        userToken: {},
        error: null,
    },
    reducers: {
        getUser: state => ({
            ...state,
            isLoading: true,
        }),
        isUserLoad: (state, action) => ({
            ...state,
            isLoading: false,
            data: action.payload,
        }),
        token: (state, action) => ({
            ...state,
            isLoading: false,
            userToken: action.payload,
        }),
        userName: (state, action) => ({
            ...state,
            isLoading: false,
            userToken: action.payload,
        })
    }
});

export const { getUser, isUserLoad, token, userName} = slice.actions;
export const getUserData = state => state.user.data;
export const getUserToken = state => state.user.userToken;

export default slice.reducer;