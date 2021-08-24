import React from 'react';
import st from './App.module.scss';
import {Header} from "./page/Header/Header";
import {Sidebar} from "./page/Sidebar/Sidebar";
import {Route, Switch} from "react-router-dom";
import {MainPage} from "./page/Main/MainPage";
import {SearchPage} from "./page/Search/SearchPage";

export const App = () => {
  return (
   <div className={st.wrapper}>
      <Header/>
      <main className={st.page}>
         <Sidebar/>
         <div className={st.wrapper__main}>
            <Switch>
            <Route exact path="/" render={() => <MainPage/>}/>
            <Route path="/address" render={() => <SearchPage/>}/>
         </Switch>
         </div>
      </main>
   </div>
  );
}

