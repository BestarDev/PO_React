import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import '../assets/styles/budget.css'
import moment from 'moment'
import { Modal, Form, Input, Select } from 'antd'

const ModalForm = ({open, hideHandler}) => {
    const saveHandler = () => {
        hideHandler();
    }
    return (
        <Modal
            title = {<h4>Budget &nbsp;&gt;&nbsp; Add New</h4>}
            open={open}
            footer={null}
            onCancel={hideHandler}
            closable={false}
        >
            <Form name="basic"
                onFinish={() => {}} onFinishFailed={() => {}}
                initialValues={{
                    date: moment().format('MMM D, YYYY'),
                    time: moment().format('h:mm'),
                    year: moment().format('YYYY')
                }}
                autoComplete="off" className='mt-4'
            >
                <div className="d-flex gap-2">
                    <Form.Item label="Date" name="date" colon={false} className='mb-2'>
                        <Input disabled style={{width: '100px', textAlign:'center'}}/>
                    </Form.Item>
                    <Form.Item label="Time" name="time" colon={false} className='mb-2'>
                        <Input disabled style={{width: '80px', textAlign: 'center'}}/>
                    </Form.Item>
                </div>
                <Form.Item label="Financial Year" name="year" colon={false} className='m-0 p-0 mb-2' style={{fontSize: '20px'}}>
                    <Input style={{width: '80px', textAlign: 'center'}}/>
                </Form.Item>
                <Form.Item label="Select Location" name="location" colon={false} className='m-0 p-0'>
                    <Select style={{width: '350px'}} suffixIcon={null}>
                        <Select.Option>Tank Farm1</Select.Option>
                    </Select>
                </Form.Item>
                
            </Form>
        </Modal>
    )
}

const Budget = () => {
    const [tab, setTab] = useState(1);
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div>
                <Button className={`border-0 tab-button ${tab === 1 ? 
                    'bg-light text-black' :
                    'bg-transparent text-primary'}`}
                    onClick={() => setTab(1)}>Current Year Budget</Button>
                <Button className={`border-0 tab-button ${tab === 2 ? 
                    'bg-light text-black' :
                    'bg-transparent text-primary'}`}
                    onClick={() => setTab(2)}>Report</Button>
            </div>
            <div className='mt-3'>
            {tab === 1 ? (
                <Button className='bg-success' onClick={() => setOpen(true)}>Add New</Button>
            ): (
                <h3>This is Report Page</h3>
            )}
            </div>

            <ModalForm open={open} hideHandler={() => setOpen(false)}/>
        </div>
    )
}

export default Budget