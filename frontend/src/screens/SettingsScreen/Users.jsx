import React from 'react'
import AddNewModal from '../../components/AddNewModal'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Input, InputNumber, Select } from 'antd'
import location from '../../assets/data/location'

const Users = () => {
  return (
    <AddNewModal width={'450px'}>
      <Form onSubmit={() => {}} >
        <Row className='align-items-center my-2'>
          <Col>
            <h5 className='m-0'>User First Name:</h5>
          </Col>
          <Col>
            <Input />
          </Col>
        </Row>
        <Row className='align-items-center mb-2'>
          <Col>
            <h5 className='m-0'>User Last Name:</h5>
          </Col>
          <Col>
            <Input />
          </Col>
        </Row>
        <Row className='align-items-center mb-2'>
          <Col>
            <h5 className='m-0'>User Email:</h5>
          </Col>
          <Col>
            <Input />
          </Col>
        </Row>
        <Row className='align-items-center mb-2'>
          <Col>
            <h5 className='m-0'>User Location:</h5>
          </Col>
          <Col>
            <Select className='w-100'>
              {location.map((item,idx) => (
                <Select.Option key={item.code}>{item.name}</Select.Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row className='align-items-center mb-2'>
          <Col>
            <h5 className='m-0'>User Access:</h5>
          </Col>
          <Col>
            <Select className='w-100'>
            </Select>
          </Col>
        </Row>
        <Row className='align-items-center mb-2'>
          <Col>
            <h5 className='m-0'>User Status:</h5>
          </Col>
          <Col>
            <Select className='w-100'>
            </Select>
          </Col>
        </Row>
        <Row className='align-items-center mb-2'>
          <Col>
            <h5 className='m-0'>User Title:</h5>
          </Col>
          <Col>
            <Select className='w-100'>
            </Select>
          </Col>
        </Row>
        <Row className='align-items-center mb-2'>
          <Col sm={7}>
            <h5 className='m-0'>User PO Approve Limit:</h5>
          </Col>
          <Col sm={5}>
            <InputNumber className='w-100'/>
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col>
            <Button type='submit' className='bg-success px-4'><div className='px-3'>Save</div></Button>
          </Col>
        </Row>
      </Form>
    </AddNewModal>
  )
}

export default Users