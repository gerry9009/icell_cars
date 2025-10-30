import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { carsReducer } from "./cars";

const rootReducer = combineReducers({
  auth: authReducer,
  cars: carsReducer,
});

export default rootReducer;
