import React, { Component } from 'react'
import { Row, Col, Form, Button,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { categoryRef, contentRef, imagesRef } from '../../../firebase/Firebase'
import { firebaseLooper } from '../../../firebase/FirebaseLooper'
import Category from '../../admin/tools/Category'
import Gallery from '../tools/Gallery'
import Swal from 'sweetalert2'

export class Filter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lab: this.props.lab,
            category: '',
            categoryList: [],
            condition: '',
            filterData: '',
            data_list: [],
            filterObj: '',
        }
    }
    componentDidMount() {

        categoryRef.doc(`${this.props.lab}Relation`).get().then(res => {
            const relation = res.data()
            this.setState({ relation })
            console.log(relation, 'relation')
        })
        Swal.fire({
            title: 'Loading',
            allowEscapeKey: false,
            allowOutsideClick: false,
            timer: 3000,
            onOpen: () => {
                Swal.showLoading();
                //   axios.post(`${process.env.REACT_APP_URL}/api/clientadmin/`, formdata)       
                const initialArray = [];
                return contentRef
                    .where(`lab`, '==', `${this.props.lab}`)
                    .get()
                    .then((querySnapshot) => {
                        const promises = [];

                        querySnapshot.forEach((doc) => {
                            const { name, imageName } = doc.data();
                            let imageRef = imagesRef.child(`${imageName}`);
                            promises.push(imageRef.getDownloadURL());
                            initialArray.push({
                                ...doc.data(),
                                id: doc.id,
                            });
                        });
                        return Promise.all(promises);
                    })
                    .then((urlsArray) => {

                        const fullArray = [];
                        urlsArray.forEach((url, index) => {
                            const initialObj = initialArray[index];
                            initialObj['imageUrl'] = url;
                            fullArray.push(initialObj);
                        });
                        this.setState({ filterData: fullArray, data_list: fullArray })
                        this.props.setFilterData(fullArray)
                        console.log(fullArray, 'fullArray')
                    })

            }
        })

    }


    onChange = (e) => {

        let filterData = '';
        filterData = this.state.data_list.filter(data => Object.values(data).includes(e.target.label))
        console.log(e.target.value, e.target.label, filterData, 'filterData')

        let keys = Object.keys(this.state.filterObj)
        let obj = {}

        for (let i = 0; i < keys.length; i++) {

            if (keys[i] === e.target.value) {
                obj = {
                    ...obj,
                    [keys[i]]: e.target.label,
                }
                this.props.setFilterData(filterData)
                this.setState({ filterObj: obj, filterData })
                return
            }
            obj = {
                ...obj,
                [keys[i]]: this.state.filterObj[keys[i]],
            }
        }
        this.props.setFilterData(filterData)
        this.setState(prevState => {
            return {
                filterObj: {
                    ...prevState.filterObj,
                    [e.target.value]: e.target.label
                }, filterData
            }
        })
    }

    render() {
        const { lab, category, categoryList, filterData, relation, filterArray, filterObj } = this.state;
        //console.log(this.props.imageData, filterArray, filterObj, 'filterData')
        return (
            <>
                <div className='filter' style={{ position: 'relative', bottom: '80px' }}>
                    {lab === 'botany' ?
                        <>
                            <Row className='d-flex justify-content-center'>
                                <p style={{ fontSize: '4em' }}> BOTANY - MUSEUM </p>
                            </Row>

                            <Row className='d-flex justify-content-center'>
                            <Container>
                                <p> Plants and plant organs were the first exhibits in the Botany Museum. These specimens have been preserved and are on display in the Room. The E-Museum is a comprehensive online resource for non-flowering and flowering plants. This will be an electronic museum with detailed information on each specimen. The E-Museum incorporates the entire collection of all species in a seamless manner. This platform will offer a variety of services. </p>
                                </Container> 
                            </Row>

                            <hr style={{ color: 'grey', backgroundColor: 'grey', width: '60%' }}></hr>
                        </> :
                        lab === 'herbarium' ?
                        <>
                            <Row className='d-flex justify-content-center'>
                                <p style={{ fontSize: '4em' }}> HERBARIUM - MUSEUM</p>
                            </Row>

                            <Row className='d-flex justify-content-center'>
                            <Container>
                                <p> The online database is based on information from the herbarium, a selection of dried and pressed plant specimens. This online database will provide detailed information about each plant species, including its common name, systematic location, and taxonomic description. The online data base is a critical first step in resolving concerns of the environment. </p>
                                </Container>
                            </Row>

                            <hr style={{ color: 'grey', backgroundColor: 'grey', width: '60%' }}></hr>
                        </>:
                        lab === 'zoology' ?
                        <>
                            <Row className='d-flex justify-content-center'>
                                <p style={{ fontSize: '4em' }}> ZOOLOGY - MUSEUM </p>
                            </Row>
                            <Row className='d-flex justify-content-center'>
                            <Container>
                                <p> The Museum houses an extensive collection of scientifically important zoological material. It  harbors animals in fixing fluids, dried or specially prepared animals, stuffed animals, skeletons, hides, and articles made from horns, bones, shells, etc. In Zoological museums scientific research is conducted on the taxonomic description of fauna, zoogeography, variations, comparative morphology and anatomy, and evolution, that is, historical development. </p>
                                </Container>
                            </Row>
                            <hr style={{ color: 'grey', backgroundColor: 'grey', width: '60%' }}></hr>
                        </>:''}

                    <Row className='d-flex justify-content-center' >

                        <div className='dropdown'>
                            <Button variant='danger'> Kingdom <i class="fa fa-angle-down" aria-hidden="true"></i> </Button>
                            <div className='dropdown-content'>
                                {relation !== undefined && relation.kingdom.map(value =>
                                    <option value='kingdom' label={value} onClick={this.onChange}> {value} </option>
                                )}
                            </div>
                        </div>

                        {filterObj !== '' && Object.keys(filterObj).map((key, i) =>
                            relation[filterObj[key]] !== undefined &&
                            <div className='dropdown'>
                                <Button variant='danger'> {filterObj[key]} <i class="fa fa-angle-down" aria-hidden="true"></i> </Button>
                                <div className='dropdown-content'>
                                    {relation[filterObj[key]].map(value =>
                                        <option value={filterObj[key]} label={value} onClick={this.onChange}> {value} </option>
                                    )}
                                </div>
                            </div>
                        )
                        }
                    </Row>

                </div>
                {filterData !== '' && <Gallery filterData={filterData} imageData={this.props.imageData} setImageData={this.props.setImageData} />}


            </>
        )
    }
}

export default Filter
