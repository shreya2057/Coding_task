import { configureStore } from "@reduxjs/toolkit";
import { user_reducer } from "./reducers";

const store = configureStore({
    reducer: {
        [user_reducer.name]: user_reducer.reducer
    }
});

export default store;