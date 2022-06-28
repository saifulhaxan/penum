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
    <div className="row">
        <>
        <Header />
        </>
      <div className="col-md-3">
      <p>Chutto</p>
      </div>
      <div className="col-md-6">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OurPanum />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      </div>
      <div className="col-md-3">
      <p>Chaato</p>
      </div>
    </div>
  )
}
