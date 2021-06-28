import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Logo1 from '../../../img/logo-01.jpeg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <Navbar variant="dark" style={{backgroundColor:'#D60643', height:'70px'}}>
                
                <Navbar.Brand > <img src={Logo1} /> </Navbar.Brand>
                <Navbar.Brand style={{fontSize:'1em'}}> St.Mary's College (Autonomous)</Navbar.Brand>
                <Nav className="m-auto">
                    <Link className='nav-link' to="/addCategory">Add Category</Link>
                    <Link className='nav-link' to="/addContent">Add Data</Link>
                </Nav>
                <Nav className="ml-auto">
                    <Link className='nav-link' to="/logout">Logout</Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default Header
