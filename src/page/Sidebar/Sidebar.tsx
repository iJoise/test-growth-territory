import React, {useEffect, useState} from "react";
import st from "./Sidebar.module.scss";
import {Navigation} from "./Navigation/Navigation";


export const Sidebar: React.FC = () => {

   const [showButton, setShowButton] = useState(false);
   const [openMenu, setOpenMenu] = useState(false);
   const showButtonClass = showButton ? `${st.side__open} ${st.visible}` : `${st.side__open}`;
   const openMenuClass = openMenu ? `${st.side} ${st.active}` : `${st.side}`;

   const resizeWindow = () => {
      if (window.innerWidth <= 768) {
         setShowButton(true)
      } else {
         setShowButton(false)
      }
   }

   const openSidebar = () => {
      setOpenMenu(!openMenu)
   }

   useEffect(() => {
      window.addEventListener("resize", resizeWindow);
      return () => window.removeEventListener("resize", resizeWindow);
   });


   return (
      <aside className={openMenuClass}>
         <h3>Меню</h3>
         <Navigation/>
         <div className={showButtonClass} onClick={openSidebar}/>
      </aside>
   )
}

