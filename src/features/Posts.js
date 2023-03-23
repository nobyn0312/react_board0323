import {crateSlice} from "@reduxjs/toolkit"
import { PostsData } from "../DummyData"

export const postSlice =crateSlice({
  name:"posts",
  initialState:{value:PostsData},
  reducers: {
    addPost:(state,action) =>{
      state.value.push(action.payload)
    }
  }
})

export default postSlice.reducer;