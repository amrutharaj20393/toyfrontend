import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
    <Container fluid>
      <Row  className='mt-5 p-md-5 p-3 d-flex justify-content-center align-items-center'>
        <Col md={4} className='text-warning mb-3'>
        <FontAwesomeIcon icon={faBook} beat className='me-3 ms-2 fs-4 '  /><span className='fs-4  '>Book Store</span>

        <p className='p-2 text-black'  style={{textAlign:'justify'}}>We offer a huge collection of books from diverse categories of Fiction, Non-fiction, Biographies, History, Religion, Self-Help, etc. We also offer a collection of Investments and Management, Computers, Engineering, Medical, College and School text reference books.

        </p>
        </Col>
        <Col md={2} className="p-3 ">
        <h3 className="fs-4">Links</h3>
       
        <Link to={'/'} style={{textDecoration:'none'}}><p className='fs-6 mt-2 mb-3 '>Home Page</p></Link>
        <Link to={'/View'} style={{textDecoration:'none'}}><p className='fs-6 mt-2 mb-3'>View</p></Link>
        <Link to={'/Edit'} style={{textDecoration:'none'}}><p className='fs-6 mt-2 mb-3'>Category</p></Link>
        </Col>
        <Col md={2} >
       <h3 className='fs-4 '>Guides</h3>
        <h5 className='fs-6 mt-2 mb-3'>React</h5>
        <h5 className='fs-6 mt-2 mb-3'>React Bootstrap</h5>
        <h5 className='fs-6 mt-2 mb-3'>Bootswatch</h5>
        </Col>
        <Col  md={4} className="p-3">
        <h3 className=' fs-4'>Contact Us</h3>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <InputGroup className='gap-2 m-2'>
                <Form.Control type="email" placeholder="name@example.com" className='rounded'/>
                <Button variant="warning" className='rounded'>Subscribe</Button>
              </InputGroup>
            </Form.Group>
          </Form>
          <FontAwesomeIcon icon={faCamera} className='p-3 fs-5' />
          <FontAwesomeIcon icon={faFacebook}  className='p-3 fs-5' />
          <FontAwesomeIcon icon={faSquareInstagram} className='p-3 fs-5'  />
          <FontAwesomeIcon icon={faLinkedin} className='p-3 fs-5' />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Footer