import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './selected';

export default configureStore({
    reducer: {
        card: cardReducer,
    }
});