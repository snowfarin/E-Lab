import React, { Component } from 'react'
import { Card, Row, Col, Form, Button, } from 'react-bootstrap'
import Input from '../tools/Input'

export class Category extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            count: 3,
        }
        this.state = this.initialState;
    }
    componentDidMount(){
        console.log(this.props.edit, 'componentdidmount')
        if( this.props.edit === true && this.props.value !== undefined ){
            this.props.value.map((value, i)=>{
                this.setState({ [`${this.props.name} name${i+1}`] : value, count:i+1 })
            })
        }
        
    }
    componentDidUpdate() {
        if (this.props.submit === true) {
            let array = []
            for (let i = 0; i < this.state.count; i++) {
                (this.state[`${this.props.name} name${i + 1}`] !== undefined && this.state[`${this.props.name} name${i + 1}`] !== '') && array.push(this.state[`${this.props.name} name${i + 1}`])
            }
            this.props.onChange(this.props.name, array)
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    inputLoop = () => {
        const { count } = this.state;
        const list = []
        for (let i = 0; i < count; i++) {
            list.push(<Input name={`${this.props.name} name${i + 1}`} value={this.state[`${this.props.name} name${i + 1}`]} placeholder={`Enter Name${i + 1}`} onChange={this.onChange} />)
        }
        return list
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <div style={{ fontSize: '1.1em', fontWeight: '500' }}> {this.props.name} Names</div>
                <Row>
                    {this.inputLoop()}
                    <Button variant='danger' style={{ margin: '10px' }} onClick={(e) => this.setState({ count: count + 1 })}> <i class="fa fa-plus" aria-hidden="true"></i> </Button>
                    <Button variant='danger' style={{ margin: '10px' }} onClick={(e) => this.setState({ count: count - 1 })}> <i class="fa fa-minus" aria-hidden="true"></i> </Button>
                </Row>
            </div>
        )
    }
}

export default Category
