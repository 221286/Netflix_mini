import { configureStore } from "@reduxjs/toolkit";
import Userslice from "./Userslice";
import movielist from "./Movieslice"
import Langslice from "./Langslice";
import SearchGPTs from "./SearchGPTslice";

const authorization_store = configureStore({


    reducer:{
        app:Userslice,
        movies:movielist,
        lang:Langslice,
        SearchGPT:SearchGPTs

    }
})


export default authorization_store;