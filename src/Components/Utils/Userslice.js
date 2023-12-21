import { createSlice } from "@reduxjs/toolkit";

const Userslice = createSlice({
    name:"user",
    initialState:null,
    reducers:{
        additem:(state,action)=>{
            return action.payload
        },
        removeitem:(state,action)=>{
            return null
        }
    }
})

export const {additem,removeitem} = Userslice.actions;
export default Userslice.reducer;