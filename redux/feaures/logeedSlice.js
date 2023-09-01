import { createSlice } from "@reduxjs/toolkit";


const loggedSlice=createSlice({
    name:'logged',
    initialState:false,
    reducers:{
        loggedToFalse:(state)=>{state=false},
        loggedToTrue:(state)=>{state=true},
    }
});


export const {loggedToFalse, loggedToTrue}= loggedSlice.actions;
export default loggedSlice.reducer
