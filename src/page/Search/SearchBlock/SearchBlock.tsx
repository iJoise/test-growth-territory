import React, {useState} from "react";
import {Field} from "../../../components/Field/Field";
import {Button} from "../../../components/Button/Button";
import {useDispatch} from "react-redux";
import {getAddressInfo} from "../../../store/address-reducer";


export const SearchBlock: React.FC = () => {
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
            disabled={false}
         >Поиск</Button>
      </div>
   )
}
