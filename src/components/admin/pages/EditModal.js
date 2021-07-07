
import React, { Component,useState } from 'react'
import Header from '../tools/Header'
import { Card, Row, Col, Form, Button,Modal } from 'react-bootstrap'
import Content from '../tools/DataContent'
import CategorySelect from '../tools/CategorySelect'
import { categoryRef, contentRef, imagesRef } from '../../../firebase/Firebase'
import { firebaseLooper } from '../../../firebase/FirebaseLooper'
import Swal from 'sweetalert2'
import Category from '../tools/Category'
import firebase from 'firebase'



// const Edit =(props) => {

//         const initialValues = {
//             lab: 'botany',
//             name: '',
//             speciesClass: '',
//             order: '',
//             family: '',
//             // imageUrl: '',
//             imageName: '',
//             // imageFile: '',
//             mainContent: '',
//             subContent: '',
//             category: '',
//             // categoryObj: '',
//         }
       
//         const [values, setValues] = useState(initialValues) 
        
//         const { dummyblog } = props;
//         if (values.id !== dummyblog.id) {
//           setValues(dummyblog);
//         }

//         // useEffect(() => {  
//         //     if (props.currentId === '')  
//         //         setValues({ ...initialFieldValues })  
//         //     else  
//         //         setValues({  
//         //             ...props.studentObjects[props.currentId]  
//         //         })  
//         // }, [props.currentId, props.studentObjects])  
      
//         const handleInputChange = (event) => {
//             const { name, value } = event.target;
//             setValues({ ...values, [name]: value });
//           };
      
//           const updateItem = () => {
//             const data = {
//               lab: values.lab,
//             name: values.name,
//             class: values.class,
//             order: values.order,
//             family: values.family,
//             // imageUrl: '',
//             imageName: values.imageName,
//             // imageFile: '',
//             mainContent: values.mainContent,
//             subContent: values.subContent,
//             category:values.category,
//             // categoryObj: '',
//             };
        
//             contentRef.doc(values.id).update(data)
//               .then(() => {
//                 console.log("The data was updated successfully!");
//               })
//               .catch((e) => {
//                 console.log(e);
//               });
//           };

//         return (
//             <div>
//             {values ? (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Edit
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form style={{ margin: '0px 40px' }}>
//                                 <Row className='d-flex justify-content-center' >
//                                     <Form.Group as={Row} >
//                                         <Form.Label > Select Laboratory </Form.Label>
//                                         <Col>
//                                             <Form.Control as='select' name='lab' value={values.lab} onChange={handleInputChange} required >
//                                                 <option value='' disabled > </option>
//                                                 <option value='botany' > Botany </option>
//                                                 <option value='herbarium' > Herbarium </option>
//                                                 <option value='zoology' >Zoology </option>
//                                             </Form.Control>
//                                         </Col>
//                                     </Form.Group>
//                                 </Row>
//                                 <Row >
//                                     {/* {category !== '' && this.CategorySelectLoop()} */}
//                                 </Row>
//                                 <div className='box' >
//                                     <Row>
//                                         <Col lg='6'>
//                                             <Form.Group  >
//                                                 <Form.Label > Scientific Name </Form.Label>
//                                                 <Col>
//                                                     <Form.Control
//                                                         type='text'
//                                                         placeholder='Scientific Name'
//                                                         name='name'
//                                                         value={values.name}
//                                                         onChange={handleInputChange}
//                                                     />
//                                                 </Col>
//                                             </Form.Group>
//                                         </Col>
//                                         <Col lg='6'>
//                                             <Form.Group  >
//                                                 <Form.Label > Class </Form.Label>
//                                                 <Col>
//                                                     <Form.Control
//                                                         type='text'
//                                                         placeholder='Class'
//                                                         name='speciesClass'
//                                                         value={values.class}
//                                                         onChange={handleInputChange}
//                                                     />
//                                                 </Col>
//                                             </Form.Group>
//                                         </Col>
//                                         <Col lg='6'>
//                                             <Form.Group  >
//                                                 <Form.Label > Order </Form.Label>
//                                                 <Col>
//                                                     <Form.Control
//                                                         type='text'
//                                                         placeholder='order'
//                                                         name='order'
//                                                         value={values.order}
//                                                         onChange={handleInputChange}
//                                                     />
//                                                 </Col>
//                                             </Form.Group>
//                                         </Col>
//                                         <Col lg='6'>
//                                             <Form.Group  >
//                                                 <Form.Label > Family </Form.Label>
//                                                 <Col>
//                                                     <Form.Control
//                                                         type='text'
//                                                         placeholder='Family'
//                                                         name='family'
//                                                         value={values.family}
//                                                         onChange={handleInputChange}
//                                                     />
//                                                 </Col>
//                                             </Form.Group>
//                                         </Col>
//                                     </Row>
//                                     <Row>
//                                         <Col lg='4'>
//                                             <Form.Group  >
//                                                 <Form.Label > Species Image </Form.Label>
//                                                 <Col>
//                                                     <Form.Control
//                                                         style={{ width: '100%' }}
//                                                         type='file'
//                                                         onChange={this.onChangeImage}
//                                                     />
//                                                 </Col>
//                                             </Form.Group>
//                                         </Col>
//                                         {/* <Col lg='4'>
//                                             {imageUrl === '' ? <i class="fa fa-picture-o" style={{ fontSize: '5em' }} ></i> :
//                                                 <img src={imageUrl} height='150px' width='100%' />}

//                                         </Col> */}
//                                     </Row>
//                                     <Row>
//                                         <Col>
//                                             <Form.Group  >
//                                                 <Form.Label > Main Content </Form.Label>
//                                                 <Col>
//                                                     <Form.Control as='textarea'
//                                                         style={{ width: '100%' }}
//                                                         type='text'
//                                                         placeholder='Main Content'
//                                                         name='mainContent'
//                                                         value={values.mainContent}
//                                                         onChange={handleInputChange}
//                                                     />
//                                                 </Col>
//                                             </Form.Group>
//                                         </Col>
//                                     </Row>
//                                     <Row>
//                                         <Col>
//                                             <Form.Group  >
//                                                 <Form.Label > Sub Content </Form.Label>
//                                                 <Col>
//                                                     <Form.Control as='textarea'
//                                                         style={{ width: '100%' }}
//                                                         type='text'
//                                                         placeholder='Sub Content'
//                                                         name='subContent'
//                                                         value={values.subContent}
//                                                         onChange={handleInputChange}
//                                                     />
//                                                 </Col>
//                                             </Form.Group>
//                                         </Col>
//                                     </Row>
//                                 </div>
//                                 <Row className='d-flex justify-content-center' style={{ marginTop: '20px' }}>
//                                     <Button variant='danger' style={{ margin: '10px' }} onClick={updateItem}>Update</Button>
//                                 </Row>
//                             </Form>
//         </Modal.Body>
//         {/* <Modal.Footer> */}
//           {/* <Button onClick={this.props.onHide}>Close</Button> */}
//         {/* </Modal.Footer> */}
//       </Modal>
            
//             ):''}</div>
//     )
//   }
  

// import React, { Component } from 'react';
// import firebase from '../Firebase';
// import { Link } from 'react-router-dom';

const Edit=(props)=> {

    const initial= {
         key:null,
                  lab: '',
            name: '',
            class: '',
            order: '',
            family: '',
            //  imageUrl: '',
            // imageName: '',
            // imageFile: '',
            mainContent: '',
            subContent: '',
            category: '',
            //  categoryObj: '',
    };
    const [currentTutorial, setCurrentTutorial] = useState(initial);

    const { blog } = props;
    if (currentTutorial.id !== blog.id) {
      setCurrentTutorial(blog);
    }
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentTutorial({ ...currentTutorial, [name]: value });
      };

      const updateTutorial = () => {
        const data = {
                              lab: initial.lab,
                            name: initial.name,
                            class: initial.class,
                            order: initial.order,
                            family: initial.family,
                            // imageUrl: initial.imageUrl,
                            // imageName: initial.imageName,
                            //  imageFile: initial.imageFile,
                            mainContent: initial.mainContent,
                            subContent: initial.subContent,
                            category:initial.category,
                            //  categoryObj: initial.categoryObj,
        };
    
        contentRef.doc(currentTutorial.id).update(data)
          .then(() => {
            console.log("The tutorial was updated successfully!");
          })
          .catch((e) => {
            console.log(e);
          });
      };

  
    return (
         <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Edit
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              {currentTutorial ? (
              <Form style={{ margin: '0px 40px' }}>
                                      <Row className='d-flex justify-content-center' >
                                          <Form.Group as={Row} >
                                              <Form.Label > Select Laboratory </Form.Label>
                                              <Col>
                                                  <Form.Control as='select' name='lab' value={currentTutorial.lab} onChange={handleInputChange} required >
                                                      <option value='' disabled > </option>
                                                      <option value='botany' > Botany </option>
                                                      <option value='herbarium' > Herbarium </option>
                                                      <option value='zoology' >Zoology </option>
                                                  </Form.Control>
                                              </Col>
                                          </Form.Group>
                                      </Row>
                                      {/* <Row >
                                          {currentTutorial.category !== '' && this.CategorySelectLoop()}
                                      </Row> */}
                                      <div className='box' >
                                          <Row>
                                              <Col lg='6'>
                                                  <Form.Group  >
                                                      <Form.Label > Scientific Name </Form.Label>
                                                      <Col>
                                                          <Form.Control
                                                              type='text'
                                                              placeholder='Scientific Name'
                                                              name='name'
                                                              value={currentTutorial.name}
                                                              onChange={handleInputChange}
                                                          />
                                                      </Col>
                                                  </Form.Group>
                                              </Col>
                                              <Col lg='6'>
                                                  <Form.Group  >
                                                      <Form.Label > Class </Form.Label>
                                                      <Col>
                                                          <Form.Control
                                                              type='text'
                                                              placeholder='Class'
                                                              name='class'
                                                              value={currentTutorial.class}
                                                              onChange={handleInputChange}
                                                          />
                                                      </Col>
                                                  </Form.Group>
                                              </Col>
                                              <Col lg='6'>
                                                  <Form.Group  >
                                                      <Form.Label > Order </Form.Label>
                                                      <Col>
                                                          <Form.Control
                                                              type='text'
                                                              placeholder='order'
                                                              name='order'
                                                              value={currentTutorial.order}
                                                              onChange={handleInputChange}
                                                          />
                                                      </Col>
                                                  </Form.Group>
                                              </Col>
                                              <Col lg='6'>
                                                  <Form.Group  >
                                                      <Form.Label > Family </Form.Label>
                                                      <Col>
                                                          <Form.Control
                                                              type='text'
                                                              placeholder='Family'
                                                              name='family'
                                                              value={currentTutorial.family}
                                                              onChange={handleInputChange}
                                                          />
                                                      </Col>
                                                  </Form.Group>
                                              </Col>
                                          </Row>
                                          {/* <Row>
                                              <Col lg='4'>
                                                  <Form.Group  >
                                                      <Form.Label > Species Image </Form.Label>
                                                      <Col>
                                                          <Form.Control
                                                              style={{ width: '100%' }}
                                                              type='file'
                                                              onChange={handleInputChange}
                                                          />
                                                      </Col>
                                                  </Form.Group>
                                              </Col> */}
                                              {/* <Col lg='4'>
                                                  {imageUrl === '' ? <i class="fa fa-picture-o" style={{ fontSize: '5em' }} ></i> :
                                                      <img src={imageUrl} height='150px' width='100%' />}
      
                                              </Col> */}
                                          {/* </Row> */}
                                          <Row>
                                              <Col>
                                                  <Form.Group  >
                                                      <Form.Label > Main Content </Form.Label>
                                                      <Col>
                                                          <Form.Control as='textarea'
                                                              style={{ width: '100%' }}
                                                              type='text'
                                                              placeholder='Main Content'
                                                              name='mainContent'
                                                              value={currentTutorial.mainContent}
                                                              onChange={handleInputChange}
                                                          />
                                                      </Col>
                                                  </Form.Group>
                                              </Col>
                                          </Row>
                                          <Row>
                                              <Col>
                                                  <Form.Group  >
                                                      <Form.Label > Sub Content </Form.Label>
                                                      <Col>
                                                          <Form.Control as='textarea'
                                                              style={{ width: '100%' }}
                                                              type='text'
                                                              placeholder='Sub Content'
                                                              name='subContent'
                                                              value={currentTutorial.subContent}
                                                              onChange={handleInputChange}
                                                          />
                                                      </Col>
                                                  </Form.Group>
                                              </Col>
                                          </Row>
                                      </div>
                                      <Row className='d-flex justify-content-center' style={{ marginTop: '20px' }}>
                                          <Button variant='danger' style={{ margin: '10px' }} onClick={updateTutorial}>Update</Button>
                                      </Row>
                                  </Form>):''}
              </Modal.Body>
              {/* <Modal.Footer> */}
                {/* <Button onClick={this.props.onHide}>Close</Button> */}
              {/* </Modal.Footer> */}
            </Modal>
    );
  }





export default Edit;