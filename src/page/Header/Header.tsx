import React from "react";
import st from "./Header.module.scss";
import {LogoSvg} from "../../assets/icon/header/LogoSVG";
import {UserSvg} from "../../assets/icon/common/UserSvg";


export const Header: React.FC = () => {

   return (
      <header className={st.header}>
         <div className={st.header__logo}>
            <LogoSvg/>
            <h2>Wrench CRM</h2>
         </div>
         <div className={st.header__user}>
            <div className={st.header__userIcon}>
               <UserSvg width='22' height='25' stroke='white'/>
            </div>
            <div className={st.header__userName}>Имя Фамилия</div>
         </div>
      </header>
   )
}
