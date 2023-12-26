import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API_OPTIONS } from "../Utils/Constants";
import { addTopratedmovies } from "../Utils/Movieslice";

export const useFetchTopmovies=() =>{
      const check_Topmovies= useSelector(store=>store.movies.Topratedmovies)
    const dispatch = useDispatch();

useEffect(()=>{
  !check_Topmovies && MOVIELIST();
    

  },[]);
  const MOVIELIST = async()=>{

    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=32', MOVIE_API_OPTIONS)




    const json = await data.json();
    
    dispatch(addTopratedmovies(json?.results));



  }



}