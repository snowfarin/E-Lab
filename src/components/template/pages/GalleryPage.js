import { React, useState } from 'react'
import Header from '../tools/Header'
import LabSlider from '../tools/LabSlider'
import Filter from '../tools/Filter'
import Footer from '../tools/Footer'
import ImageContent from '../tools/ImageContent'

function GalleryPage(props) {
    const [imageData, setImageData] = useState('')
    const [filterData, setFilterData] = useState('')
    const { lab } = props
    
    return (
        <>
            { imageData === '' ?
                <div >
                    <Header />
                    <LabSlider lab={lab} />
                    <Filter lab={lab} imageData={imageData} setFilterData={setFilterData} setImageData={setImageData} />
                    <Footer />
                </div> :
                <div style={{ backgroundColor: '#E5F1FF' }}>
                    <Header />
                    <ImageContent imageData={imageData} filterData={filterData} setImageData={setImageData} />
                    <Footer />
                </div>
            }
        </>

    )
}

export default GalleryPage
