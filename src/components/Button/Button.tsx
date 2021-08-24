import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import st from "./Button.module.scss";
import {SearchSvg} from "../../assets/icon/common/SearchSVG";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonPropsType = DefaultButtonPropsType & {}


export const Button: React.FC<ButtonPropsType> = (
   {
      className,
      children,
      ...restProps
   }
) => {

   return <button {...restProps} className={st.button}>
      <SearchSvg fill='white' />
      {children}
   </button>
}
