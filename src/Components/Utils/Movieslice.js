import { createSlice } from "@reduxjs/toolkit";


const movielist = createSlice({
    name:"Movies",
    initialState:{
        currentmovielist: null,
        videolist: null
    },
    reducers:{
        addmovies:(state,action)=>{
             state.currentmovielist=action.payload;
        },
        addvideos:(state,action)=>{
            state.videolist=action.payload;
        }
    }
});


export const {addmovies,addvideos} = movielist.actions;
export default movielist.reducer;