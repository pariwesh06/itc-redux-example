import { configureStore } from "@reduxjs/toolkit";
import slice  from "./reducer";
export default configureStore({
    reducer:{
        counter: slice
    }
});