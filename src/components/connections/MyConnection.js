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
import Avatar from '../../assets/images/dumyAvatar.png';
const MyConnection = () => {
  return (
    <>
      <div className='connectionList'>
        <div className='d-flex justify-content-between aligns-items-center flex-wrap my-3'>
          <div className='userInfo'>
            <div className='d-flex gap-15 align-items-center'>
              <div className='userImage'>
                <img alt="userAvatar" src={Avatar} className="userAvatar me-2" />
              </div>
              <div className='userTitle mt-1'>
                <h4 className='mb-0'>jearmy silbey</h4>
              </div>
            </div>
          </div>
          <div className='chatBox mt-2'>
            <div className='chatBtn'>
              <button className='notUiBtn'><i className='bi bi-chat'></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MyConnection;