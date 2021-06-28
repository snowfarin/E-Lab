import React, { Component } from 'react'
import Header from '../tools/Header'
import Footer from '../tools/Footer'


import ImageContent from '../tools/ImageContent'

export class ContentPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div 
            style={{backgroundColor:'#E5F1FF', }}
            >
                <Header />
                <ImageContent />
                <Footer />
            </div>
        )
    }
}

export default ContentPage
