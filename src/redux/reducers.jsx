import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    user: [],
    createdUser: [],
    deletedUser: [],
    updatedUser:[],
    currentUserData: {
        id: null,
        name: null,
    }
}

export const user_reducer = createSlice({
    name: "user_reducer",
    initialState: initial_state,
    reducers: {
        createUser: (state, action) => {
            state.user.push(action.payload);
            state.createdUser.push(action.payload);
        },
        currentUser: (state, action) => {
            state.currentUserData.id = action.payload.id;
            state.currentUserData.name = action.payload.name;
        },
        updateUser: (state, action) => {
            state.user.push(action.payload);
            state.updatedUser.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.user.push(action.payload);
            state.deletedUser.push(action.payload);
        },
    }
})

export const {createUser, currentUser, updateUser, deleteUser} = user_reducer.actions; 