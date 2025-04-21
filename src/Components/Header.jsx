import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { ToyAddApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';
function Header({setBookStatus}) {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    handleReset()

  }

  const handleShow = () => setShow(true);
  const [newtoy, setNewToy] = useState({
    toyname: "",
    brand: "",
    price: "",
    image:""

  })
  console.log(newtoy)

  const handleReset = () => {
    setNewToy({
      toyname: "",
      brand: "",
      price: "",
      image:""
    })
    // console.log(newbook)


  }
  const handleAdd = async () => {
    const { toyname, brand, price,image } = newtoy
    if (!toyname || !brand || !price||!image) {
      alert("Please fill All details")
    }
    else {
      const result = await ToyAddApi({toyname,brand,price,image})
      console.log(result.data)
      if(result.status>=200 && result.status<300){
        toast.success("New toy added sucessfully")
        handleClose()
        setBookStatus(result.data)
      }
      else{
        toast.error("Something went wrong")
        handleReset()
      }
    }

  }
  return (
    <>
      <Navbar sticky="top" expand="md" className="bg-danger-subtle py-2">
        <Container fluid className="py-0">
          <Navbar.Brand className='text-danger fs-4 d-flex align-items-center py-0 my-0'>
            {/* <FontAwesomeIcon icon={faBook} beat className='me-1' /> */}
            <img src="https://toycra.com/cdn/shop/files/Toycra_Logo-01_5e134934-c608-4d7f-948b-1a51215cabbb_1482x400.jpg?v=1711615212" alt="" height={'50px'} />
            {/* Toy Store */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto small fs-5 d-flex align-items-center">
              <Nav.Item>
                <Link to="/" className="nav-link text-success py-1 px-2">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Link onClick={handleShow} className="nav-link text-success py-1 px-2">
                Add
              </Nav.Link>
              <Nav.Item>
                <Link to="/View" className="nav-link text-success py-1 px-2">
                  View
                </Link>
              </Nav.Item>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className='bg-warning-subtle'>
          <Modal.Title ><FontAwesomeIcon icon={faSquarePlus} className='me-2' /> Add New Books</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-warning-subtle'>
          <p>Please fill the following details</p>
          <Form className='border rounded p-3'>
            <Form.Group controlId="exampleForm.ControlInput1" className='50'>
              {/* Input and Button in the Same Line */}
              <InputGroup className='m-1 p-2'>
                <Form.Control type="text" value={newtoy.toyname} placeholder="Toy Name" className='rounded w-10' onChange={(e) => setNewToy({ ...newtoy, toyname: e.target.value })} />
              </InputGroup>

              <InputGroup className='m-1 p-2'>
                <Form.Control type="text" value={newtoy.brand} placeholder="Toy Brand" className='rounded ' onChange={(e) => setNewToy({ ...newtoy, brand: e.target.value })} />
              </InputGroup>
              <InputGroup className='m-1 p-2'>
                <Form.Control type="text" value={newtoy.price} placeholder="Toy Price" className='rounded ' onChange={(e) => setNewToy({ ...newtoy, price: e.target.value })} />
              </InputGroup>
              <InputGroup className='m-1 p-2'>
                <Form.Control type="text" value={newtoy.image} placeholder="Toy ImageLink" className='rounded ' onChange={(e) => setNewToy({ ...newtoy, image: e.target.value })} />
              </InputGroup>
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer className='bg-warning-subtle'>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme="colored" autoClose={2000} />

    </>
  )
}

export default Header