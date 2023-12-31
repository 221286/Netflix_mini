import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmovies } from "./Movieslice";
import { MOVIE_API_OPTIONS } from "./Constants";


export const useFetchmovies =()=>{
      const check_fetchstore = useSelector(store=>store.movies.currentmovielist);
    
    const dispatch = useDispatch();

useEffect(()=>{

  if(!check_fetchstore)
     MOVIELIST();

  },[]);
  const MOVIELIST = async()=>{

    const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', MOVIE_API_OPTIONS)



    const json = await data.json();
    
    dispatch(addmovies(json?.results));



  }


}
