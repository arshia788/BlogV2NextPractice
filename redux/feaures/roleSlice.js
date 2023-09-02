import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:4
}


const roleSlice=createSlice({
    name:'role',
    initialState,
    reducers:{
        setRoleValue:(state,action)=>{
            state.value = action.payload
        }
    }
})


export const{setRoleValue}= roleSlice.actions;
export default roleSlice.reducer;





