import { configureStore } from "@reduxjs/toolkit";
import Setting from './reducers/setting'
const store = configureStore({
    reducer:{
        Setting
    }

})


export default store;