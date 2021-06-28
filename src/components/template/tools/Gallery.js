import React, { Component } from 'react'
import { Row, Col, Button, Carousel } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { categoryRef, contentRef, imagesRef } from '../../../firebase/Firebase'
import { firebaseLooper } from '../../../firebase/FirebaseLooper'
import ContentPage from '../pages/ContentPage'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Place from '../../../img/place1.jpg'

export class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filterData: this.props.filterData,
            imageData: '',
        }
    }
    componentDidMount() {
        let count = Math.round(this.props.filterData.length / 3)
        this.setState({ count })
    }
    onClick = (e, data) => {
        this.props.setImageData(data)
        window.scrollTo(0, 0);
    }

    render() {
        const { filterData } = this.state
        // console.log(this.props.filterData,'data')
        return (
            <>

                <div className='gallery' style={{position:'relative', bottom:'80px'}} >
                    {this.props.filterData !== undefined &&
                        <Row style={{ margin: 'auto', width: "100%", padding: '50px', }}>
                            {this.props.filterData.map((data) =>
                                <Col lg={3} sm={4}>
                                    <div className='frame1'>
                                        <figure >
                                            <LazyLoadImage 
                                             placeholderSrc={Place}
                                            // effect='blur'
                                            // id={data.imageName} 
                                            src={data.imageUrl} 
                                            onClick={e => this.onClick(e, data)} 
                                            width='100%' 
                                            height='350px' />
                                        </figure >
                                        <div >{data.name} </div>
                                    </div>
                                </Col> )}
                        </Row>
                    }
                  
                </div>
            </>
        )
    }
}

export default Gallery
