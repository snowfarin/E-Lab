import { React, useState } from 'react'
import Header from '../tools/Header'
import BotanyHeader from '../tools/BotanyHeader'
import ZoologyHeader from '../tools/ZoologyHeader'
import DummyHeader from '../tools/DummyHeader'
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
             lab === 'botany' ?
                <div >
                    <BotanyHeader />
                    <LabSlider lab={lab} />
                    <Filter lab={lab} imageData={imageData} setFilterData={setFilterData} setImageData={setImageData} />
                    <Footer />
                </div> :
                lab === 'herbarium' ?
                <div >
                    <BotanyHeader/>
                    <LabSlider lab={lab} />
                    <Filter lab={lab} imageData={imageData} setFilterData={setFilterData} setImageData={setImageData} />
                    <Footer />
                </div>:
                <div >
                    <ZoologyHeader />
                    <LabSlider lab={lab} />
                    <Filter lab={lab} imageData={imageData} setFilterData={setFilterData} setImageData={setImageData} />
                    <Footer />
                </div>:
                <div style={{ backgroundColor: '#E5F1FF' }}>
                    <DummyHeader />
                    <ImageContent imageData={imageData} filterData={filterData} setImageData={setImageData} />
                    <Footer />
                </div>
            }
        </>

    )
}

export default GalleryPage
