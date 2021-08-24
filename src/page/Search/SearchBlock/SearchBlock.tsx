import React, {useState} from "react";
import {Field} from "../../../components/Field/Field";
import {Button} from "../../../components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getAddressInfo} from "../../../store/address-reducer";
import {AppRootStateType} from "../../../store/store";


export const SearchBlock: React.FC = () => {
   const isFetching = useSelector<AppRootStateType, boolean>(state => state.address.isFetching)
   const dispatch = useDispatch()
   const [city, setCity] = useState('');

   const searchCityHandler = async () => {
      dispatch(getAddressInfo(city))
   }

   return (
      <div style={{display: 'flex'}}>
         <Field
            value={city}
            onChangeText={setCity}
            onEnter={searchCityHandler}
         />
         <Button
            onClick={searchCityHandler}
            disabled={isFetching}
         >Поиск</Button>
      </div>
   )
}
