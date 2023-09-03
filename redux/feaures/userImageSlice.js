import { createSlice } from "@reduxjs/toolkit";


const UserImageSlice= createSlice({
    name:'userImage',
    initialState: {value:''},
    reducers:{
        setUserImageSlice:(state,acion)=>{
            state.value=acion.payload
        }
    }
})

export const {setUserImageSlice}= UserImageSlice.actions;
export default UserImageSlice.reducer;


