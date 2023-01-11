import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api"

const logIn = createAsyncThunk("Auth/login",async(Arg,thunkAPI)=>{
   
    const {rejectWithValue } = thunkAPI;
    try{
       const req= API.otp(Arg).then((res)=>{
         })
        return req

    }catch(err){
        return rejectWithValue(err.message)
    }
})

export default logIn