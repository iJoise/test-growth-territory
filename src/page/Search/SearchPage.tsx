import React from "react";
import st from "./Search.module.scss";
import com from "../../style/common.module.scss";
import {SearchBlock} from "./SearchBlock/SearchBlock";
import {SearchResults} from "./SearchResults/SearchResults";
import {Title} from "../../components/Title";
import {SubTitle} from "../../components/SubTitle";
import {Address} from "./SearchResults/Address/Address";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {SuggestionsTypeContainsId} from "../../store/address-reducer";


export const SearchPage: React.FC = () => {

   const address = useSelector<AppRootStateType, SuggestionsTypeContainsId[]>(state => state.address.addressList)

   return (
      <div className={com.container}>
         <section className={st.search}>
            <Title>Поиск адресов</Title>
            <SubTitle>Введите интересующий вас адрес</SubTitle>
            <SearchBlock/>
            {
               !!address.length
               && <SearchResults>
                  {
                     address.map(a => <Address address={a.value} key={a.id}/>)
                  }
               </SearchResults>
            }
         </section>
      </div>
   )
}
