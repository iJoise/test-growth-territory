import React from "react";
import st from "./Search.module.scss";
import com from "../../style/common.module.scss";

type SearchPagePropsType = {
   
}


export const SearchPage: React.FC<SearchPagePropsType> = () => {

   return (
      <div className={com.container}>
         <section className={st.search}>
            <h2 className={com.title}>Поиск адресов</h2>
            <h3 className={com.subTitle}>Введите интересующий вас адрес</h3>

         </section>
      </div>
   )
}
