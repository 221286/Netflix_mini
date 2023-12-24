import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOVIE_API_OPTIONS } from "../Utils/Constants";
import { addPopularmovies } from "../Utils/Movieslice";

export const usePopularmovies =()=>{

    const dispatch = useDispatch();

useEffect(()=>{
    MOVIELIST();

  },[]);
  const MOVIELIST = async()=>{

    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=5', MOVIE_API_OPTIONS)




    const json = await data.json();
    
    dispatch(addPopularmovies(json?.results));



  }


}