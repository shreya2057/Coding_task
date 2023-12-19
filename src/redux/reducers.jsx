import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    user: [],
    createdUser: []
}

export const user_reducer = createSlice({
    name: "user_reducer",
    initialState: initial_state,
    reducers: {
        createUser: (state, action) => {
            state.user.push(action.payload);
            state.createdUser.push(action.payload);
        }
    }
})

export const {createUser} = user_reducer.actions; 