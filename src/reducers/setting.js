import { createSlice } from "@reduxjs/toolkit";

const Setting = createSlice({
    name:"Setting",
    initialState:{
        lng:"en",


    },
  reducers:{
    changeToArabic:(state,action)=>{
        state.lng="ar"
     
    },
    changeToEnglish:(state,action)=>{
        state.lng="en"
        
     
    }


  
}
}
)
export const  {changeToArabic ,changeToEnglish} = Setting.actions
export default Setting.reducer