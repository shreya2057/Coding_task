import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    delete_id: null,
    delete_name: null,
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
        },
        selectId: (state, action) => {
            state.delete_id = action.payload.id;
            state.delete_name = action.payload.name;
        }
    }
})

export const {createUser, selectId} = user_reducer.actions; 