import React from "react";
import com from "../style/common.module.scss";


export const Title: React.FC = ({children}) =>
   <h2 className={com.title}>{children}</h2>
