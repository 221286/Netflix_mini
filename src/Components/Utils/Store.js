import { configureStore } from "@reduxjs/toolkit";
import Userslice from "./Userslice";
import movielist from "./Movieslice"

const authorization_store = configureStore({


    reducer:{
        app:Userslice,
        movies:movielist

    }
})


export default authorization_store;