import React from 'react';
import st from './App.module.scss';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Route, Switch} from "react-router-dom";
import {MainPage} from "./components/Main/MainPage";
import {SearchPage} from "./components/Search/SearchPage";

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

