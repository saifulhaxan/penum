/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 16/07/2022 - 14:04:28
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/07/2022
    * - Author          : Saif
    * - Modification    : 
**/
import React from 'react'

export const MyConnection = () => {
  return (
    <div className='connectionList'>
          <div className='d-flex justify-content-between align-items-center flex-wrap'>
            <div className='userInfo'>
                <div className='d-flex gap-15 align-item-center'>
                    <div className='userImage'>

                    </div>
                    <div className='userTitle'>
                        <h4>Hello</h4>
                    </div>
                </div>
            </div>
            <div className='chatBox'>
                <div className='chatBtn'>
                    <button><i className='bi bi-chat'></i></button>
                </div>
            </div>
          </div>
    </div>
  )
}
