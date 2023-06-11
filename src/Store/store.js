import { configureStore } from "@reduxjs/toolkit"
import Reducer from "../Store/reducer"

export const store=configureStore({
  reducer:{
    user:Reducer
  }
})