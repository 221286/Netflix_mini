import { createSlice } from "@reduxjs/toolkit";

const modeslice = createSlice({
    name:"checkmode",
    initialState:{
        darkmode:true,
    },
    reducers:{
        changemode:(state)=>{
            state.darkmode=!state.darkmode;

        }
    }
})


export const {changemode} = modeslice.actions;
export default modeslice.reducer;