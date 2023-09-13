import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:''
}

const usernameSlice= createSlice({
    name:'username',
    initialState,
    reducers:{
        setUsername:(state,action)=>{
            state.value = action.payload
        }
    }
});


export const {setUsername}= usernameSlice.actions;
export default usernameSlice.reducer;













