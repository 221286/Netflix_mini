import React, { useRef } from 'react'
import { openai } from './Utils/OpenAI_Initialization';
import { INSTRUCTION1, INSTRUCTION2 } from './Utils/Constants';
import { FetchGPTmovies } from './CustomHooks/usefetchGPTmovies';
import { useDispatch, useSelector } from 'react-redux';
import { addGPTmovies } from './Utils/SearchGPTslice';

const SearchGPTbar = ({SearchGPTplaceholder, Search}) => {
    const dispatch = useDispatch();
    const Searchmovies= useRef();
    const Modes = useSelector(store=>store.mode?.darkmode);
    const setmode = Modes ? 'bg-black': 'bg-white';
    const useSearchmovies = async()=>{
         const Search_query = INSTRUCTION1+Searchmovies.current.value+INSTRUCTION2;
         

        const Search_result = await openai?.chat?.completions.create({
            messages: [{ role: 'user', content: Search_query }],
            model: 'gpt-3.5-turbo',
          });
        const array_searchresults = Search_result?.choices[0]?.message?.content.split(",");
        const promisearray=array_searchresults.map(movie=>FetchGPTmovies(movie));
        const final_result = await Promise.all(promisearray);
        dispatch(addGPTmovies({movie:final_result,searchgptresult:array_searchresults}));


    }
      
     

  return (
    <div className={'w-10/12 md:w-6/12 h-24 text-[10px] md:text-base   '+setmode+' absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2'}>
      <form onSubmit={e=>e.preventDefault()} className='mt-6'>
        <input type="text" placeholder={SearchGPTplaceholder} ref={Searchmovies} className='w-7/12 p-3 mx-5 border border-solid border-black'/>
        <input type="button" value={Search} onClick={useSearchmovies}
        className='text-white w-1/4 md:w-1/3 p-3 bg-red-600 border border-solid border-black rounded-lg cursor-pointer' />

      </form>
      </div>
  )
}

export default SearchGPTbar
