import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API_OPTIONS } from "../Utils/Constants";
import { addPopularmovies } from "../Utils/Movieslice";

export const usePopularmovies =()=>{
  const check_Popularmovies = useSelector(store=>store.movies.Popularmovies);

    const dispatch = useDispatch();

useEffect(()=>{
  if(!check_Popularmovies)
    MOVIELIST();

  },[]);
  const MOVIELIST = async()=>{

    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=5', MOVIE_API_OPTIONS)




    const json = await data.json();
    
    dispatch(addPopularmovies(json?.results));



  }


}