import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOVIE_API_OPTIONS } from "../Utils/Constants";
import { addNowplayingmovies } from "../Utils/Movieslice";

export const useFetchNowplayingmovies =()=>{


    const dispatch = useDispatch();

    useEffect(()=>{
    MOVIELIST();

  },[]);
  const MOVIELIST = async()=>{

    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2', MOVIE_API_OPTIONS)

    


    const json = await data.json();
    
    dispatch(addNowplayingmovies(json?.results));



  }



}