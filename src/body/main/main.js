import { useContext } from 'react';

import "./main.css"
import {  MainComposant } from "../../App"

export const Main = () =>
{
  const elem = useContext(MainComposant)
    return ( <div className="maindiv"><div className="contentdiv">{elem}</div></div> )
}


