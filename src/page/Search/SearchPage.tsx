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
import {SuggestionsType} from "../../api/address-api";

type SearchPagePropsType = {}


export const SearchPage: React.FC<SearchPagePropsType> = () => {

   const address = useSelector<AppRootStateType, SuggestionsType[]>(state => state.address.addressList)

   console.log(address)
   return (
      <div className={com.container}>
         <section className={st.search}>
            <Title>Поиск адресов</Title>
            <SubTitle>Введите интересующий вас адрес</SubTitle>
            <SearchBlock/>
            <SearchResults>
               {
                  address.map(a => <Address address={a.value}/>)
               }
            </SearchResults>
         </section>
      </div>
   )
}
