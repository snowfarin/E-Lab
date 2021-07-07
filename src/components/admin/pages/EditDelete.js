import React, { useContext , useEffect, useState } from 'react'
import { Row, Col, Form,Button} from 'react-bootstrap'
// import {Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { categoryRef, contentRef, imagesRef,db } from '../../../firebase/Firebase'
import { firebaseLooper } from '../../../firebase/FirebaseLooper'
import Category from '../tools/Category'
import Gallery from '../../template/tools/Gallery'
import Swal from 'sweetalert2'
import Header from '../tools/Header'
import Edit from './EditModal'

function EditDelete(){

    const [dummyBlog,setdummyBlog]=useState([])
    const [original,setOriginal]=useState([])
    const [search,setSearch]=useState('')
    const [input,setInput]=useState('')
    const [modalShow, setModalShow] = useState(false);
    const [currentId, setCurrentId] = useState(''); 
    const [render,setRender]=useState(false)

    const fetchBlogs=async()=>{
       contentRef.get().then(res=>{
          const forms = firebaseLooper(res)
          setOriginal(forms)
          setdummyBlog(forms)
          setSearch(forms)
        //   console.log(forms)
        })
      }
// console.log('Mine',original)
    const fetch=(value)=>{
        // const data=original.filter(blog=>blog.category==value)
        // setdummyBlog(data)
        if(value==undefined){
            fetchBlogs()
        }else{
        contentRef.where("lab","==",value).get().then(res=>{
            const forms = firebaseLooper(res)
            setdummyBlog(forms)
            // console.log(forms)
        })
    }}

    const searchbox=(e)=>{
        // const data=original.filter(blog=>blog.category==value)
        // setdummyBlog(data)
       contentRef.where("name","==",input).get().then(res=>{
            const forms = firebaseLooper(res)
            setdummyBlog(forms)
            // console.log(forms)
        })
    }

    // const Edit = (obj) => {
    //   contentRef(`Content/${currentId}`).set(  
    //         obj,  
    //         err => {  
    //             if (err)  
    //                 console.log(err)  
    //             else  
    //                 setCurrentId('')  
    //         })  
    //     }

        const onDelete = id => {                
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    
                    if (result.isConfirmed) {
                        contentRef.doc(id).delete().then(() => {
                            // console.log("Document successfully deleted!");
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                              setRender(!render)
                        }).catch((error) => {
                            // console.error("Error removing document: ", error);
                          });
                      
                     
                    }
                  })
              
        } 


console.log('Mine',dummyBlog)
    useEffect(()=>{
      fetchBlogs()
    },[render])


    return(
        <div>
        <Header />
       <div className='container'>
        <Button variant='dark'  onClick={()=>fetch()}>All</Button>{" "}
        <Button variant='dark' onClick={()=>fetch('botany')}>Botany</Button>{" "}
        <Button variant='dark' onClick={()=>fetch('herbarium')}>Herbarium</Button>{" "}
        <Button variant='dark' onClick={()=>fetch('zoology')}>Zoology</Button>
        <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        Total : {dummyBlog.length}
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Search..." className="rounded-pill form-control" id="" onChange={(e)=>setInput(e.target.value)}/>
                        
                        <button type='submit' onClick={searchbox} style={{position:'absolute',bottom:'40%',left:'85%'}}><i className='fa fa-search' ></i></button>
                    </div>
                </div>
            </div>
            <div className="row">
            <table className="ui single line table">
                                    <thead>
                                    
                                            <tr >
                                                <th >Name</th>
                                                <th >Class</th>
                                                <th >Family</th>
                                                <th >Edit</th>
                                                <th >Delete</th>
                                            </tr>
                                    </thead> 
                                    
                                    <tbody>
                                    {dummyBlog.map(dummy=>
                                        <tr key={dummy.id}>
                                                <td>{dummy.name}</td>
                                                <td>{dummy.class}</td>
                                                <td>{dummy.family}</td>
                                            
                                                <td><Button variant="outline-success" onClick={() => setModalShow(true)}>Edit</Button></td>
                                                <td><button style={{ border: 'none' }}  onClick={() =>  onDelete(dummy.id) }><i className="fa fa-trash" style={{ fontSize: "18px", color: "red" }}></i></button></td>
                                            </tr>
                                   
                                        )} 
                                       
                                    </tbody>   
                                </table></div>
                                <Edit
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    blog={dummyBlog}
                                    />
       </div> </div>
    )

}
export default EditDelete
