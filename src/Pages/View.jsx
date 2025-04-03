import React from 'react'
import Videocard from './Videocard'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function View() {
    return (
        <>
            <div className="container-fluid  ">
                <h1 className='text-center mt-4'>Our Latest Book Collection</h1>
                <div className="row mt-4 w-100">
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-10">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-md-2 p-2">
                                <Card style={{ width: '100%' }} className='p-2'>
                                    <Card.Img variant="top" src="https://www.bookswagon.com/productimages/images200/742/9789365697742.jpg" height={'250px'} />
                                    <Card.Body>
                                        <Card.Title className='fs-6 mt-2'> SHAH RUKH KHAN (Hardback), Mohar Basu (Author) </Card.Title>
                                        <Card.Text className='ms-2 fs-5 text-success me-4'> Rs:$685 <span className='ms-3'><FontAwesomeIcon icon={faTrash} className='text-danger' /> </span> </Card.Text>

                                    </Card.Body>
                                </Card>
                                {/* <Videocard /> */}
                            </div>
                            <div className="col-md-2 p-2">
                                {/* <Videocard /> */}
                                <Card style={{ width: '100%' }} className='p-2'>
                                    <Card.Img variant="top" src="https://manybooks.net/sites/default/files/styles/220h330sc_new/public/webform/ebook_feature_application/11176/cover.jpg?itok=pWSUw6qV" height={'250px'} />
                                    <Card.Body>
                                        <Card.Title className='fs-6 mt-2'> Granny Goes To Egypt, Anna Kay (Author) </Card.Title>
                                        <Card.Text className='ms-2 fs-5 text-success me-4'> Rs:$400 <span className='ms-3'><FontAwesomeIcon icon={faTrash} className='text-danger' /> </span> </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-2 p-2">
                                {/* <Videocard /> */}
                                <Card style={{ width: '100%' }} className='p-2'>
                                    <Card.Img variant="top" src="https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-cust-4215.jpg?itok=mjWEyajR" height={'250px'} />
                                    <Card.Body>
                                        <Card.Title className='fs-6 mt-2'> The Arabian Nights, U.C Ringuer (Author) </Card.Title>
                                        <Card.Text className='ms-2 fs-5 text-success me-4'> Rs:$40 <span className='ms-3'><FontAwesomeIcon icon={faTrash} className='text-danger' /> </span> </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-2 p-2">
                                {/* <Videocard /> */}
                                <Card style={{ width: '100%' }} className='p-2'>
                                    <Card.Img variant="top" src="https://manybooks.net/sites/default/files/styles/220x330sc/public/2018-06/48.jpg?itok=hGCIRnyY" height={'250px'} />
                                    <Card.Body>
                                        <Card.Title className='fs-6 mt-2'> After The Cure,Dierdre Gloud (Author) </Card.Title>
                                        <Card.Text className='ms-2 fs-5 text-success me-4'> Rs:$40 <span className='ms-4'><FontAwesomeIcon icon={faTrash} className='text-danger' /> </span> </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">

                    </div>


                </div>
            </div>

        </>
    )
}

export default View