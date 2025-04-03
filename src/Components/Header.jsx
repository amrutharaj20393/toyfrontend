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
function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
         <Navbar sticky="top" expand="md" className="bg-danger-subtle py-2">
  <Container fluid className="py-0">
    <Navbar.Brand className='text-danger fs-4 d-flex align-items-center py-0 my-0'>
      <FontAwesomeIcon icon={faBook} beat className='me-1' />
      Book Store
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
        <Nav.Item>
          <Link to="/Edit" className="nav-link text-success py-1 px-2">
            Category
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
                <Form.Control type="text" placeholder="Book Name" className='rounded w-10' />
              </InputGroup>
              
              <InputGroup className='m-1 p-2'>
                <Form.Control type="text" placeholder="Book Author" className='rounded ' />
              </InputGroup>
              <InputGroup className='m-1 p-2'>
                <Form.Control type="text" placeholder="Book Price" className='rounded ' />
              </InputGroup>
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer className='bg-warning-subtle'>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Header