import { createSlice } from "@reduxjs/toolkit";


const userIsActiveSlice= createSlice({
    name:'userIsActive',
    initialState:false,
    reducers:{
        userIsActiveToFalse:(state,action)=>{state=false},
        userIsActiveToTrue:(state,action)=>{state=true},
    }
})


export const {userIsActiveToFalse,userIsActiveToTrue}= userIsActiveSlice.actions
export default userIsActiveSlice.reducer;



