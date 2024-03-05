import { BackwardOutlined } from '@ant-design/icons'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

const index = () => {
  return (
    <div className='m-3'>
      <div className='d-flex gap-3'>
        <Link to={-1}>
          <Button className='btn-secondary'>
            <BackwardOutlined className='me-2'/>
            Go Back
          </Button>
        </Link>
        <h3 className='m-0'>Settings</h3>
      </div>
      <div className='mt-3'>
        <Outlet />
      </div>
    </div>
  )
}

export default index