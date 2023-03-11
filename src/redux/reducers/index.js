import { combineReducers } from "@reduxjs/toolkit";
import { loginSessionReducer } from "./loginSession";
import { appSettingReducer } from "./appSetting";

export const rootReducer = combineReducers({
	appSetting: appSettingReducer,
	loginSession: loginSessionReducer,
});
