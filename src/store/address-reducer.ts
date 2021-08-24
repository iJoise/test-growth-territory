import {AppThunkType} from "./store";
import {addressApi, SuggestionsType} from "../api/address-api";

enum ACTION_APP {
   SET_ADDRESS_INFO = 'appReducer/SET_ADDRESS_INFO',
}

type InitialStateType = {
   addressList: SuggestionsType[]
}

const initialState: InitialStateType = {
   addressList: []
}

export const addressReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
   switch (action.type) {
      case ACTION_APP.SET_ADDRESS_INFO:
         return {...state, addressList: action.payload};
      default:
         return state;
   }
}

export const setAddress = (address: SuggestionsType[]) =>
   ({type: ACTION_APP.SET_ADDRESS_INFO, payload: address} as const);


export const getAddressInfo = (value: string): AppThunkType => async dispatch => {
   try {
      const res = await addressApi.getAddress(value)
      dispatch(setAddress(res))
   } catch (err) {
      console.warn(err);
   }
}

type ShowPromoPageActionType = ReturnType<typeof setAddress>

export type AppActionType =
   | ShowPromoPageActionType


