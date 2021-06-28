import { React, useState, useEffect } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import {Link, Redirect} from 'react-router-dom'
import Img1 from '../../../img/img-07.jpg'
import Img3 from '../../../img/img-02.jpg'
import I1 from '../../../img/03.jpg'

function Slider(props) {
    const { setLab } = props
    return (
        <div style={{ position: 'relative', bottom: '80px' }}>
            <Carousel >
                <Carousel.Item  interval={2000} >
                    <img
                        style={{ height: 'auto', width: '100%' }}
                        className="d-block w-100"
                        src={Img3}
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{ bottom: '30%', textAlign: 'start', width: '45%' }} >
                        <div style={{ fontSize: '3em', fontFamily: '-moz-initial' }} >ST.MARY'S COLLEGE (AUTONOMOUS)</div>
                        <Button id='main-button' variant='danger' size="lg" onClick={(e) => setLab('botany')}>View Botany Museum <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  interval={2000} >
                    <img
                        style={{ height: 'auto', width: '100%' }}
                        className="d-block w-100"
                        src={I1}
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{ bottom: '30%', textAlign: 'start', width: '45%' }} >
                        <div style={{ fontSize: '3em', fontFamily: '-moz-initial' }} >ST.MARY'S COLLEGE (AUTONOMOUS)</div>
                        <Button id='main-button' variant='danger' size="lg" onClick={(e) => setLab('herbarium')}>View Herbarium Museum  <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  interval={2000}  >
                    <img
                        style={{ height: 'auto', width: '100%' }}
                        className="d-block w-100"
                        src={Img1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ bottom: '30%', textAlign: 'start', width: '45%' }} >
                        <div style={{ fontSize: '3em', fontFamily: '-moz-initial' }} >ST.MARY'S COLLEGE (AUTONOMOUS)</div>
                        <Button id='main-button' variant='danger' size="lg" onClick={(e) => setLab('zoology')}> View Zoology Museum <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
