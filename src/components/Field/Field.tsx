import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from "react";
import st from "./Field.module.scss";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type FieldPropsType = DefaultInputPropsType & {
   onChangeText?: (value: string) => void
   onEnter?: () => void
   error?: string
   spanClassName?: string
}


export const Field: React.FC<FieldPropsType> = (
   {
      onChangeText,
      onKeyPress,
      onEnter,
      error,
      ...restProps
   }
) => {
   const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeText && onChangeText(e.currentTarget.value)
   }
   const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
      onEnter
      && e.key === 'Enter'
      && onEnter()
   }

   return <input
      type={'text'}
      onChange={onChangeCallback}
      onKeyPress={onKeyPressCallback}
      className={st.input}
      placeholder='Введите интересующий вас адрес'
      {...restProps}
   />

}