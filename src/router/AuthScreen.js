/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 26/06/2022 - 18:12:41
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/06/2022
    * - Author          : Saif
    * - Modification    : 
**/
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Login} from '../screen/Login/Login'
import {SignUp} from '../screen/Login/SignUp'

export const AuthScreen = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  )
}
