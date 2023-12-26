import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API_OPTIONS } from "../Utils/Constants";
import { addNowplayingmovies } from "../Utils/Movieslice";

export const useFetchNowplayingmovies =()=>{
   const check_nowplaying = useSelector(store=>store.movies.Nowplayingmovies);


    const dispatch = useDispatch();

    useEffect(()=>{
      if(!check_nowplaying)
    MOVIELIST();

  },[]);
  const MOVIELIST = async()=>{

    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2', MOVIE_API_OPTIONS)

    


    const json = await data.json();
    
    dispatch(addNowplayingmovies(json?.results));



  }



}