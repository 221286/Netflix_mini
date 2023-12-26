import { MOVIE_API_OPTIONS } from "../Utils/Constants"

 export const FetchGPTmovies =async(movie)=>{

   const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', MOVIE_API_OPTIONS)
   const json = await data.json();
   return json;
    

}