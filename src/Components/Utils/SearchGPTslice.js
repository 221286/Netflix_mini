import { createSlice } from "@reduxjs/toolkit";

const SearchGPTslice = createSlice({
    name:"SearchGPT",
    initialState:{
        Searchpageopen:false,
    },
    reducers:{
     togglesearchpage:(state)=>{
        state.Searchpageopen= !state.Searchpageopen;

     }
    }
})

export const {togglesearchpage} = SearchGPTslice.actions;
export default SearchGPTslice.reducer;