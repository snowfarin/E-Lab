import React, { Component } from 'react'
import { Row, Col, Form, Card } from 'react-bootstrap'
import Galley from './Gallery'
import { Link } from 'react-router-dom'
import { categoryRef, contentRef, imagesRef } from '../../../firebase/Firebase'
import reactDom from 'react-dom'

class ImageContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            maxCount: this.props.filterData.length-1,
            list: []
        }
    }
    componentDidMount() {
        const { imageData, filterData } = this.props

        const list = filterData
        const index = list.indexOf(imageData)
        list.splice(index, 1)
        list.unshift(imageData)
        this.setState({ list })
        console.log(list, 'list')
    }
    categoryList = (data) => {
        let categoryList = [];

        let list = []

        for (let i = 0; i < Object.keys(data).length; i++) {
            data[`Category${i}`] !== undefined && categoryList.push(data[`Category${i}`])
        }
        categoryList.map((category, i) =>
            list.push(<>
                <button className='buttonBox' > {category} </button>
                {categoryList.length !== i + 1 && <i class="fa fa-long-arrow-right" style={{ width: '50px', fontSize: '3em', marginTop: '15px' }}></i>}
            </>)
        )
        return list;
    }
    render() {
        const { list, count, maxCount } = this.state

        return (
            <div style={{ backgroundColor: '#E5F1FF', position: 'relative', bottom: '80px', marginTop: '80px', }}>

                <div >
                    <Row className='container'>
                        <Link onClick={e => this.props.setImageData('')} className='backLink' ><i class="fa fa-hand-o-left" style={{ color: 'rgb(231, 33, 76)', fontSize: '3em', }}></i> </Link>
                    </Row>

                    {list.length !== 0 &&
                        <Card style={{ margin: 'auto', width: '80%', padding: '20px', backgroundColor:'#F9F9F9'}}>
                            <Row className='d-flex justify-content-center' >
                                <p style={{ color: 'rgb(231, 33, 76)', fontSize: '4em', textTransform: 'uppercase', }}> {list[count].name}</p>
                            </Row>
                            <Row className='d-flex justify-content-center' >
                                <p style={{ fontSize: '1.2em' }}>Lorem ipsum dolor consectetur adipiscing elit, sed do ipsum dolor sit amet,</p>
                            </Row>
                            <hr style={{ color: 'grey', backgroundColor: 'black', width: '70%', margin: 'auto', marginBottom: '30px' }}></hr>
                            <Row className='d-flex justify-content-center'>
                                <Col lg={8} >
                                    <Card style={{ padding: '30px' }}>
                                        <img src={list[count].imageUrl} style={{ border: 'grey 2px solid' }} />
                                    </Card>
                                </Col>
                            </Row>
                            {count !== 0 && <div style={{ textAlign: 'start' }}>
                                <i class="fa fa-angle-left" id='arrowButton' style={{ bottom: '400px' }} onClick={e => this.setState({ count: count - 1 })}></i>
                            </div>}
                            {count !== maxCount && <div style={{ textAlign: 'end' }}>
                                <i class="fa fa-angle-right" id='arrowButton' style={{ bottom: '450px' }} onClick={e => this.setState({ count: count + 1 })}></i>
                            </div>}
                            <Row style={{ textAlign: 'center', fontSize: '1.7em', fontWeight: '600', margin: '10px' }}>
                                <Col> CLASS : {list[count].class} </Col>
                                <Col> ORDER : {list[count].order} </Col>
                                <Col> FAMILY : {list[count].family}</Col>
                            </Row>

                            <Row id='box'  >
                                {this.categoryList(list[count])}
                            </Row>

                            <Row>
                                <p style={{ fontSize: '1.5em', padding: '15px 30px' }} >{list[count].mainContent} </p>
                            </Row>
                            <Row >
                                <p style={{ fontSize: '1.5em', padding: '15px 30px' }} > {list[count].subContent}  </p>
                            </Row>
                            <div style={{ margin: '30px 0px' }}>
                                <hr style={{ color: 'grey', backgroundColor: 'grey', width: '60%', margin: 'auto', }}></hr>
                            </div>

                        </Card>
                    }
                </div>
            </div>
        )
    }
}

export default ImageContent;