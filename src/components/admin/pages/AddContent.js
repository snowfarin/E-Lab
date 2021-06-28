import React, { Component } from 'react'
import Header from '../tools/Header'
import { Card, Row, Col, Form, Button, } from 'react-bootstrap'
import Content from '../tools/DataContent'
import CategorySelect from '../tools/CategorySelect'
import { categoryRef } from '../../../firebase/Firebase'
import { firebaseLooper } from '../../../firebase/FirebaseLooper'
import Swal from 'sweetalert2'
import Category from '../tools/Category'

export class AddCategory extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            count: 1,
            submit: false,
            categoryObj: {
                lab: 'botany',
            },
            lab: '',
        }
        this.state = this.initialState
    }
    componentDidMount() {

        categoryRef.doc(`botany`).get().then((res) => {
            const botanyCategory = res.data()
            this.setState({ botanyCategory, category: botanyCategory })
            console.log(botanyCategory, 'botanyCategory')
        })

        categoryRef.doc(`zoology`).get().then((res) => {
            const zoologyCategory = res.data()
            this.setState({ zoologyCategory })
            console.log(zoologyCategory, 'zoologyCategory')
        })
        categoryRef.doc(`bot`).get().then((res) => {
            const botCategory = res.data()
            this.setState({ botCategory })
            console.log(botCategory, 'botCategory')
        })
    }

    labChange = (e) => {
        const { name, value } = e.target

        value === 'botany' ? this.setState({ category: this.state.botanyCategory }) :  
        value === 'zoology' ? this.setState({ category: this.state.zoologyCategory }) :
        this.setState({ category: this.state.botCategory })
        this.onChange(name, value)
    }

    onChange = (name, value) => {
        if (value !== '') {
            this.setState(prevState => {
                return {
                    categoryObj: {
                        ...prevState.categoryObj,
                        [name]: value
                    }
                }
            })
        }

    }

    CategorySelectLoop = () => {
        const list = []

        Object.keys(this.state.category).forEach((key, i) => {
            list.push(
                <CategorySelect
                    category={this.state.category[`Category${i + 1}`]}
                    name={`Category${i + 1}`}
                    value={this.state.categoryObj[`Category${i + 1}`]}
                    onChange={this.onChange}
                    submit={this.state.submit}
                />)
        })
        return list
    }

    DataContentLoop = () => {
        const { count } = this.state;
        const list = []
        for (let i = 0; i < count; i++) {
            list.push(<Content
                submit={this.state.submit}
                categoryObj={this.state.categoryObj}
                submitSuccess={this.submitSuccess}

            />)
        }
        return list
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.setState({ submit: true }, () => {
            Swal.fire({
                icon: 'success',
                text: 'Species Added Successfully'
            })
        })
    }

    submitSuccess = () => {
        this.setState({ submit: false })
    }

    render() {
        const { category, count, categoryObj } = this.state;
        return (
            <div>
                <Header />
                <div className='container'>
                    <Card >
                        <Card.Header style={{ backgroundColor: '#D60643', color: 'white' }} >
                            <p style={{ fontSize: '1.3em', fontWeight: '600' }}> Add Data</p>
                        </Card.Header>
                        <Card.Body>
                            <Form style={{ margin: '0px 40px' }}>
                                <Row className='d-flex justify-content-center' >
                                    <Form.Group as={Row} >
                                        <Form.Label > Select Laboratory </Form.Label>
                                        <Col>
                                            <Form.Control as='select' name='lab' value={categoryObj['lab']} defaultValue='' onChange={this.labChange} required >
                                                <option value='' disabled > </option>
                                                <option value='botany' > Botany </option>
                                                <option value='bot' >Bot </option>
                                                <option value='zoology' >Zoology </option>                                              
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                </Row>
                                <Row >
                                    {category !== undefined && this.CategorySelectLoop()}
                                </Row>
                                {this.DataContentLoop()}

                                <Row className='d-flex justify-content-center' style={{ marginTop: '20px' }}>
                                    <Button variant='danger' style={{ margin: '10px' }} onClick={(e) => this.setState({ count: count + 1 })}> <i class="fa fa-plus" style={{ padding: '5px' }} aria-hidden="true"></i>  Species</Button>
                                    <Button variant='danger' type='submit' style={{ margin: '10px' }} onClick={this.onSubmit}> Save</Button>
                                    <Button variant='danger' style={{ margin: '10px' }} onClick={(e) => this.setState({ count: count - 1 })}> <i class="fa fa-minus" style={{ padding: '5px' }} aria-hidden="true"></i>  Species</Button>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default AddCategory
