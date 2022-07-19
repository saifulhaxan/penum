import React from 'react'
// import Avatar from '../../assets/images/dumyAvatar.png';
// import postedImg from '../../assets/images/postedImg.png';
import { Button, Dropdown, Menu, Space } from 'antd';
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <button className='notUiBtn'>
            1st menu item
          </button>
        ),
      },
      {
        key: '2',
        label: (
          <button className='notUiBtn'>
            2nd menu item
          </button>
        ),
      },
      {
        key: '3',
        label: (
          <button className='notUiBtn'>
            3rd menu item
          </button>
        ),
      },
    ]}
  />
);

const DropDown = () => (
  <Dropdown overlay={menu} placement="bottom" className='customDropdown'>
    <Button><i class="bi bi-three-dots-vertical"></i></Button>
  </Dropdown>
);
const PostedComp = (props) => {
  return (
    <div className='postWrapper'>
      <div class="d-flex  align-items-center justify-content-between">
        <div className='d-flex align-items-center mb-3'>
          <img alt="userAvatar" src={props.data.userAvatar} className="userAvatar me-2" />
          <div>
            <p className='userName mb-0'>{props.data.userName}</p>
            <p className='postedDate mb-0'>{props.data.postedTime}</p>
          </div>
        </div>
        <DropDown />
      </div>
      {/* posted content */}
      <div className='postedContent'>
        <img alt="posted content" src={props.data.posted_Img} className="w-100" />
      </div>
      {/* likes comment options */}
      <div className='optionsWrap w-lg-50 my-3'>
        <div> <span>0</span> Likes </div>
        <div> <span>0</span> Hearts </div>
        <div> <span>0</span> Comments </div>
      </div>
      <hr />
      {/* More Featues */}
      <div className='featuresUi'>
        <div className='optionBoxes like'>
          <div className='iconWrap me-2 primBlue'>
            <i class="bi bi-hand-thumbs-up"></i>
          </div>
          <span className='d-lg-block d-none'>Like</span>
        </div>
        <div className='optionBoxes heart'>
          <div className='iconWrap me-2 primRed'>
            <i class="bi bi-heart"></i>
          </div>
          <span className='d-lg-block d-none'>Heart</span>
        </div>
        <div className='optionBoxes comment'>
          <div className='iconWrap me-2 primYellow'>
            <i class="bi bi-messenger"></i>
          </div>
          <span className='d-lg-block d-none'>Comment</span>
        </div>
        <div className='optionBoxes share'>
          <div className='iconWrap me-2 primGreen'>
            <i class="bi bi-send-fill"></i>
          </div>
          <span className='d-lg-block d-none'>Share</span>
        </div>
      </div>
    </div>
  )
}

export default PostedComp