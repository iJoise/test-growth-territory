import React from "react";
import st from "./Address.module.scss";


type AddressPropsType = {
   address: string
}


export const Address: React.FC<AddressPropsType> = ({address}) => {

   return <div className={st.address}>{address}</div>
}
