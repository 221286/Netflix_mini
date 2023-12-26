import { createSlice } from "@reduxjs/toolkit";

const SearchGPTslice = createSlice({
    name:"SearchGPT",
    initialState:{
        Searchpageopen:false,
        SearchGPTresult:null,
        SearchGPTmovie:null,
    },
    reducers:{
     togglesearchpage:(state)=>{
        state.Searchpageopen= !state.Searchpageopen;

     },
     addGPTmovies:(state,action)=>{
        const {movie,searchgptresult} = action.payload
        state.SearchGPTmovie= movie;
        state.SearchGPTresult= searchgptresult;

     },
     clearAll:(state)=>{
        state.SearchGPTmovie=null;
        state.SearchGPTresult = null;

     }

    }
})

export const {togglesearchpage,addGPTmovies,clearAll} = SearchGPTslice.actions;
export default SearchGPTslice.reducer;