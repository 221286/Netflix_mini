import { configureStore } from "@reduxjs/toolkit";
import Userslice from "./Userslice";

const authorization_store = configureStore({


    reducer:{
        app:Userslice,

    }
})


export default authorization_store;