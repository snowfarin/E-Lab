
import React, { Component } from 'react'
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

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
        key:'',
                  lab: 'botany',
            name: '',
            speciesClass: '',
            order: '',
            family: '',
            // imageUrl: '',
            imageName: '',
            // imageFile: '',
            mainContent: '',
            subContent: '',
            category: '',
            // categoryObj: '',
    };
  }

  componentDidMount() {
    const ref = contentRef.doc(this.props.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        // console.log("me",board)
        this.setState({
            key:doc.id,
            lab: board.lab,
                        name: board.name,
                        class: board.class,
                        order: board.order,
                        family: board.family,
                        // imageUrl: '',
                        imageName: board.imageName,
                        // imageFile: '',
                        mainContent: board.mainContent,
                        subContent: board.subContent,
                        category:board.category,
                        // categoryObj: '',
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {  lab,
                name,
                speciesClass,
                order,
                family,
                // imageUrl,
                imageName,
                // imageFile,
                mainContent,
                subContent,
                category,
                // categoryObj, 
            } = this.state;

    const updateRef = contentRef.doc(this.state.key);
    updateRef.set({
        lab,
        name,
        speciesClass,
        order,
        family,
        // imageUrl,
        imageName,
        // imageFile,
        mainContent,
        subContent,
        category,
        // categoryObj, 
    }).then((docRef) => {
      this.setState({
        key: '',
        lab: 'botany',
        name: '',
        speciesClass: '',
        order: '',
        family: '',
        // imageUrl: '',
        imageName: '',
        // imageFile: '',
        mainContent: '',
        subContent: '',
        category: '',
        // categoryObj: '',
      });
    //   this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
         <Modal
              {...this.props}
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
              <Form style={{ margin: '0px 40px' }}>
                                      <Row className='d-flex justify-content-center' >
                                          <Form.Group as={Row} >
                                              <Form.Label > Select Laboratory </Form.Label>
                                              <Col>
                                                  <Form.Control as='select' name='lab' value={this.state.lab} onChange={this.onChange} required >
                                                      <option value='' disabled > </option>
                                                      <option value='botany' > Botany </option>
                                                      <option value='herbarium' > Herbarium </option>
                                                      <option value='zoology' >Zoology </option>
                                                  </Form.Control>
                                              </Col>
                                          </Form.Group>
                                      </Row>
                                      <Row >
                                          {/* {category !== '' && this.CategorySelectLoop()} */}
                                      </Row>
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
                                                              value={this.state.name}
                                                              onChange={this.onChange}
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
                                                              name='speciesClass'
                                                              value={this.state.class}
                                                              onChange={this.onChange}
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
                                                              value={this.state.order}
                                                              onChange={this.onChange}
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
                                                              value={this.state.family}
                                                              onChange={this.onChange}
                                                          />
                                                      </Col>
                                                  </Form.Group>
                                              </Col>
                                          </Row>
                                          <Row>
                                              <Col lg='4'>
                                                  <Form.Group  >
                                                      <Form.Label > Species Image </Form.Label>
                                                      <Col>
                                                          <Form.Control
                                                              style={{ width: '100%' }}
                                                              type='file'
                                                              onChange={this.onChangeImage}
                                                          />
                                                      </Col>
                                                  </Form.Group>
                                              </Col>
                                              {/* <Col lg='4'>
                                                  {imageUrl === '' ? <i class="fa fa-picture-o" style={{ fontSize: '5em' }} ></i> :
                                                      <img src={imageUrl} height='150px' width='100%' />}
      
                                              </Col> */}
                                          </Row>
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
                                                              value={this.state.mainContent}
                                                              onChange={this.onChange}
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
                                                              value={this.state.subContent}
                                                              onChange={this.onChange}
                                                          />
                                                      </Col>
                                                  </Form.Group>
                                              </Col>
                                          </Row>
                                      </div>
                                      <Row className='d-flex justify-content-center' style={{ marginTop: '20px' }}>
                                          <Button variant='danger' style={{ margin: '10px' }} onClick={this.onSubmit}>Update</Button>
                                      </Row>
                                  </Form>
              </Modal.Body>
              {/* <Modal.Footer> */}
                {/* <Button onClick={this.props.onHide}>Close</Button> */}
              {/* </Modal.Footer> */}
            </Modal>
    );
  }
}




export default Edit;