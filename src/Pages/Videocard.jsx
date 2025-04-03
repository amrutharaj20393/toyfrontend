import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Videocard() {
    return (
        <>
            <Card style={{ width: '100%' }} className='p-2'>
                <Card.Img variant="top" src="https://www.bookswagon.com/productimages/images200/742/9789365697742.jpg" height={'250px'} />
                <Card.Body>
                    <Card.Title className='fs-6 mt-2'> SHAH RUKH KHAN (Hardback), Mohar Basu (Author) </Card.Title>
                    <Card.Text className='ms-2 fs-5 text-success me-4'> Rs:$40 <span className='ms-4'><FontAwesomeIcon icon={faTrash} className='text-danger' /> </span> </Card.Text>

                </Card.Body>
            </Card>
        </>
    )
}

export default Videocard