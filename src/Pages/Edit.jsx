import React, { useEffect } from 'react'

import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Videocard from './Videocard';
import { AddCategoryApi, allCategoryApi, DeleteCategoryApi, UpdateCategoryApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';



function Edit({ CatDropUpdateStatus }) {
    const [categoryname, setCategoryName] = useState("")
    const [allcategory, setAllCategory] = useState([])
    const [addCategoryStatus, setAddCategoryStatus] = useState({})
    const [deletCategoryStatus, setdeleteCategoryStatus] = useState({})
    const [updateCatToyStatus, setupdateCatToyStatus] = useState({})

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        handleReset()
    }
    const handleShow = () => setShow(true);
    // console.log(categoryname)
    const addCategoryName = async () => {
        if (categoryname) {

            const reqBody = {
                category: categoryname,
                Toyslist: []
            }
            const result = await AddCategoryApi(reqBody)
            // console.log(result)
            if (result.status >= 200 && result.status < 300) {
                toast.success("New Category added sucessfully")
                handleClose()
                setAddCategoryStatus(result.data)

            }
            else {
                toast.error("Something went wrong")
                handleReset()
            }
        }

        else {
            toast.info('please enter a category name')
        }
    }
    const handleReset = () => {
        setCategoryName(" ")
    }

    const getAllCategory = async () => {
        const result = await allCategoryApi()
        //console.log(result)
        if (result.status >= 200 && result.status < 300) {
            setAllCategory(result.data)
        }
    }
    

    useEffect(() => {
        getAllCategory()
        console.log(CatDropUpdateStatus)
    }, [CatDropUpdateStatus, addCategoryStatus, deletCategoryStatus, updateCatToyStatus])

    const deleteCategory = async (id) => {
        const result = await DeleteCategoryApi(id)
        // console.log(result)
        if (result.status >= 200 && result.data < 300) {
            setdeleteCategoryStatus(result.data)
        }
    }
    //console.log(deletCategoryStatus)
    const categoryOver = (e) => {
        e.preventDefault()
    }
    const catDrop = async (e, catDetails) => {
        //console.log(e)
        console.log(catDetails)
        const toysDetails = JSON.parse(e.dataTransfer.getData("toysDetails"))
        //console.log(toysDetails)

        if (catDetails.Toyslist.find((item) => item.id == toysDetails.id)) {
            toast.error("Toy already exists in this category")
        }
        else {
            catDetails.Toyslist.push(toysDetails)
            const result = await UpdateCategoryApi(catDetails.id, catDetails)
            console.log(result.data)
            if (result.status >= 200 && result.status < 300) {
                setupdateCatToyStatus(result.data)
            }
        }
    }
    return (
        <>
            <Container fluid className='mt-4'>
                <h4 className='text-center fs-3 mb-5'>Category</h4>


                <Button variant="warning" className='rounded w-100 mt-3 mb-2' onClick={handleShow}>Add Category For Toys</Button>


                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton className='bg-warning-subtle'>
                        <Modal.Title className='bg-warning-subtle'>Add New Category Toy</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-warning-subtle'>
                        <Form className='border rounded p-3'>
                            <Form.Group controlId="exampleForm.ControlInput1" className='50'>
                                {/* Input and Button in the Same Line */}
                                <InputGroup className='m-1 p-2'>
                                    <Form.Control type="text" value={categoryname} placeholder="Toy Name" className='rounded w-10' onChange={(e) => setCategoryName(e.target.value)} />
                                </InputGroup>


                            </Form.Group>
                        </Form>


                    </Modal.Body>
                    <Modal.Footer className='bg-warning-subtle'>
                        <Button variant="secondary" onClick={handleReset}>
                            Reset
                        </Button>
                        <Button variant="primary" onClick={addCategoryName}>
                            Add Category
                        </Button>
                    </Modal.Footer>
                </Modal>

                {allcategory?.length > 0 ?
                    allcategory?.map((item, index) => (
                        <Form className='border border-secondary rounded p-3 mt-4' key={index} droppable="true" onDragOver={(e) => categoryOver(e)} onDrop={(e) => catDrop(e, item)}>
                            <div className="container d-flex justify-content-between mt-2">
                                <h5 className="">{item?.category}</h5>
                                <button onClick={() => deleteCategory(item?.id)} className='btn btn-danger mb-2'><FontAwesomeIcon icon={faTrashCan} /></button>

                            </div>
                            {item?.Toyslist.map((toys, index) =>
                            (
                                <div key={index}>
                                    <Videocard toys={toys} isPresent={true} catDetails={item} isOk={true} />
                                </div>
                            ))}




                        </Form>
                    )
                    )
                    :
                    <p className='text-danger mt-4 text-center '>No category yet added</p>
                }

            </Container>
            <ToastContainer position='top-center' theme="colored" autoClose={2000} />
        </>
    )
}

export default Edit