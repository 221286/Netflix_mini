import { createSlice } from "@reduxjs/toolkit";


const movielist = createSlice({
    name:"Movies",
    initialState:{
        currentmovielist: null
    },
    reducers:{
        addmovies:(state,action)=>{
             state.currentmovielist=action.payload;
        }
    }
});


export const {addmovies} = movielist.actions;
export default movielist.reducer;