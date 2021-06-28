import React from 'react'
import { Card, Row, Col, Form, Button, } from 'react-bootstrap'

function CategorySelect(props) {

    let Value;
    props.value === undefined ? Value = '' : Value = props.value

    return (
        <>
            <Col sm='6'  >
                <Form.Group as={Row} >
                    <Form.Label > Select {props.name} </Form.Label>
                    <Col>
                        <Form.Control as='select' name={props.name} value={Value} onChange={props.onChange} style={{ width: '80%' }}  >
                            <option value=''  > </option>
                            {props.category.map((name, i) => <option key={i} value={name} > {name} </option>)}
                        </Form.Control>
                    </Col>
                </Form.Group>
            </Col>
        </>
    )
}

export default CategorySelect
