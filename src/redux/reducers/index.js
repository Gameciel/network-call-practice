import { combineReducers } from "@reduxjs/toolkit";
import { loginSessionReducer } from "./loginSession";

export const rootReducer = combineReducers({
	loginSession: loginSessionReducer,
});
