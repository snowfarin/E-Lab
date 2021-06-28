import { React, useState, useEffect } from 'react'
import Header from '../tools/Header'
import Slider from '../tools/MainSlider'
import Content from '../tools/Content'
import Footer from '../tools/Footer'
import GalleryPage from './GalleryPage'
import { Redirect } from 'react-router-dom'

function Main() {

    const [lab, setLab] = useState('')
    console.log(lab, 'lab')
    window.scrollTo(0, 0);
    return (
        <div >

            { lab === 'botany' ? <Redirect to='botany' /> :
              lab === 'herbarium' ? <Redirect to='herbarium' /> :
                lab === 'zoology' ? <Redirect to='zoology' /> :
                    <div  style={{backgroundColor:'#E5F1FF'}}>
                        <Header />
                        <Slider setLab={setLab} />
                        <Content setLab={setLab} />
                        <Footer />
                    </div>
            }


        </div>
    )
}

export default Main
