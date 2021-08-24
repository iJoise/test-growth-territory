import {AppThunkType} from "./store";
import {addressApi, SuggestionsType} from "../api/address-api";
import {v1} from "uuid";

enum ACTION_APP {
   SET_ADDRESS_INFO = 'addressReducer/SET_ADDRESS_INFO',
   SET_IS_FETCHING = 'addressReducer/SET_IS_FETCHING'
}

export interface SuggestionsTypeContainsId extends SuggestionsType {
   id: string
}

type InitialStateType = {
   addressList: SuggestionsTypeContainsId[]
   isFetching: boolean
}

const initialState: InitialStateType = {
   addressList: [],
   isFetching: false
}

export const addressReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
   switch (action.type) {
      case ACTION_APP.SET_ADDRESS_INFO:
         return {
            ...state,
            addressList: action.payload.map(a => ({...a, id: v1()}))
         };
      case ACTION_APP.SET_IS_FETCHING:
         return {
            ...state,
            ...action.payload
         }
      default:
         return state;
   }
}

export const setAddress = (address: SuggestionsType[]) =>
   ({type: ACTION_APP.SET_ADDRESS_INFO, payload: address} as const);
export const setIsFetching = (isFetching: boolean) =>
   ({type: ACTION_APP.SET_IS_FETCHING, payload: {isFetching}} as const);


export const getAddressInfo = (value: string): AppThunkType => async dispatch => {
   try {
      dispatch(setIsFetching(true));
      const res = await addressApi.getAddress(value);
      dispatch(setAddress(res));
   } catch (err) {
      console.warn(err);
   } finally {
      dispatch(setIsFetching(false))
   }
}

type SetAddressActionType = ReturnType<typeof setAddress>
type SetIsFetchingActionType = ReturnType<typeof setIsFetching>

export type AppActionType =
   | SetAddressActionType
   | SetIsFetchingActionType


