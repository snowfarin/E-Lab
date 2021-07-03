import { React, useState, history } from 'react'
import { Modal, InputGroup, Navbar, Nav, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import Logo2 from '../../../img/pngegg.png'
import star from '../../../img/Star.jpeg'
import botany from '../../../img/Botany.jpeg'


function ZoologyHeader() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = () => {
        console.log(username, password, 'submit')
        if (username !== '' && password !== '') {
            if (username === 'admin' && password === 'admin#123') {
                window.location.replace('/addCategory')
                localStorage.setItem('login', true)
            }
            else {
                Swal.fire({
                    icon: 'warning',
                    text: 'Check Username & Password'
                })
            }

        } else {
            Swal.fire({
                icon: 'warning',
                text: 'Please Fillout All Required Field'
            })
        }

    }

    return (
        <>
            <Navbar variant="dark" sticky="top" style={{ backgroundColor: '#093266', height: '120px', opacity:'0.8' }}>
                <Navbar.Brand > <img src={Logo2} /> </Navbar.Brand>
                <Navbar.Brand style={{ fontSize: '1.2em' }}>Department of Biotechnology<br/>Ministry of Science & Technology<br/>Government of India</Navbar.Brand>
                {/* <Navbar.Brand > <img src={botany} /> </Navbar.Brand> */}
                <Nav className="ml-auto">
                <Navbar.Brand style={{ fontSize: '1.2em' }}>Marian Star Center<br/>St.Mary's College(Autonomous)<br/>Re-accredited by NAAC with 'A+' Grade<br/>Thoothukudi-628 001</Navbar.Brand>
                <Navbar.Brand style={{marginTop:20}}> <img src={star} /> </Navbar.Brand>
                    <Link className='nav-link' to="/"><i class="fa fa-home" style={{padding:'5px',marginTop:50}}></i>Home</Link>
                    {/* <Link className='nav-link' onClick={handleShow}><i class="fa fa-sign-in" style={{padding:'5px',marginTop:50}}></i>Admin Login</Link> */}
                </Nav>

            </Navbar>
            {/* <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header style={{ color: '#E70647', textAlign: 'center' }} closeButton>
                    <Modal.Title > Admin Login </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ width: '80%', margin: 'auto' }}>
                        <Row style={{ padding: '15px' }}>
                            <InputGroup>
                                <InputGroup.Prepend >
                                    <InputGroup.Text style={{ backgroundColor: 'white' }}><i class="fa fa-user-o" style={{ color: '#E70647', fontSize: '1.2em', }} ></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </InputGroup>
                        </Row>
                        <Row style={{ padding: '15px' }}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text style={{ backgroundColor: 'white' }}><i class="fa fa-key" style={{ color: '#E70647', fontSize: '1.2em', }}></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </InputGroup>
                        </Row>
                        <Row className='d-flex justify-content-center' style={{ padding: '15px' }}>
                            <Button variant="danger" onClick={onSubmit}> Login </Button>
                        </Row>
                    </div>


                </Modal.Body>
            </Modal> */}
        </>
    )
}

export default ZoologyHeader
