import { combineReducers, createStore } from "redux";
import { user } from "./user";

const LoginReducer = combineReducers({ user });
export const store = createStore(LoginReducer);
