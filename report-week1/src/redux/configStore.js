import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import word from "./modules/reducer";

const rootReducer = combineReducers({ word });

const store = createStore(rootReducer);

export default store;
