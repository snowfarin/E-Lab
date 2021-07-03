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
                    <p> E-Museum is an online collections software for museum and collecting institutions that integrates seamlessly with colletions management software </p>
                   
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
                            Plants and plant organs were the first exhibits in the Botany Museum. These specimens have been preserved and are on display in the Room. The E-Museum is a comprehensive online resource for non-flowering and flowering plants. This will be an electronic museum with detailed information on each specimen. The E-Museum incorporates the entire collection of all species in a seamless manner. This platform will offer a variety of services.
 </p>
                            <Button variant='danger' onClick={(e) => setLab('botany')}> View MUSEUM <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ margin: 'auto', width: "90%", }}>
                    <Col lg='6'>
                        <Row className='d-flex justify-content-center' style={{ padding: '50px ' }}>
                            <p style={{ fontSize: '3em' }}> HERBARIUM MUSEUM </p>
                            <p style={{ fontSize: '1.3em', textAlign: 'center' }}>
                            The online database is based on information from the herbarium, a selection of dried and pressed plant specimens. This online database will provide detailed information about each plant species, including its common name, systematic location, and taxonomic description. The online data base is a critical first step in resolving concerns of the environment.
</p>
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
                            The Museum houses an extensive collection of scientifically important zoological material. It  harbors animals in fixing fluids, dried or specially prepared animals, stuffed animals, skeletons, hides, and articles made from horns, bones, shells, etc. In Zoological museums scientific research is conducted on the taxonomic description of fauna, zoogeography, variations, comparative morphology and anatomy, and evolution, that is, historical development.</p>
                            <Button variant='danger' onClick={(e) => setLab('zoology')}> View MUSEUM <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                        </Row>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Content
