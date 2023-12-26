export const BACKGORUND_IMAGE ="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
export const HEADER_LOGO_IMAGE ="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const MOVIE_API_OPTIONS  = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_API,
    }
  };

  export const LIST_CARD_IMAGE ="https://image.tmdb.org/t/p/w500";

  export const SUPPORTED_LANGUAGE =[{
    identifier:"en",
    name:"English"
  },
  {
    identifier:"Hindi",
    name:"हिंदी"
  },
  {
    identifier:"Tamil",
    name:"தமிழ்"
  },{
    identifier:"Arabic",
    name:"عربي"
  },
  {
    identifier:"Urdu",
    name:"اردو"
  }];

  export const OPEN_AI_API_KEY = process.env.REACT_APP_OPEN_API;
  export const INSTRUCTION1= "Act as a movie reccomendation system and suggest some movies for the query";
  export const INSTRUCTION2= ". Only give me the names of top 7 movies that are comma seperated for example DIL,HUM,HUM TUM,INDIAN,CHERNOBYL. I just need it ot be comma sperated and no n1. or  n2. I don't want anything other then movies no statement";
  