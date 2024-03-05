import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import settingsMenu from '../assets/items/settings'
import { Link } from 'react-router-dom'

const Settings = () => {
  return (
    <div className="m-3">
        <h3>Settings</h3>
        <ListGroup className='mt-3'>
            {settingsMenu.map((item, idx) => (
                <ListGroup.Item key={idx} variant='flush' style={{maxWidth: '700px'}}>
                    <Link to={item.link}>
                        <h5 className='ms-3 my-2'>{item.title}</h5>
                    </Link>
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
  )
}

export default Settings