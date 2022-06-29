/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 29/06/2022 - 15:55:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/06/2022
    * - Author          : Saif
    * - Modification    : 
**/
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {OurPanum} from '../screen/OurPanum/OurPanum'
import {Profile} from '../screen/Profile/Profile'
import {Header} from '../components/layout/Header'

export const HomeScreen = () => {
  return (
    <BrowserRouter>
        <div className='main-content-wrapper'>
          <div className='container-fluid p-0'>
            <div className='row g-0'>
              <div className='col-12'>
                <Header />
              </div>
              <div className='col-md-3'>
                <p>left sidebar</p>
              </div>
              <div className='col-md-6'>
                <Routes>
                  <Route path="/" element={<OurPanum />}  />
                  <Route path="/profile" element={<Profile />}  />
                </Routes>
              </div>
              <div className='col-md-3'>
                <p>left sidebar</p>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
  )
}