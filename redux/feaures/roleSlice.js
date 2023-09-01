import { createSlice } from "@reduxjs/toolkit";

const roleSlice=createSlice({
    name:'role',
    initialState:4,
    reducers:{
        setRoleValue:(state,action)=>{

            // in payload misheh on number ke miad inja.
            // agar create beshe user 3 miad va admin 1 , ....
            state=action.payload
        }
    }
})


export const{setRoleValue}= roleSlice.actions;
export default roleSlice.reducer;





