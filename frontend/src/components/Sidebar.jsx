import React from 'react'
import { Image, Row } from 'react-bootstrap'
import logo from '../assets/images/icon.png'
import { MenuOutlined } from '@ant-design/icons'
import SidebarItems from '../assets/items/menu'
import { Menu, ConfigProvider, Select } from 'antd'

const Sidebar = ({onHide, hidden}) => {
  return (
    <>
        <div className='d-flex justify-content-between align-items-center p-3 sidebar-header pe-4'>
            <div className="d-flex gap-1 align-items-center">
                <Image src={logo} alt='PO' width={'60px'} height={'60px'}/>
                {!hidden && <h4 className='text-center m-0'>PURCHASE<br/>ORDER</h4>}
            </div>
            <MenuOutlined onClick={onHide} className={`hamburger-icon ${!hidden && 'icon-show'}`}/>
        </div>
        <ConfigProvider theme={{
            components: {
                Menu: {
                    iconSize: 20,
                    itemHeight: 45,
                    iconMarginInlineEnd: 20
                },
            },
        }}>
            <div>
                <Menu mode="inline" 
                    items={SidebarItems} 
                    className="bg-transparent border-0"
                    style={{width: '100%'}}/>
            </div>
        </ConfigProvider>
        {!hidden && (
            <div className="position-absolute bottom-0 bg-success w-100 text-center text-white">
                <div>Primary Location</div>
                <Select style={{width: '96%'}} defaultValue='demo'>
                    <Select.Option value="demo">Into Plane</Select.Option>
                </Select>
            </div>
        )}
    </>
  )
}

export default Sidebar