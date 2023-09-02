import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:false
}

const userIsActiveSlice= createSlice({
    name:'userIsActive',
    initialState,
    reducers:{
        userIsActiveToFalse:(state,action)=>{state.value=false},
        userIsActiveToTrue:(state,action)=>{state.value=true},
    }
})


export const {userIsActiveToFalse,userIsActiveToTrue}= userIsActiveSlice.actions
export default userIsActiveSlice.reducer;



