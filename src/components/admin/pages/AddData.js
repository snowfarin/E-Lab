import React, { Component } from 'react'
import Header from '../tools/Header'
import { Card, Row, Col, Form, Button, } from 'react-bootstrap'
import Content from '../tools/DataContent'
import CategorySelect from '../tools/CategorySelect'
import { categoryRef, contentRef, imagesRef } from '../../../firebase/Firebase'
import { firebaseLooper } from '../../../firebase/FirebaseLooper'
import Swal from 'sweetalert2'
import Category from '../tools/Category'
import firebase from 'firebase'

export class AddCategory extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            lab: 'botany',
            name: '',
            speciesClass: '',
            order: '',
            family: '',
            imageUrl: '',
            imageName: '',
            imageFile: '',
            mainContent: '',
            subContent: '',
            category: '',
            categoryObj: '',
        }
        this.state = this.initialState
    }
    componentDidMount() {

        categoryRef.doc(`botany`).get().then((res) => {
            const botanyCategory = res.data()
            this.setState({ botanyCategory, category: botanyCategory })
            console.log(botanyCategory)
        })

        categoryRef.doc(`zoology`).get().then((res) => {
            const zoologyCategory = res.data()
            this.setState({ zoologyCategory })
        })
        categoryRef.doc(`herbarium`).get().then((res) => {
            const herbariumCategory = res.data()
            this.setState({ herbariumCategory })
        })
    }

    onChange = (e) => {
        const { name, value } = e.target
        if (name === 'lab') {
            value === 'botany' ? this.setState({ category: this.state.botanyCategory }) : 
            value === 'zoology' ? this.setState({ category: this.state.zoologyCategory }) :
            this.setState({ category: this.state.herbariumCategory }) 
        }
        this.setState({ [name]: value })
    }

    onCategoryChange = (e) => {
        const { name, value } = e.target
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
                    onChange={this.onCategoryChange}
                />)
        })
        return list
    }

    onChangeImage = (e) => {
        console.log(e.target.files[0])
        this.setState({ imageName: e.target.files[0].name, imageFile: e.target.files[0], imageUrl: URL.createObjectURL(e.target.files[0]) })
    }

    onSubmit = () => {
        const { lab, name, speciesClass, order, family, imageFile, imageName, mainContent, subContent, categoryObj } = this.state;

        if (Object.values(this.state).every(e => e) === true) {

            let keys = Object.keys(categoryObj)
            console.log(categoryObj, lab, 'categoryObj')

            categoryRef.doc(`${lab}Relation`).update({
                ['kingdom']: firebase.firestore.FieldValue.arrayUnion(categoryObj[keys[0]]),
            })

            for (let i = 0; i < keys.length - 1; i++) {
                let key = categoryObj[keys[i]]
                let value = categoryObj[keys[i + 1]]
                console.log(key, value)
                categoryRef.doc(`${lab}Relation`).update({
                    [key]: firebase.firestore.FieldValue.arrayUnion(value),
                })
            }


            const data = categoryObj
            data['lab'] = lab
            data['name'] = name
            data['class'] = speciesClass
            data['order'] = order
            data['family'] = family
            data['imageName'] = imageName
            data['mainContent'] = mainContent
            data['subContent'] = subContent

            Swal.fire({
                title: 'Loading',
                allowEscapeKey: false,
                allowOutsideClick: false,
                timer: 3000,
                onOpen: () => {
                    Swal.showLoading();
                    contentRef.add(data).then(() => {
                        imagesRef.child(imageName).put(imageFile)
                    })
                        .then(() => {
                            Swal.fire({
                                icon: 'success',
                                text: 'Data Added Successfully'
                            }).then(() => {
                                //window.location.reload()
                                this.setState(this.initialState, () => this.componentDidMount())

                            })
                        })
                }
            })
        }else{
            Swal.fire({
                icon: 'warning',
                text: 'Please fillout all fields'
            })
        }

    }

    render() {
        const { lab, name, speciesClass, order, family, imageUrl, imageName, mainContent, subContent, category } = this.state;

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
                                            <Form.Control as='select' name='lab' value={lab} onChange={this.onChange} required >
                                                <option value='' disabled > </option>
                                                <option value='botany' > Botany </option>
                                                <option value='herbarium' > Herbarium </option>
                                                <option value='zoology' >Zoology </option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                </Row>
                                <Row >
                                    {category !== '' && this.CategorySelectLoop()}
                                </Row>
                                <div className='box' >
                                    <Row>
                                        <Col lg='6'>
                                            <Form.Group  >
                                                <Form.Label > Scientific Name </Form.Label>
                                                <Col>
                                                    <Form.Control
                                                        type='text'
                                                        placeholder='Scientific Name'
                                                        name='name'
                                                        value={name}
                                                        onChange={this.onChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                        <Col lg='6'>
                                            <Form.Group  >
                                                <Form.Label > Class </Form.Label>
                                                <Col>
                                                    <Form.Control
                                                        type='text'
                                                        placeholder='Class'
                                                        name='speciesClass'
                                                        value={speciesClass}
                                                        onChange={this.onChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                        <Col lg='6'>
                                            <Form.Group  >
                                                <Form.Label > Order </Form.Label>
                                                <Col>
                                                    <Form.Control
                                                        type='text'
                                                        placeholder='order'
                                                        name='order'
                                                        value={order}
                                                        onChange={this.onChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                        <Col lg='6'>
                                            <Form.Group  >
                                                <Form.Label > Family </Form.Label>
                                                <Col>
                                                    <Form.Control
                                                        type='text'
                                                        placeholder='Family'
                                                        name='family'
                                                        value={family}
                                                        onChange={this.onChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg='4'>
                                            <Form.Group  >
                                                <Form.Label > Species Image </Form.Label>
                                                <Col>
                                                    <Form.Control
                                                        style={{ width: '100%' }}
                                                        type='file'
                                                        onChange={this.onChangeImage}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                        <Col lg='4'>
                                            {imageUrl === '' ? <i class="fa fa-picture-o" style={{ fontSize: '5em' }} ></i> :
                                                <img src={imageUrl} height='150px' width='100%' />}

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group  >
                                                <Form.Label > Main Content </Form.Label>
                                                <Col>
                                                    <Form.Control as='textarea'
                                                        style={{ width: '100%' }}
                                                        type='text'
                                                        placeholder='Main Content'
                                                        name='mainContent'
                                                        value={mainContent}
                                                        onChange={this.onChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group  >
                                                <Form.Label > Sub Content </Form.Label>
                                                <Col>
                                                    <Form.Control as='textarea'
                                                        style={{ width: '100%' }}
                                                        type='text'
                                                        placeholder='Sub Content'
                                                        name='subContent'
                                                        value={subContent}
                                                        onChange={this.onChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                                <Row className='d-flex justify-content-center' style={{ marginTop: '20px' }}>
                                    <Button variant='danger' style={{ margin: '10px' }} onClick={this.onSubmit}> Save</Button>
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
