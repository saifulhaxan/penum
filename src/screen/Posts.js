import React from 'react'
import Avatar from '../assets/images/dumyAvatar.png';
import Avatar2 from '../assets/images/avatar2.png';
import postedImg from '../assets/images/postedImg.png';
import postedImg2 from '../assets/images/postedImg2.png';
import { Button, Dropdown, Menu, Space } from 'antd';
import Posted_com from '../components/post/Posted_com'

const PostData = [
  {
    userName: "Anthony jade",
    userAvatar: Avatar2,
    postedTime: '12 minutes ago',
    posted_Img: postedImg,
  },
  {
    userName: "Anthony jade",
    userAvatar: Avatar,
    postedTime: '25 minutes ago',
    posted_Img: postedImg2,
  },
  {
    userName: "Anthony jade",
    userAvatar: Avatar,
    postedTime: '45 minutes ago',
    posted_Img: postedImg,
  },
  {
    userName: "Anthony jade",
    userAvatar: Avatar,
    postedTime: '12 minutes ago',
    posted_Img: postedImg,
  },

]

const posts = () => {
  return (
    <>
      {PostData.map((user, index) => (
        <>
          <Posted_com key={index} data={user} />
        </>

      ))}
    </>
  )
}

export default posts