import React from 'react'
import { Col, Form } from 'react-bootstrap'

function Input(props) {
    return (
        <>
            <Col lg='3' style={{ margin: '10px 0px' }}>
                <Form.Control
                    name={props.name}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
            </Col>
        </>
    )
}

export default Input
