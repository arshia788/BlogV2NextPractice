import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:false
}

const loggedSlice=createSlice({
    name:'logged',
    initialState,
    reducers:{
        checkingLogged:(state,action)=>{
            state.value = action.payload
        }
    }
});



export const {checkingLogged}= loggedSlice.actions;
export default loggedSlice.reducer
