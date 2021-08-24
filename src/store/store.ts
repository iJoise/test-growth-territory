import {applyMiddleware, combineReducers, createStore} from "redux";
import {AppActionType, addressReducer} from "./address-reducer";
import thunk, {ThunkAction} from "redux-thunk";

const rootReducer = combineReducers({
   address: addressReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>

