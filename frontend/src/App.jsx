import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import OffcanvasSidebar from "./components/OffcanvasSidebar"
import {Row, Col} from 'react-bootstrap'
import { useState } from "react"

const App = () => {
  const [sidebarHidden, setSidebarHidden] = useState(false);
  return (
    <Row>
      <Col className={`sidebar-container bg-body-tertiary vh-100 p-0 
        ${sidebarHidden && 'sidebar-hidden'}`} sm='auto'>
        <Sidebar onHide={() => setSidebarHidden(true)} hidden={sidebarHidden}/>
        {/* <OffcanvasSidebar /> */}
      </Col>
      <Col className="p-0">
        <Header onShow={() => setSidebarHidden(false)} show={sidebarHidden}/>
        <div className='p-3'>
          <Outlet />
        </div>
      </Col>
    </Row>
  )
}

export default App
