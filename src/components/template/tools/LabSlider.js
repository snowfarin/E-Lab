import { React, useState, useEffect } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'

function Slider(props) {
    const { lab } = props

    return (
        <div style={{ position: 'relative', bottom: '80px' }}>
            { lab === 'botany' ?
                <div className="parallax" id='img1'>
                    <div >
                        <p style={{ fontSize: '4em' }}>BOTANY MUSEUM</p>
                        <p style={{ fontSize: '1.5em' }}>The example above used pixels to set the height of the image. If you want to use percent, for example 100%, to make the image </p>
                    </div>

                </div> :
                lab === 'herbarium' ?
                <div className="parallax" id='img3'>
                    <div >
                        <p style={{ fontSize: '4em' }}>HERBARIUM MUSEUM</p>
                        <p style={{ fontSize: '1.5em' }}>The example above used pixels to set the height of the image. If you want to use percent, for example 100%, to make the image </p>
                    </div>

                </div> :
                <div className="parallax" id='img2' >
                    <div >
                        <p style={{ fontSize: '4em' }}>ZOOLOGY MUSEUM</p>
                        <p style={{ fontSize: '1.5em' }}>The example above used pixels to set the height of the image. If you want to use percent, for example 100%, to make the image </p>
                    </div>

                </div>
            }
            {/* { lab === 'botany' ? 
            <Carousel >
                <Carousel.Item>
                    <img
                        style={{ height: 'auto', width: '100%' }}
                        className="d-block w-100"
                        src={Img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{ bottom: '30%', textAlign: 'start', width: '45%' }} >
                        <div style={{ fontSize: '5em', fontFamily: '-moz-initial' }} > BOTANY MUSEUM</div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> : 
             <Carousel >
             <Carousel.Item>
                 <img
                     style={{ height: 'auto', width: '100%' }}
                     className="d-block w-100"
                     src={Img4}
                     alt="Second slide"
                 />
                 <Carousel.Caption style={{ bottom: '30%', textAlign: 'start', width: '45%' }} >
                     <div style={{ fontSize: '5em', fontFamily: '-moz-initial' }} > ZOOLOGY MUSEUM</div>
                 </Carousel.Caption>
             </Carousel.Item>
         </Carousel> } */}
        </div>
    )
}

export default Slider
