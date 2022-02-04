import { combineReducers, createStore } from "redux";
import { listsItemReducer } from "./listsItemReducer";

const reducers = combineReducers({
    listsItem: listsItemReducer
})



export let store = createStore(reducers);

window.store = store;