import { createSlice } from "@reduxjs/toolkit";

const Langslice = createSlice({
    name:"Language",
    initialState:{
        Lang:"en"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.Lang = action.payload;
        }
    }
})

export const {changeLanguage} = Langslice.actions;
export default Langslice.reducer;