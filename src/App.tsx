import React from 'react';
import st from './App.module.scss';
import {Header} from "./page/Header/Header";
import {Sidebar} from "./page/Sidebar/Sidebar";
import {Redirect, Route, Switch} from "react-router-dom";
import {MainPage} from "./page/Main/MainPage";
import {SearchPage} from "./page/Search/SearchPage";
import {PATH} from "./constants/constants";

export const App = () => {
   return (
      <div className={st.wrapper}>
         <Header/>
         <main className={st.page}>
            <Sidebar/>
            <div className={st.wrapper__main}>
               <Switch>
                  <Route exact path={PATH.MAIN} render={() => <MainPage/>}/>
                  <Route path={PATH.ADDRESS} render={() => <SearchPage/>}/>
                  <Redirect to='/'/>
               </Switch>
            </div>
         </main>
      </div>
   );
}

