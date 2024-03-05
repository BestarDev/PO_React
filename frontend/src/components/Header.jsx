import React from 'react'
import { MenuOutlined, MoonOutlined, SettingOutlined } from '@ant-design/icons'
import { Image } from 'react-bootstrap'
import avatar from '../assets/images/avatar.png'

const Header = ({onShow, show}) => {
  return (
    <div className="header-container d-flex ps-3
        border-bottom align-items-center">
        <MenuOutlined onClick={onShow} className={`hamburger-icon ${show && 'icon-show'}`}/>
        <div className='fs-5 d-flex gap-4 ms-auto h-100 align-items-center'>
            <MoonOutlined />
            <SettingOutlined />
            <div className='bg-body-tertiary h-100 align-items-center d-flex px-3 gap-3 border-start'>
                <Image src={avatar} alt='User' width={30} height={30}/>
                <span>Afsal Zain</span>
            </div>
        </div>
    </div>
  )
}

export default Header