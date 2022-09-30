import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../actions/listSlice";

export default configureStore({
  reducer: {
    todo: listReducer,
  },
});
