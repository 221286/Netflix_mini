import  { useEffect } from "react";
import { MOVIE_API_OPTIONS } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addvideos } from "../Utils/Movieslice";

export const useFetchcurrentlist =(Movie_ID)=>{
  const dispatch = useDispatch();


  useEffect(()=>{
    Current_video_list();
  },[])

  const Current_video_list =async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+Movie_ID+'/videos?language=en-US', MOVIE_API_OPTIONS);
    const json = await data.json();
    dispatch(addvideos(json?.results));

  }

    



}