import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false, role: "user" },
    reducers: {
        login(state){
            state.isLoggedIn = true;      //Jab user logged in nahi hai so voh rahega false and when user logs in, so we will call this reducer and it will make it true.
        },
        logout(state){
            state.isLoggedIn = false;
        },
        changeRole(state, action){
            const role = action.payload;    //action joh hai hun frontend se bhej rahe honge. In logged in and logout, we were not sending data from outside but here we are, that's why stae and action.
            state.role = role;              // Basically this action will help us to get data from outside and this reducer will keep the data in the role.
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;