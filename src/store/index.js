import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './selected';
import userReducer from './user';

export default configureStore({
    reducer: {
        user: userReducer,
        card: cardReducer,
    }
});