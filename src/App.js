/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 26/06/2022 - 18:54:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/06/2022
    * - Author          : Saif
    * - Modification    : 
**/
import React, {useState} from 'react'
import {AuthScreen} from './router/AuthScreen'
import {HomeScreen} from './router/HomeScreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Main.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() { 
  const [abc, setAbc] = useState(false);
  let auth = localStorage.getItem('token')
  // setAbc(auth)
  return (
   <>
   {
    abc ?  <AuthScreen /> : <HomeScreen />
   }
   </>
  );
}

export default App;
