import React, { Component } from 'react'
import Header from '../tools/Header'
import { Card, Row, Col, Form, Button, } from 'react-bootstrap'
import Category from '../tools/Category'
import { categoryRef } from '../../../firebase/Firebase'
import firebaseLooper from '../../../firebase/FirebaseLooper'
import Swal from 'sweetalert2'

export class AddCategory extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            count: 3,
            lab: '',
            submit: false,
            edit: false,
            zoologyCategory: '',
            botanyCategory: '',
            herbariumCategory:''
        }
        this.state = this.initialState;
    }

    componentDidMount() {
        categoryRef.doc('botany').get().then((res) => {
            const botanyCategory = res.data()
            this.setState({ botanyCategory })
            console.log(botanyCategory)
        })
        categoryRef.doc('zoology').get().then((res) => {
            const zoologyCategory = res.data()
            this.setState({ zoologyCategory })
            console.log(zoologyCategory)
        })
        categoryRef.doc('herbarium').get().then((res) => {
            const herbariumCategory = res.data()
            this.setState({ herbariumCategory })
            console.log(herbariumCategory)
        })
    }

    onChange = (name, value) => {
        value.length!==0 && 
        this.setState({ [name]: value, submit: 'success', }, () => {
            console.log( name,value)
            categoryRef.doc(`${this.state.lab}`).update({ [name]: value })
            Swal.fire({
                icon: 'success',
                text: 'Category Names Added Successfully'
            }).then(() => window.location.reload())
        })

    }


    categoryLoop = () => {
        const { count } = this.state;
        const list = []
        for (let i = 0; i < count; i++) {
            list.push(
                <Category
                    name={`Category${i + 1}`}
                    value={this.state[`Category${i + 1}`]}
                    submit={this.state.submit}
                    onChange={this.onChange}
                    edit={this.state.edit}
                />
            )
        }
        return list
    }

    onSubmit = () => {
      
        this.setState({ submit: true })
    }

    onEdit = () => {
        const { lab, botanyCategory, zoologyCategory, herbariumCategory } = this.state
        if( lab !== '') {
            if (lab==='botany') {
                Object.keys(botanyCategory).forEach((key, i) => {
                    this.setState({ [key]: botanyCategory[key], edit: true, count: i + 1 })
                })
            }
            else if(lab==='herbarium'){
                Object.keys(herbariumCategory).forEach((key, i) => {
                    this.setState({ [key]: herbariumCategory[key], edit: true, count: i + 1 })
                }) 
            }
            else{
                Object.keys(zoologyCategory).forEach((key, i) => {
                    this.setState({ [key]: zoologyCategory[key], edit: true, count: i + 1 })
                }) 
            }
        }else{
            Swal.fire({
                icon: 'warning',
                text: 'Please select Laboratory'
            })
        }
        
           
        //  this.setState({ edit : true })

    }

    render() {
        const { count, submit, lab } = this.state;
        console.log(count, 'count')

        return (
            <div>
                <Header />
                <div className='container'>
                    <Card >
                        <Card.Header style={{ backgroundColor: '#D60643', color: 'white' }}>
                            <p style={{ fontSize: '1.3em', fontWeight: '600' }}> Add Category</p>
                        </Card.Header>
                        <Card.Body>
                            <Row className='d-flex justify-content-center' >
                                <Form.Group as={Row} >
                                    <Form.Label > Select Laboratory </Form.Label>
                                    <Col>
                                        <Form.Control as='select' name='lab' value={lab} onChange={e => this.setState({ lab: e.target.value })}   >
                                            <option value='' disabled > </option>
                                            <option value='botany' > Botany </option>
                                            <option value='herbarium' > Herbarium </option>
                                            <option value='zoology' >Zoology </option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Row>
                            <Form>
                                {this.categoryLoop()}
                            </Form>
                            <Row className='d-flex justify-content-center' style={{ marginTop: '20px' }}>
                                <Button variant='danger' style={{ margin: '10px' }} onClick={(e) => this.setState({ count: count + 1 })}> <i class="fa fa-plus" style={{ padding: '5px' }} aria-hidden="true"></i>  Category</Button>
                                <Button variant='danger' style={{ margin: '10px' }} onClick={(e) => this.setState({ count: 0 }, () => this.onEdit())}> Edit</Button>
                                <Button variant='danger' style={{ margin: '10px' }} onClick={this.onSubmit}> Save</Button>
                                <Button variant='danger' style={{ margin: '10px' }} onClick={(e) => this.setState({ count: count - 1 })}> <i class="fa fa-minus" style={{ padding: '5px' }} aria-hidden="true"></i>  Category</Button>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        )
    }
}

export default AddCategory
