import { createSlice } from "@reduxjs/toolkit";


const movielist = createSlice({
    name:"Movies",
    initialState:{
        currentmovielist: null,
        videolist: null,
        Topratedmovies:null,
        Nowplayingmovies:null,
        Popularmovies:null
    },
    reducers:{
        addmovies:(state,action)=>{
             state.currentmovielist=action.payload;
        },
        addvideos:(state,action)=>{
            state.videolist=action.payload;
        },
        addTopratedmovies:(state,action)=>{
            state.Topratedmovies=action.payload;
        },
        addNowplayingmovies:(state,action)=>{
            state.Nowplayingmovies=action.payload;
        },
        addPopularmovies:(state,action)=>{
            state.Popularmovies =action.payload;
        }
    }
});


export const {addmovies,addvideos,addTopratedmovies,addNowplayingmovies,addPopularmovies} = movielist.actions;
export default movielist.reducer;