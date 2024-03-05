import { Modal } from 'antd'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const AddNewModal = ({children, title, footer, closable, centered, width}) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Button className='bg-success' onClick={() => setShowModal(true)}>Add New</Button>
            <Modal
                title = {title}
                open = {showModal}
                footer = {footer}
                onCancel = {() => setShowModal(false)}
                closable = {closable}
                centered = {centered}
                width={width}
            >
                {children}
            </Modal>
        </>
    )
}

AddNewModal.defaultProps = {
    title: null,
    footer: null,
    closable: false,
    centered: true,
    width: '400px'
}

export default AddNewModal