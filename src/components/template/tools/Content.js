import { React, useEffect, useState } from 'react'
import { Row, Col, Button, Carousel } from 'react-bootstrap'
import Img4 from '../../../img/img-04.jpg'
import Img5 from '../../../img/img-05.jpg'
import Img3 from '../../../img/04.jpg'

function Content(props) {
    const { setLab } = props

    return (
        <div style={{ position: 'relative', bottom: '80px' }}>
            <div className='filter' >
                <Row className='d-flex justify-content-center'>
                    <p style={{ fontSize: '5em' }}> E - MUSEUM </p>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit,sed do </p>
                    <p> Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit,sed do </p>
                    <p> Lorem ipsum dolor sit  adipiscing elit, sed do consectetur adipiscing elit.</p>
                </Row>
                <hr style={{ color: 'grey', backgroundColor: 'white', width: '60%' }}></hr>
                <Row className='d-flex justify-content-center' >
                    <Button variant='danger' onClick={(e) => setLab('botany')} style={{ margin: '10px' }} > Botany MUSEUM <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                    <Button variant='danger' onClick={(e) => setLab('herbarium')} style={{ margin: '10px' }}> Herbarium MUSEUM <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                    <Button variant='danger' onClick={(e) => setLab('zoology')} style={{ margin: '10px' }}> Zoology MUSEUM <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                </Row>
            </div>
            <div style={{  padding: '50px' }}>
                <Row style={{ margin: 'auto', width: "90%", }}>
                    <Col lg='6'>
                        <div>
                            <figure >
                                <img src={Img5} width='100%' height='auto' />
                            </figure >
                        </div>
                    </Col>
                    <Col lg='6'>
                        <Row className='d-flex justify-content-center' style={{ padding: '50px ' }}>
                            <p style={{ fontSize: '3em' }}> BOTANY MUSEUM </p>
                            <p style={{ fontSize: '1.3em', textAlign: 'center' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                adipiscing elit, sed do consectetur adipiscing elit,sed do,Lorem ipsum dolor sit amet,
                                consectetur.
                                adipiscing elit,sed do </p>
                            <Button variant='danger' onClick={(e) => setLab('botany')}> View MUSEUM <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ margin: 'auto', width: "90%", }}>
                    <Col lg='6'>
                        <Row className='d-flex justify-content-center' style={{ padding: '50px ' }}>
                            <p style={{ fontSize: '3em' }}> HERBARIUM MUSEUM </p>
                            <p style={{ fontSize: '1.3em', textAlign: 'center' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                adipiscing elit, sed do consectetur adipiscing elit,
                                consectetur. sed do consectetur adipiscing elit,sed do,Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do.</p>
                            <Button variant='danger' onClick={(e) => setLab('herbarium')}> View MUSEUM <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                        </Row>
                    </Col>
                    <Col lg='6'>
                        <div>
                            <figure >
                                <img src={Img3} width='100%' height='auto' />
                            </figure >
                        </div>
                    </Col>
                </Row>
                <Row style={{ margin: 'auto', width: "90%", }}>
                    <Col lg='6'>
                      
                        <div>
                            <figure >
                                <img src={Img4} width='100%' height='auto' />
                            </figure >
                        </div>
                    </Col>
                    <Col lg='6'>
                    <Row className='d-flex justify-content-center' style={{ padding: '50px ' }}>
                            <p style={{ fontSize: '3em' }}> ZOOLOGY MUSEUM </p>
                            <p style={{ fontSize: '1.3em', textAlign: 'center' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                adipiscing elit, sed do consectetur adipiscing elit,
                                consectetur. sed do consectetur adipiscing elit,sed do,Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do.</p>
                            <Button variant='danger' onClick={(e) => setLab('zoology')}> View MUSEUM <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                        </Row>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Content
