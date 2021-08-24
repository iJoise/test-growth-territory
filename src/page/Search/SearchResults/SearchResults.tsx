import React from "react";
import st from "./SearchResults.module.scss";
import {Title} from "../../../components/Title";



export const SearchResults: React.FC = ({children}) => {

   return (
      <div className={st.results}>
         <Title>Адреса</Title>
         <div className={st.resultsList}>
            {children}
         </div>
      </div>
   )
}
