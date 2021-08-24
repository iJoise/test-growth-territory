import React, {useState} from "react";
import st from "./Navigation.module.scss";
import {HomeSVG} from "../../../assets/icon/sidebar/HomeSVG";
import {NavLink} from "react-router-dom";
import {SearchSvg} from "../../../assets/icon/common/SearchSVG";
import {TableSvg} from "../../../assets/icon/sidebar/TableSVG";
import {DataSvg} from "../../../assets/icon/sidebar/DataSVG";
import {MapSvg} from "../../../assets/icon/sidebar/MapSVG";
import {WidgetSvg} from "../../../assets/icon/sidebar/WidgetSvg";
import {SetSvg} from "../../../assets/icon/sidebar/SetSVG";
import {ArrowSvg} from "../../../assets/icon/sidebar/ArrowSVG";
import {UserSvg} from "../../../assets/icon/common/UserSvg";
import {FinSvg} from "../../../assets/icon/sidebar/FinSVG";
import {ExitSvg} from "../../../assets/icon/sidebar/ExitSVG";

//p вместо тега а или NavLink здесь в качестве заглушки

export const Navigation: React.FC = () => {

   const [collapsed, setCollapsed] = useState(false);

   const collapsedHandler = () => {
      setCollapsed(!collapsed);
   }

   const arrowActiveClass = collapsed ? st.activeArrow : ''
   const collapsedActiveClass = collapsed ? st.collapsed__active : ''

   return <nav className={st.navigation}>
      <ul className={st.navigation__nav}>
         <li className={st.navigation__list}>
            <div>
               <HomeSVG/>
               <NavLink exact to='/' activeClassName={st.activeLink}>Главная</NavLink>
            </div>
         </li>
         <li className={st.navigation__list}>
            <div>
               <SearchSvg fill='black'/>
               <NavLink to='/address' activeClassName={st.activeLink}>Поиск адресов</NavLink>
            </div>
         </li>
         <li className={st.navigation__list}>
            <div>
               <TableSvg/>
               <p>Таблицы</p>
            </div>
         </li>
         <li className={st.navigation__list}>
            <div>
               <DataSvg/>
               <p>Календарь</p>
            </div>
         </li>
         <li className={st.navigation__list}>
            <div>
               <MapSvg/>
               <p>Карты</p>
            </div>
         </li>
         <li className={st.navigation__list}>
            <div>
               <WidgetSvg/>
               <p>Виджеты</p>
            </div>
         </li>
         <li className={`${st.navigation__list} ${st.navigation__settings}`} onClick={collapsedHandler}>
            <div>
               <SetSvg/>
               <p>Настройки</p><span className={arrowActiveClass}><ArrowSvg/></span>
            </div>
            <ul className={`${st.collapsed} ${collapsedActiveClass}`}>
               <li className={st.navigation__list}>
                  <div>
                     <UserSvg height='35' width='30' stroke='black'/>
                     <p>Настройки профиля</p>
                  </div>
               </li>
               <li className={st.navigation__list}>
                  <div>
                     <FinSvg/>
                     <p>Управление финансами</p>
                  </div>
               </li>
            </ul>
         </li>
         <li className={st.navigation__list}>
            <div>
               <ExitSvg/>
               <p>Выход</p>
            </div>
         </li>
      </ul>
   </nav>
}
