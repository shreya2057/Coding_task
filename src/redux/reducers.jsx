import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    user: {}
}

export const user_reducer = createSlice({
    name: "user_reducer",
    initialState: initial_state,
    reducers: {
        createUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {createUser} = user_reducer.actions; 