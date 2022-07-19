/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 02/07/2022 - 20:07:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 02/07/2022
    * - Author          : Saif
    * - Modification    : 
**/
import React from 'react'
import {Link} from 'react-router-dom'
import { MyConnection } from '../connections/MyConnection'

export const RightSidebar = () => {
  return (
    <div className='rightSideBar'>
      <div className='d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap'>
          <div className='titleBox'>
              <h4 className='mb-0'>My connections</h4>
          </div>
          <div className='viewMore'>
             <Link to="/" className="primaryBtn">See More</Link>
          </div>
      </div>
         {/* connections list  */}
         <>
          <MyConnection />
         </>
    </div>
  )
}
